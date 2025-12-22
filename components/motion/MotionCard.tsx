"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { itemReveal, EASE } from "@/lib/motion";

interface MotionCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  enableTilt?: boolean;
  onClick?: () => void;
}

/**
 * A card with 3D tilt effect on hover - mechanical engineering feel.
 * Uses mouse position to calculate rotation.
 */
export function MotionCard({ 
  children, 
  className,
  glowColor = "rgba(59, 130, 246, 0.3)",
  enableTilt = true,
  onClick,
}: MotionCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animation
  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const scale = useSpring(1, springConfig);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !enableTilt) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Normalize to -0.5 to 0.5 range
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };
  
  const handleMouseEnter = () => {
    scale.set(1.03);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    scale.set(1);
  };
  
  return (
    <motion.div
      ref={ref}
      variants={itemReveal}
      style={{
        rotateX: enableTilt ? rotateX : 0,
        rotateY: enableTilt ? rotateY : 0,
        scale,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={cn(
        "relative cursor-pointer transition-shadow duration-300",
        "hover:shadow-[0_0_30px_var(--glow-color)]",
        className
      )}
      // @ts-ignore - CSS custom property
      style={{
        ...{
          rotateX: enableTilt ? rotateX : 0,
          rotateY: enableTilt ? rotateY : 0,
          scale,
          transformStyle: "preserve-3d",
          perspective: 1000,
        },
        "--glow-color": glowColor,
      } as React.CSSProperties}
    >
      {children}
    </motion.div>
  );
}

/**
 * A simpler hover card without tilt - just scale and glow.
 */
export function MotionCardSimple({
  children,
  className,
  onClick,
}: Omit<MotionCardProps, "enableTilt" | "glowColor">) {
  return (
    <motion.div
      variants={itemReveal}
      whileHover={{ 
        scale: 1.03,
        transition: EASE.spring 
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn("cursor-pointer", className)}
    >
      {children}
    </motion.div>
  );
}
