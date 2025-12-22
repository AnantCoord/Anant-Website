"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { containerReveal, itemReveal, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";
import React from "react";

interface MotionSectionProps extends Omit<HTMLMotionProps<"section">, "ref"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * A section wrapper that reveals children with staggered animations
 * when scrolled into view.
 */
export function MotionSection({ 
  children, 
  className, 
  delay = 0,
  ...props 
}: MotionSectionProps) {
  return (
    <motion.section
      variants={containerReveal}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn(className)}
      style={{ willChange: "transform" }}
      {...props}
    >
      {children}
    </motion.section>
  );
}

interface MotionItemProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "h1" | "h2" | "h3" | "p" | "span" | "article" | "li";
}

/**
 * An item wrapper that inherits reveal animation from parent MotionSection.
 */
export function MotionItem({ 
  children, 
  className, 
  as = "div",
  ...props 
}: MotionItemProps) {
  const Component = motion[as] as React.ComponentType<HTMLMotionProps<"div">>;
  
  return (
    <Component
      variants={itemReveal}
      className={cn(className)}
      {...props}
    >
      {children}
    </Component>
  );
}

// Convenience components for common elements
export function MotionH1({ children, className, ...props }: Omit<MotionItemProps, "as">) {
  return (
    <motion.h1 variants={itemReveal} className={cn(className)} {...props}>
      {children}
    </motion.h1>
  );
}

export function MotionH2({ children, className, ...props }: Omit<MotionItemProps, "as">) {
  return (
    <motion.h2 variants={itemReveal} className={cn(className)} {...props}>
      {children}
    </motion.h2>
  );
}

export function MotionH3({ children, className, ...props }: Omit<MotionItemProps, "as">) {
  return (
    <motion.h3 variants={itemReveal} className={cn(className)} {...props}>
      {children}
    </motion.h3>
  );
}

export function MotionP({ children, className, ...props }: Omit<MotionItemProps, "as">) {
  return (
    <motion.p variants={itemReveal} className={cn(className)} {...props}>
      {children}
    </motion.p>
  );
}
