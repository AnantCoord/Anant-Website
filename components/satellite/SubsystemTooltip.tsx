"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Html } from "@react-three/drei";
import { tooltipVariants, SUBSYSTEM_COLORS, SubsystemKey } from "@/lib/motion";
import { useSubsystemState, SUBSYSTEM_INFO } from "./useSubsystemState";

interface SubsystemTooltipProps {
  subsystem: SubsystemKey;
  position?: [number, number, number];
}

/**
 * 3D-positioned tooltip that appears on subsystem hover.
 * Uses @react-three/drei's Html component to overlay DOM on 3D canvas.
 */
export function SubsystemTooltip({ subsystem, position = [0, 1.5, 0] }: SubsystemTooltipProps) {
  const hovered = useSubsystemState((s) => s.hovered);
  const isVisible = hovered === subsystem;
  const info = SUBSYSTEM_INFO[subsystem];
  const color = SUBSYSTEM_COLORS[subsystem];

  return (
    <Html
      position={position}
      center
      distanceFactor={10}
      style={{ pointerEvents: "none" }}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            variants={tooltipVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="px-4 py-3 rounded-lg backdrop-blur-md border whitespace-nowrap"
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.9)",
              borderColor: color,
              boxShadow: `0 0 20px ${color}40`,
            }}
          >
            <div 
              className="text-sm font-bold mb-1"
              style={{ color }}
            >
              {subsystem}
            </div>
            <div className="text-xs text-gray-300 font-medium">
              {info.name}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {info.shortDesc}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Html>
  );
}

/**
 * 2D tooltip for use outside of 3D canvas (e.g., subsystem cards).
 */
export function SubsystemTooltip2D({ subsystem }: { subsystem: SubsystemKey }) {
  const hovered = useSubsystemState((s) => s.hovered);
  const isVisible = hovered === subsystem;
  const info = SUBSYSTEM_INFO[subsystem];
  const color = SUBSYSTEM_COLORS[subsystem];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={tooltipVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-4 py-3 rounded-lg backdrop-blur-md border whitespace-nowrap z-50"
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.9)",
            borderColor: color,
            boxShadow: `0 0 20px ${color}40`,
          }}
        >
          <div 
            className="text-sm font-bold mb-1"
            style={{ color }}
          >
            {subsystem}
          </div>
          <div className="text-xs text-gray-300 font-medium">
            {info.name}
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {info.shortDesc}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
