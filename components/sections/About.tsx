"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { MotionSection, MotionItem, MotionH2, MotionH3, MotionP } from "@/components/motion";
import { TiltCard } from "@/components/effects";
import { containerReveal, itemReveal, itemRevealLeft, EASE, SUBSYSTEM_COLORS, SubsystemKey } from "@/lib/motion";

const stats = [
  { value: "6", label: "Subsystems" },
  { value: "3U", label: "Form Factor" },
  { value: "270", label: "Spectral Bands" },
  { value: "LEO", label: "Target Orbit" },
];

const tags = ["Hyperspectral", "CubeSat", "Ground Ops", "Education"];

const keyPoints = [
  {
    title: "Hyperspectral Imaging Mission",
    description: "Demonstrating cost-effective hyperspectral imaging on a nanosatellite platform, capturing 270 spectral bands for vegetation monitoring, water quality assessment, and land classification.",
  },
  {
    title: "End-to-End Systems Learning",
    description: "Hands-on experience across all subsystems—OBC, EPS, TTC, ADCS, STS, and Payload—giving students real-world exposure to complete satellite development.",
  },
  {
    title: "Ground Segment & Operations",
    description: "Building an on-campus ground station with SDR reception and tracking capability, enabling autonomous mission operations and data collection.",
  },
];

const subsystems = [
  {
    name: "ADCS",
    key: "ADCS" as SubsystemKey,
    fullName: "Attitude Determination & Control",
    description: "Precision attitude control with BNO085 IMU and magnetorquers",
    link: "/subsystems/adcs",
  },
  {
    name: "EPS",
    key: "EPS" as SubsystemKey,
    fullName: "Electrical Power System",
    description: "Solar arrays with MPPT and Li-ion battery management",
    link: "/subsystems/eps",
  },
  {
    name: "OBC",
    key: "OBC" as SubsystemKey,
    fullName: "On-Board Computer",
    description: "Zynq-7000 SoC with custom Linux OS (TACOS)",
    link: "/subsystems/obc",
  },
  {
    name: "TTC",
    key: "TTC" as SubsystemKey,
    fullName: "Telemetry, Tracking & Command",
    description: "UHF LoRa beaconing and S-band data downlink",
    link: "/subsystems/ttc",
  },
  {
    name: "STS",
    key: "STS" as SubsystemKey,
    fullName: "Structural & Thermal",
    description: "Monoblock Al 6061-T6 with passive thermal control",
    link: "/subsystems/sts",
  },
  {
    name: "Payload",
    key: "PAYLOAD" as SubsystemKey,
    fullName: "Hyperspectral Imaging",
    description: "Compact hyperspectral camera with 32 spectral bands",
    link: "/subsystems/payload",
  },
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 scroll-mt-16 md:scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <MotionSection className="text-center mb-12">
            <MotionH2 className="text-3xl md:text-5xl font-bold mb-4">
              Team Anant
            </MotionH2>
            <MotionItem>
              <div className="h-1 w-16 mx-auto mb-6 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
            </MotionItem>
            <MotionP className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              BITS Pilani&apos;s student satellite team designing, building, and operating nanosatellites.
            </MotionP>
          </MotionSection>

          {/* What we're building - with satellite image, writeup, and subsystem cards */}
          <MotionSection className="mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
              <motion.div 
                variants={itemRevealLeft}
                className="overflow-hidden rounded-xl"
              >
                <Image
                  src="/assets/images/rocket-body.png"
                  alt="Satellite concept"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              <motion.div 
                variants={containerReveal}
                className="space-y-4"
              >
                <MotionH3 className="text-2xl font-semibold">What we&apos;re building</MotionH3>
                <MotionP className="text-muted-foreground leading-relaxed">
                  A student-built 3U CubeSat with a compact hyperspectral imaging payload, supported by robust 
                  subsystems and a reliable ground segment. The goal is simple: learn by doing and deliver useful data.
                </MotionP>
                <MotionItem className="flex flex-wrap gap-2 text-sm">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary/80 border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </MotionItem>
              </motion.div>
            </div>

            {/* 6 Subsystem Cards */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
              variants={containerReveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {subsystems.map((subsystem) => {
                const glowColor = SUBSYSTEM_COLORS[subsystem.key];
                return (
                  <motion.div key={subsystem.name} variants={itemReveal}>
                    <TiltCard tiltAmount={6} glareOpacity={0.05} scale={1.02} className="h-full">
                      <Link href={subsystem.link} className="group block h-full">
                        <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors duration-500">
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <div
                                className="px-2 py-0.5 rounded text-xs font-semibold"
                                style={{ 
                                  backgroundColor: `${glowColor}15`,
                                  color: glowColor,
                                  border: `1px solid ${glowColor}30`
                                }}
                              >
                                {subsystem.name}
                              </div>
                              <ArrowRight 
                                className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1" 
                              />
                            </div>
                            <CardTitle className="text-sm font-medium mt-2">{subsystem.fullName}</CardTitle>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground/80 text-xs leading-relaxed line-clamp-2">
                              {subsystem.description}
                            </p>
                          </CardContent>
                        </Card>
                      </Link>
                    </TiltCard>
                  </motion.div>
                );
              })}
            </motion.div>
          </MotionSection>

          {/* Key Points - with left border accent */}
          <MotionSection className="mb-12">
            <MotionH3 className="text-2xl font-semibold mb-8 text-center">Our Approach</MotionH3>
            <motion.div 
              className="space-y-6"
              variants={containerReveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {keyPoints.map((point) => (
                <motion.div 
                  key={point.title} 
                  variants={itemReveal}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="pl-6 border-l-2 border-primary/50 hover:border-primary hover:bg-muted/10 rounded-r-lg p-4 -ml-4 transition-all duration-300"
                >
                  <h4 className="font-semibold text-lg mb-2">{point.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </MotionSection>

          {/* Stats - Simple grid without cards */}
          <MotionSection className="py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label} 
                  className="relative p-4 rounded-lg hover:bg-muted/20 transition-colors duration-300"
                  variants={itemReveal}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1 drop-shadow-[0_0_8px_rgba(180,120,90,0.3)]">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                  {index < stats.length - 1 && (
                    <Separator orientation="vertical" className="absolute right-0 top-1/2 -translate-y-1/2 h-12 hidden md:block" />
                  )}
                </motion.div>
              ))}
            </div>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}

export default About;
