"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
}

/**
 * Card with a subtle spotlight effect that follows cursor.
 * The glow is gentle and fades at edges.
 */
export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(120, 119, 198, 0.15)",
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring for natural movement
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    element.addEventListener("mousemove", handleMove, { passive: true });
    return () => element.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      style={{ isolation: "isolate" }}
    >
      {/* Spotlight gradient */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [x, y],
            ([xVal, yVal]) =>
              `radial-gradient(400px circle at ${xVal}px ${yVal}px, ${spotlightColor}, transparent 60%)`
          ),
        }}
      />
      {children}
    </motion.div>
  );
}

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  borderRadius?: string;
}

/**
 * Card with animated border glow on hover.
 * Clean, minimal effect.
 */
export function GlowCard({
  children,
  className,
  glowColor = "var(--primary)",
  borderRadius = "0.75rem",
}: GlowCardProps) {
  return (
    <div
      className={cn(
        "group relative",
        className
      )}
    >
      {/* Glow border - only visible on hover */}
      <div
        className="absolute -inset-[1px] rounded-xl opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-60"
        style={{
          background: `linear-gradient(135deg, ${glowColor}, transparent, ${glowColor})`,
          borderRadius,
        }}
      />
      {/* Content */}
      <div className="relative" style={{ borderRadius }}>
        {children}
      </div>
    </div>
  );
}
