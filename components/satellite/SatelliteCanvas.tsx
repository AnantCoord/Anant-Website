"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { 
  OrbitControls, 
  PerspectiveCamera, 
  Environment,
  Stars,
  Float,
  useProgress,
  Html,
} from "@react-three/drei";
import { SatelliteModel } from "./SatelliteModel";
import { SubsystemTooltip } from "./SubsystemTooltip";
import { useSubsystemState } from "./useSubsystemState";
import { SubsystemKey } from "@/lib/motion";
import * as THREE from "three";

// Loading indicator
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-white text-sm font-mono">
        Loading... {progress.toFixed(0)}%
      </div>
    </Html>
  );
}

// Scene lighting setup
function Lighting() {
  return (
    <>
      {/* Main key light */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      
      {/* Fill light */}
      <directionalLight
        position={[-5, 3, -5]}
        intensity={0.5}
        color="#60a5fa"
      />
      
      {/* Rim light */}
      <directionalLight
        position={[0, -5, 5]}
        intensity={0.3}
        color="#8b5cf6"
      />
      
      {/* Ambient light */}
      <ambientLight intensity={0.2} />
      
      {/* Point lights for subsystem glow effect */}
      <pointLight position={[2, 0, 0]} intensity={0.3} color="#a855f7" />
      <pointLight position={[-2, 0, 0]} intensity={0.3} color="#3b82f6" />
    </>
  );
}

// Tooltip positions for each subsystem
const TOOLTIP_POSITIONS: Record<SubsystemKey, [number, number, number]> = {
  ADCS: [0, 0.8, -1],
  EPS: [0, 1.5, 0],
  OBC: [0, 0.8, 0.5],
  TTC: [0, 1, 1.2],
  STS: [0.8, 0.8, 0],
  PAYLOAD: [1.2, 0.5, 0],
};

// Scene content
function Scene() {
  const hovered = useSubsystemState((s) => s.hovered);
  
  return (
    <>
      <Lighting />
      
      {/* Starfield background */}
      <Stars
        radius={100}
        depth={50}
        count={2000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />
      
      {/* Satellite with float effect */}
      <Float
        speed={1.5}
        rotationIntensity={0.1}
        floatIntensity={0.3}
      >
        <SatelliteModel />
        
        {/* Tooltips for each subsystem */}
        {(Object.keys(TOOLTIP_POSITIONS) as SubsystemKey[]).map((key) => (
          <SubsystemTooltip
            key={key}
            subsystem={key}
            position={TOOLTIP_POSITIONS[key]}
          />
        ))}
      </Float>
    </>
  );
}

interface SatelliteCanvasProps {
  className?: string;
  enableControls?: boolean;
  cameraPosition?: [number, number, number];
  autoRotate?: boolean;
}

export function SatelliteCanvas({ 
  className = "", 
  enableControls = true,
  cameraPosition = [4, 2, 4],
  autoRotate = false,
}: SatelliteCanvasProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <PerspectiveCamera
          makeDefault
          position={cameraPosition}
          fov={45}
        />
        
        {enableControls && (
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={3}
            maxDistance={12}
            autoRotate={autoRotate}
            autoRotateSpeed={0.5}
            // Limit vertical rotation
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI * 0.75}
          />
        )}
        
        <Suspense fallback={<Loader />}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Smaller preview version
export function SatellitePreview({ className = "" }: { className?: string }) {
  return (
    <SatelliteCanvas
      className={className}
      enableControls={false}
      cameraPosition={[5, 2, 5]}
      autoRotate={true}
    />
  );
}
