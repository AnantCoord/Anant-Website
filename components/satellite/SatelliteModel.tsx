"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useRouter } from "next/navigation";
import * as THREE from "three";
import { useSubsystemState, SUBSYSTEM_INFO } from "./useSubsystemState";
import { SUBSYSTEM_COLORS, SubsystemKey } from "@/lib/motion";

// Placeholder CubeSat model built from primitives
// Replace this with a proper GLTF model when available
// Use: useGLTF("/models/cubesat.glb") from @react-three/drei

interface SubsystemMeshProps {
  name: SubsystemKey;
  position: [number, number, number];
  size: [number, number, number];
  children?: React.ReactNode;
}

function SubsystemMesh({ name, position, size, children }: SubsystemMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const router = useRouter();
  const { hovered, setHovered, getColor, getInfo } = useSubsystemState();
  
  const isHovered = hovered === name;
  const baseColor = getColor(name);
  const info = getInfo(name);
  
  // Emissive intensity animation
  const emissiveIntensity = useMemo(() => (isHovered ? 0.5 : 0), [isHovered]);
  
  return (
    <mesh
      ref={meshRef}
      name={name}
      position={position}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(name);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(null);
        document.body.style.cursor = "auto";
      }}
      onClick={(e) => {
        e.stopPropagation();
        router.push(info.route);
      }}
    >
      <boxGeometry args={size} />
      <meshStandardMaterial
        color={isHovered ? baseColor : "#1e293b"}
        emissive={baseColor}
        emissiveIntensity={emissiveIntensity}
        metalness={0.8}
        roughness={0.2}
        transparent
        opacity={isHovered ? 1 : 0.85}
      />
      {children}
    </mesh>
  );
}

// Solar panel component
function SolarPanel({ position, rotation }: { 
  position: [number, number, number]; 
  rotation?: [number, number, number] 
}) {
  const { hovered, setHovered } = useSubsystemState();
  const isHovered = hovered === "EPS";
  const router = useRouter();
  
  return (
    <mesh
      position={position}
      rotation={rotation}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered("EPS");
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(null);
        document.body.style.cursor = "auto";
      }}
      onClick={(e) => {
        e.stopPropagation();
        router.push("/subsystems/eps");
      }}
    >
      <boxGeometry args={[1.8, 0.02, 0.8]} />
      <meshStandardMaterial
        color={isHovered ? SUBSYSTEM_COLORS.EPS : "#1a365d"}
        emissive={SUBSYSTEM_COLORS.EPS}
        emissiveIntensity={isHovered ? 0.5 : 0.1}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  );
}

export function SatelliteModel() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Slow idle rotation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });
  
  // Floating animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main body - 3U CubeSat frame (10x10x30 cm scaled) */}
      <group>
        {/* STS - Structural frame (outer shell) */}
        <SubsystemMesh 
          name="STS" 
          position={[0, 0, 0]} 
          size={[1, 1, 3]}
        />
        
        {/* OBC - On-Board Computer (center) */}
        <SubsystemMesh 
          name="OBC" 
          position={[0, 0, 0.5]} 
          size={[0.8, 0.8, 0.6]}
        />
        
        {/* ADCS - Attitude control (bottom section) */}
        <SubsystemMesh 
          name="ADCS" 
          position={[0, 0, -1]} 
          size={[0.9, 0.9, 0.8]}
        />
        
        {/* TTC - Communications (top with antenna suggestion) */}
        <SubsystemMesh 
          name="TTC" 
          position={[0, 0, 1.2]} 
          size={[0.85, 0.85, 0.4]}
        />
        
        {/* Antenna */}
        <mesh position={[0, 0.6, 1.4]}>
          <cylinderGeometry args={[0.02, 0.02, 0.5]} />
          <meshStandardMaterial 
            color="#94a3b8" 
            metalness={0.9} 
            roughness={0.1}
          />
        </mesh>
        
        {/* PAYLOAD - Hyperspectral imager (front face) */}
        <SubsystemMesh 
          name="PAYLOAD" 
          position={[0.55, 0, 0]} 
          size={[0.15, 0.6, 1.5]}
        />
        
        {/* Payload lens */}
        <mesh position={[0.7, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.15, 0.15, 0.1, 32]} />
          <meshStandardMaterial 
            color="#1e1b4b"
            metalness={0.3}
            roughness={0.1}
            transparent
            opacity={0.9}
          />
        </mesh>
      </group>
      
      {/* EPS - Solar panels */}
      <SolarPanel position={[0, 0.55, 0]} />
      <SolarPanel position={[0, -0.55, 0]} />
      
      {/* Deployable solar panels (wings) */}
      <SolarPanel position={[-1.4, 0, 0]} rotation={[0, 0, Math.PI / 2]} />
      <SolarPanel position={[1.8, 0, 0]} rotation={[0, 0, Math.PI / 2]} />
    </group>
  );
}

// Export for external use
export { SubsystemMesh };
