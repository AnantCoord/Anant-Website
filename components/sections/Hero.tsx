"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import { ParallaxLayer, BlurReveal, SlideReveal } from "@/components/effects";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep stars - slow movement */}
        <ParallaxLayer depth={0.02} className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(1px_1px_at_20%_30%,rgba(255,255,255,0.3),transparent),radial-gradient(1px_1px_at_80%_20%,rgba(255,255,255,0.2),transparent),radial-gradient(1px_1px_at_40%_70%,rgba(255,255,255,0.25),transparent),radial-gradient(1px_1px_at_70%_60%,rgba(255,255,255,0.15),transparent)]" />
        </ParallaxLayer>
        
        {/* Mid stars - medium movement */}
        <ParallaxLayer depth={0.04} className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(1.5px_1.5px_at_10%_50%,rgba(255,255,255,0.4),transparent),radial-gradient(1.5px_1.5px_at_90%_40%,rgba(255,255,255,0.35),transparent),radial-gradient(1.5px_1.5px_at_50%_80%,rgba(255,255,255,0.3),transparent)]" />
        </ParallaxLayer>
        
        {/* Close stars - faster movement */}
        <ParallaxLayer depth={0.08} className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(2px_2px_at_25%_25%,rgba(255,255,255,0.5),transparent),radial-gradient(2px_2px_at_75%_75%,rgba(255,255,255,0.4),transparent)]" />
        </ParallaxLayer>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />
      <ParallaxLayer depth={0.03} invert className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.08),transparent_70%)]" />
      </ParallaxLayer>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
        {/* Logo */}
        <BlurReveal delay={0.1} className="mb-8 md:mb-10">
          <Image
            src="/assets/logos/anant-logo.png"
            alt="Team Anant Logo"
            width={120}
            height={120}
            className="mx-auto h-24 md:h-32 w-auto"
            priority
          />
        </BlurReveal>

        {/* Title */}
        <SlideReveal delay={0.2} distance={40}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-foreground tracking-tight">
            Team Anant
          </h1>
        </SlideReveal>

        {/* Tagline */}
        <SlideReveal delay={0.35} distance={30}>
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-primary/80 mb-6 font-medium">
            BITS Pilani&apos;s Student Satellite Team
          </p>
        </SlideReveal>

        {/* Divider line with fade */}
        <SlideReveal delay={0.45}>
          <div className="h-px w-32 mx-auto mb-8 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        </SlideReveal>

        {/* Description */}
        <SlideReveal delay={0.5} distance={20}>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Designing, building, and operating nanosatellites. A hands‑on space program by students, for the future of space exploration.
          </p>
        </SlideReveal>

        {/* CTA Buttons */}
        <SlideReveal delay={0.6} className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
          {/* Recruitments Open Bubble */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            <Link href="/recruitments" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--accent-teal)]/40 bg-[var(--accent-teal)]/15 hover:bg-[var(--accent-teal)]/25 hover:border-[var(--accent-teal)]/60 transition-all duration-200 cursor-pointer shadow-lg shadow-[var(--accent-teal)]/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-teal)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-teal)]"></span>
              </span>
              <span className="text-sm font-medium text-[var(--accent-teal)]">Recruitments Open!</span>
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            <Button asChild variant="outline" size="lg" className="min-w-[160px] gap-2 relative overflow-hidden group">
              <Link href="/about">
                <span className="relative z-10 flex items-center gap-2">
                  <Rocket className="w-4 h-4" />
                  Explore Mission
                </span>
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            <Button asChild variant="outline" size="lg" className="min-w-[160px] gap-2 relative overflow-hidden group">
              <Link href="/contact">
                <span className="relative z-10 flex items-center gap-2">
                  Get in touch
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Button>
          </motion.div>
        </SlideReveal>
      </div>
    </section>
  );
}

export default Hero;
