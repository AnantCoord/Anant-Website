"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface ParallaxLayerProps {
  children: React.ReactNode;
  className?: string;
  depth?: number; // 0 = no movement, 1 = full movement, negative = inverse
  invert?: boolean;
}

/**
 * Layer that moves based on mouse position, creating depth.
 * Use depth values like 0.02-0.1 for subtle effect.
 */
export function ParallaxLayer({
  children,
  className,
  depth = 0.05,
  invert = false,
}: ParallaxLayerProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 80 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      // Normalize to center (0,0)
      const normalizedX = (e.clientX / window.innerWidth - 0.5) * 2;
      const normalizedY = (e.clientY / window.innerHeight - 0.5) * 2;
      
      const multiplier = invert ? -1 : 1;
      mouseX.set(normalizedX * depth * 100 * multiplier);
      mouseY.set(normalizedY * depth * 100 * multiplier);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY, depth, invert]);

  return (
    <motion.div
      className={cn(className)}
      style={{ x, y }}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Container for parallax content. Prevents overflow.
 */
export function ParallaxContainer({ children, className }: ParallaxContainerProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {children}
    </div>
  );
}
