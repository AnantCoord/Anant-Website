"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface MousePosition {
  x: number;
  y: number;
  // Normalized to -1 to 1 range (center = 0)
  normalizedX: number;
  normalizedY: number;
  // Velocity for momentum effects
  velocityX: number;
  velocityY: number;
}

export function useMouse() {
  const [mouse, setMouse] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
    velocityX: 0,
    velocityY: 0,
  });
  
  const lastPosition = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | undefined>(undefined);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId.current) return;
      
      rafId.current = requestAnimationFrame(() => {
        const velocityX = e.clientX - lastPosition.current.x;
        const velocityY = e.clientY - lastPosition.current.y;
        
        setMouse({
          x: e.clientX,
          y: e.clientY,
          normalizedX: (e.clientX / window.innerWidth) * 2 - 1,
          normalizedY: (e.clientY / window.innerHeight) * 2 - 1,
          velocityX,
          velocityY,
        });
        
        lastPosition.current = { x: e.clientX, y: e.clientY };
        rafId.current = undefined;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return mouse;
}

// Hook for element-relative mouse position
export function useRelativeMouse(ref: React.RefObject<HTMLElement | null>) {
  const [position, setPosition] = useState({ x: 0.5, y: 0.5, isInside: false });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const isInside = x >= 0 && x <= 1 && y >= 0 && y <= 1;
      
      setPosition({ x, y, isInside });
    };

    const handleLeave = () => {
      setPosition({ x: 0.5, y: 0.5, isInside: false });
    };

    element.addEventListener("mousemove", handleMove, { passive: true });
    element.addEventListener("mouseleave", handleLeave);
    
    return () => {
      element.removeEventListener("mousemove", handleMove);
      element.removeEventListener("mouseleave", handleLeave);
    };
  }, [ref]);

  return position;
}
