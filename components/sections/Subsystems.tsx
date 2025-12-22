"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Info } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { MotionSection, MotionItem, MotionH2, MotionH3, MotionP } from "@/components/motion";
import { TiltCard, Magnetic, SlideReveal } from "@/components/effects";
import { containerReveal, itemReveal, EASE, SUBSYSTEM_COLORS, SubsystemKey } from "@/lib/motion";

const subsystems = [
  {
    name: "EPS",
    key: "EPS" as SubsystemKey,
    fullName: "Electrical Power System",
    description:
      "Advanced power management system featuring Azur Space multi-junction solar cells with 30% efficiency, 2s2p Li-ion battery pack, and MPPT algorithm for optimal energy harvesting under varying illumination conditions",
    image: "/assets/images/rocket2.png",
    link: "/subsystems/eps",
    gradient: "from-yellow-500 to-yellow-700",
    keyFeatures: ["22 Solar Cells (30% Efficiency)", "MPPT Algorithm", "2s2p Li-ion Battery", "Overcurrent Protection"],
  },
  {
    name: "OBC",
    key: "OBC" as SubsystemKey,
    fullName: "On-Board Computer",
    description:
      "BeagleBone Black Industrial-based central processing unit running custom OS with autonomous experiment control, fault tolerance, and real-time data acquisition capabilities",
    image: "/assets/images/bus.png",
    link: "/subsystems/obc",
    gradient: "from-green-500 to-green-700",
    keyFeatures: ["BeagleBone Black Industrial", "Custom OS", "Autonomous Control", "Fault Tolerance"],
  },
  {
    name: "TTC",
    key: "TTC" as SubsystemKey,
    fullName: "Telemetry, Tracking & Command",
    description:
      "UHF band communication system using CC1101 transceiver with deployable turnstile and monopole antennas, implementing AX.25 protocol for reliable ground station contact",
    image: "/assets/images/rocket3.png",
    link: "/subsystems/ttc",
    gradient: "from-red-500 to-red-700",
    keyFeatures: ["CC1101 Transceiver", "UHF Band Operation", "AX.25 Protocol", "Deployable Antennas"],
  },
  {
    name: "ADCS",
    key: "ADCS" as SubsystemKey,
    fullName: "Attitude Determination & Control System",
    description:
      "Precision attitude control featuring BNO085 IMU, GPS module, and B-dot controller algorithm for detumbling using magnetorquers with PWM control signals",
    image: "/assets/images/rocket1.png",
    link: "/subsystems/adcs",
    gradient: "from-blue-500 to-blue-700",
    keyFeatures: ["BNO085 IMU", "GPS Module", "B-dot Controller", "Magnetorquers"],
  },
  {
    name: "STS",
    key: "STS" as SubsystemKey,
    fullName: "Structural & Thermal System",
    description:
      "Aluminum 6061-T6 structure following 3U CubeSat standard with passive thermal control using MLI insulation, black anodized radiators, and active TMP117 temperature monitoring",
    image: "/assets/images/astronaut.png",
    link: "/subsystems/sts",
    gradient: "from-gray-500 to-gray-700",
    keyFeatures: ["Al 6061-T6 Structure", "MLI Insulation", "Passive Thermal Control", "TMP117 Sensors"],
  },
  {
    name: "PAYLOAD",
    key: "PAYLOAD" as SubsystemKey,
    fullName: "Hyperspectral Imaging Payload",
    description:
      "Compact hyperspectral camera enabling cost‑effective orbital imaging for remote sensing; 270 spectral bands, 640×480 @ 12‑bit, with on‑board compression feasibility.",
    image: "/assets/images/engines.png",
    link: "/subsystems/payload",
    gradient: "from-purple-500 to-purple-700",
    keyFeatures: ["Hyperspectral Camera", "270 Bands", "Onboard Compression (CCSDS)", "Remote Sensing Applications"],
  },
];

