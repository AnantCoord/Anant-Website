"use client";

import { CursorGlow } from "./CursorGlow";

/**
 * Client-side wrapper for global visual effects.
 * Placed in layout for site-wide effects.
 */
export function GlobalEffects() {
  return (
    <>
      <CursorGlow color="rgba(180, 120, 90, 0.12)" size={500} />
    </>
  );
}
