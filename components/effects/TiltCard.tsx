"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number; // degrees
  glareOpacity?: number;
  scale?: number;
}

/**
 * Card with perspective tilt and optional glare effect.
 * Responds to cursor position within the card.
 */
export function TiltCard({
  children,
  className,
  tiltAmount = 6,
  glareOpacity = 0.1,
  scale = 1.02,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const cardScale = useMotionValue(1);

  const springConfig = { damping: 30, stiffness: 150 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);
  const smoothScale = useSpring(cardScale, { damping: 35, stiffness: 200 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Normalized -1 to 1
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);
      
      rotateX.set(-y * tiltAmount);
      rotateY.set(x * tiltAmount);
      
      // Glare position (percentage)
      glareX.set(((e.clientX - rect.left) / rect.width) * 100);
      glareY.set(((e.clientY - rect.top) / rect.height) * 100);
    };

    const handleEnter = () => {
      cardScale.set(scale);
    };

    const handleLeave = () => {
      rotateX.set(0);
      rotateY.set(0);
      glareX.set(50);
      glareY.set(50);
      cardScale.set(1);
    };

    element.addEventListener("mousemove", handleMove, { passive: true });
    element.addEventListener("mouseenter", handleEnter);
    element.addEventListener("mouseleave", handleLeave);

    return () => {
      element.removeEventListener("mousemove", handleMove);
      element.removeEventListener("mouseenter", handleEnter);
      element.removeEventListener("mouseleave", handleLeave);
    };
  }, [rotateX, rotateY, glareX, glareY, cardScale, tiltAmount, scale]);

  return (
    <motion.div
      ref={ref}
      className={cn("relative", className)}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        scale: smoothScale,
      }}
    >
      {children}
      
      {/* Glare overlay */}
      {glareOpacity > 0 && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([x, y]) =>
                `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,${glareOpacity}), transparent 50%)`
            ),
          }}
        />
      )}
    </motion.div>
  );
}