export function Subsystems() {
  return (
    <section id="subsystems" className="py-16 md:py-24 scroll-mt-16 md:scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <MotionSection className="text-center mb-12">
            <MotionH2 className="text-3xl md:text-5xl font-bold mb-4">Subsystems</MotionH2>
            <MotionItem>
              <div className="h-1 w-16 mx-auto mb-6 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
            </MotionItem>
            <MotionP className="text-muted-foreground max-w-2xl mx-auto">
              Core systems engineered for our mission
            </MotionP>
          </MotionSection>

          {/* Mission banner - Blockquote style */}
          <motion.blockquote 
            className="mb-12 text-center py-6 px-8 border-l-4 border-primary bg-muted/20 rounded-r-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-muted-foreground italic">
              &ldquo;Enabling a cost‑effective hyperspectral imaging mission while providing a hands‑on, end‑to‑end
              education in space systems engineering for students at BITS Pilani.&rdquo;
            </p>
          </motion.blockquote>

          {/* Subsystems Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {subsystems.map((subsystem, index) => {
              const glowColor = SUBSYSTEM_COLORS[subsystem.key];
              
              return (
                <motion.div key={subsystem.name} variants={itemReveal}>
                  <TiltCard
                    tiltAmount={8}
                    glareOpacity={0.08}
                    scale={1.02}
                    className="h-full"
                  >
                    <Link href={subsystem.link} className="group block h-full">
                      <Card className="h-full overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors duration-500">
                        {/* Top illustration band with spotlight */}
                        <div className={`relative h-40 bg-gradient-to-br ${subsystem.gradient} overflow-hidden`}>
                          <Image
                            src={subsystem.image}
                            alt={`${subsystem.name} Illustration`}
                            width={144}
                            height={144}
                            className="absolute right-4 bottom-0 h-32 w-auto opacity-90 mix-blend-screen transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                          
                          {/* Subsystem badge */}
                          <div
                            className="absolute top-3 left-3 px-2.5 py-1 rounded text-xs font-semibold backdrop-blur-sm"
                            style={{ 
                              backgroundColor: `${glowColor}15`,
                              color: glowColor,
                              border: `1px solid ${glowColor}30`
                            }}
                          >
                            {subsystem.name}
                          </div>
                          
                          {/* Hover glow line */}
                          <div 
                            className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{ background: `linear-gradient(90deg, transparent, ${glowColor}, transparent)` }}
                          />
                        </div>

                        {/* Content */}
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-lg font-semibold">{subsystem.fullName}</CardTitle>
                            </div>
                            {/* HoverCard for features */}
                            <HoverCard>
                              <HoverCardTrigger asChild>
                                <button
                                  className="p-1.5 rounded-full hover:bg-muted/50 transition-colors"
                                  onClick={(e) => e.preventDefault()}
                                  aria-label="View key features"
                                >
                                  <Info className="w-4 h-4 text-muted-foreground/60" />
                                </button>
                              </HoverCardTrigger>
                              <HoverCardContent className="w-64" align="end">
                                <div className="space-y-2">
                                  <h4 className="text-sm font-semibold">Key Features</h4>
                                  <ul className="text-sm text-muted-foreground space-y-1">
                                    {subsystem.keyFeatures.map((feat) => (
                                      <li key={feat} className="flex items-start gap-2">
                                        <span 
                                          className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" 
                                          style={{ backgroundColor: glowColor }}
                                        />
                                        {feat}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </HoverCardContent>
                            </HoverCard>
                          </div>
                        </CardHeader>

                        <CardContent className="pt-0">
                          <p className="text-muted-foreground/80 text-sm leading-relaxed mb-4 line-clamp-2">
                            {subsystem.description}
                          </p>

                          {/* CTA */}
                          <div className="flex items-center">
                            <span 
                              className="font-medium text-sm flex items-center transition-colors duration-300"
                              style={{ color: glowColor }}
                            >
                              Explore
                              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </TiltCard>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Call to Action */}
          <MotionSection className="text-center mt-16">
            <MotionH3 className="text-2xl font-semibold mb-4">Interested in Technical Details?</MotionH3>
            <MotionP className="text-muted-foreground mb-6">
              Explore our comprehensive technical documentation and research papers
            </MotionP>
            <motion.div
              variants={itemReveal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={EASE.spring}
            >
              <Button asChild size="lg">
                <Link href="/publications">
                  <BookOpen className="w-5 h-5 mr-2" />
                  View Publications
                </Link>
              </Button>
            </motion.div>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}

export default Subsystems;
