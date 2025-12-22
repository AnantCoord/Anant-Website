import { Variants, Transition } from "framer-motion";

// ============================================
// TIMING CONSTANTS
// ============================================

export const TIMING = {
  fast: 0.35,
  normal: 0.5,
  slow: 0.7,
  stagger: 0.15,
} as const;

export const EASE = {
  out: [0.16, 1, 0.3, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
  spring: { type: "spring", stiffness: 150, damping: 25 } as const,
  springStiff: { type: "spring", stiffness: 200, damping: 30 } as const,
};

// ============================================
// PAGE TRANSITION VARIANTS
// ============================================

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: TIMING.normal, ease: EASE.out }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: TIMING.fast, ease: EASE.inOut }
  },
};

// ============================================
// SECTION REVEAL VARIANTS (staggered children)
// ============================================

export const containerReveal: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: TIMING.stagger,
      delayChildren: 0.1,
    },
  },
};

export const itemReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: TIMING.normal, ease: EASE.out }
  },
};

export const itemRevealLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { duration: TIMING.normal, ease: EASE.out }
  },
};

export const itemRevealRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { duration: TIMING.normal, ease: EASE.out }
  },
};

export const itemRevealScale: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: TIMING.normal, ease: EASE.out }
  },
};

// ============================================
// HOVER VARIANTS (engineering / mechanical feel)
// ============================================

export const cardHover = {
  rest: {
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    transition: EASE.spring,
  },
  hover: {
    scale: 1.03,
    rotateX: 4,
    rotateY: -4,
    transition: EASE.spring,
  },
};

export const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.97 },
};

export const linkHover = {
  rest: { x: 0 },
  hover: { x: 4 },
};

// ============================================
// SCROLL-LINKED HELPERS
// ============================================

export const scrollFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: TIMING.slow }
  },
};

// ============================================
// VIEWPORT SETTINGS
// ============================================

export const viewportOnce = {
  once: true,
  margin: "-100px",
};

export const viewportRepeat = {
  once: false,
  amount: 0.3,
};

// ============================================
// SATELLITE-SPECIFIC ANIMATIONS
// ============================================

export const satelliteIdle = {
  rotateY: [0, 360],
  transition: {
    duration: 60,
    repeat: Infinity,
    ease: "linear",
  },
};

export const satelliteFloat = {
  y: [0, -8, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Floating animation for cards/elements (zero gravity feel)
export const floatAnimation = {
  y: [0, -6, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const floatAnimationSlow = {
  y: [0, -4, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Hover lift effect for space objects
export const hoverLift = {
  rest: { y: 0, scale: 1 },
  hover: { 
    y: -4, 
    scale: 1.02,
    transition: { type: "spring", stiffness: 200, damping: 25 }
  },
};

// ============================================
// TOOLTIP ANIMATIONS
// ============================================

export const tooltipVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 10, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: TIMING.fast, ease: EASE.out }
  },
};

// ============================================
// LIST ITEM STAGGER (for team, publications, etc.)
// ============================================

export const listContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const listItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: EASE.out }
  },
};

// ============================================
// SUBSYSTEM COLORS (for 3D highlights)
// ============================================

export const SUBSYSTEM_COLORS = {
  ADCS: "#3b82f6",    // blue
  EPS: "#eab308",     // yellow
  OBC: "#22c55e",     // green
  TTC: "#ef4444",     // red
  STS: "#6b7280",     // gray
  PAYLOAD: "#a855f7", // purple
} as const;

export type SubsystemKey = keyof typeof SUBSYSTEM_COLORS;
