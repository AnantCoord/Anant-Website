"use client";

import { motion, useMotionValue, useSpring, MotionStyle } from "framer-motion";
import { useRef, useEffect, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number; // How far it moves (pixels)
  radius?: number; // Activation radius (pixels)
}

/**
 * Wrapper that makes children subtly attract toward cursor.
 * Effect is gentle - professional, not playful.
 */
export function Magnetic({
  children,
  className,
  strength = 20,
  radius = 100,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 100 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
      
      if (distance < radius) {
        // Ease out the effect as distance increases
        const factor = 1 - distance / radius;
        x.set(distanceX * factor * (strength / 50));
        y.set(distanceY * factor * (strength / 50));
        setIsHovered(true);
      } else {
        x.set(0);
        y.set(0);
        setIsHovered(false);
      }
    };

    const handleLeave = () => {
      x.set(0);
      y.set(0);
      setIsHovered(false);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    element.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      element.removeEventListener("mouseleave", handleLeave);
    };
  }, [x, y, strength, radius]);

  const motionStyle: MotionStyle = { x: smoothX, y: smoothY };

  return (
    <motion.div
      ref={ref}
      className={cn("inline-block", className)}
      style={motionStyle}
      data-magnetic-hovered={isHovered}
    >
      {children}
    </motion.div>
  );
}
