"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

interface CursorGlowProps {
  color?: string;
  size?: number;
  opacity?: number;
}

/**
 * Global cursor spotlight effect.
 * Renders a subtle glow that follows the cursor.
 */
export function CursorGlow({
  color = "rgba(120, 119, 198, 0.08)",
  size = 600,
  opacity = 1,
}: CursorGlowProps) {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleLeave = () => {
      mouseX.set(-1000);
      mouseY.set(-1000);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseleave", handleLeave);
    
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(${size}px circle at ${x}px ${y}px, ${color}, transparent 60%)`,
        opacity,
      }}
      aria-hidden="true"
    />
  );
}
