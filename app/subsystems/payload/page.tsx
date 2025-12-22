"use client";

import { motion } from "framer-motion";
import { Leaf, Droplets } from "lucide-react";
import { SubsystemPage } from "@/components/sections/SubsystemPage";
import { Separator } from "@/components/ui/separator";
import { MotionSection, MotionH2 } from "@/components/motion";
import { TiltCard } from "@/components/effects";
import { containerReveal, itemReveal } from "@/lib/motion";

const specs = [
  { param: "Spectral Bands", value: "32" },
  { param: "Sensor Format", value: "640×480" },
  { param: "Bit Depth", value: "12-bit" },
  { param: "Compression", value: "CCSDS" },
  { param: "Power Consumption", value: "~10 W" },
  { param: "Data Interface", value: "I²C" },
];

const components = [
  {
    id: "camera",
    name: "Hyperspectral Camera",
    description: "Compact imaging sensor capturing 32 spectral bands across visible and near-infrared wavelengths. Enables detailed spectral analysis for vegetation health, water quality, and land classification.",
  },
  {
    id: "processing",
    name: "Data Processing",
    description: "On-board CCSDS compression algorithm reduces data volume by up to 4:1 while preserving spectral fidelity. Enables efficient storage and transmission of hyperspectral datacubes.",
  },
  {
    id: "pipeline",
    name: "Pipeline",
    description: "An end-to-end pipeline supporting high-impact computer vision tasks, including semantic segmentation, object detection, and anomaly detection.",
  },
];

const stats = [
  { value: "32", label: "Spectral Bands" },
  { value: "30 m at 500 km", label: "Ground Sampling Distance" },
  { value: "~10 W", label: "Power Draw" },
];

const applications = [
  {
    id: "vegetation",
    name: "Vegetation Monitoring",
    icon: Leaf,
    description: "Crop health assessment, forest cover analysis, agricultural yield prediction, and early detection of plant stress through spectral signature analysis.",
  },
  {
    id: "environment",
    name: "Environmental Analysis",
    icon: Droplets,
    description: "Water quality monitoring, land use classification, environmental change detection, and coastal zone mapping using multi-spectral indices.",
  },
];

export default function PayloadPage() {
  return (
    <SubsystemPage
      code="Payload"
      subtitle="Hyperspectral Imaging Payload"
      description="Compact hyperspectral camera enabling cost-effective orbital imaging for remote sensing applications."
      overview="The hyperspectral imaging payload is the primary scientific instrument of the mission, capturing detailed spectral data across 32 bands for Earth observation and remote sensing."
      overviewDetails="With a 4096 pixel across-track sensor format and 12-bit depth, the payload enables vegetation monitoring, water quality assessment, and land classification. On-board CCSDS compression ensures efficient data transmission during ground station passes."
      specs={specs}
      components={components}
      stats={stats}
      prevLink={{ href: "/subsystems/sts", label: "STS" }}
      nextLink={{ href: "/subsystems/adcs", label: "ADCS" }}
    >
      {/* Applications Section - Unique to Payload */}
      <div className="container mx-auto px-4 py-12">
        <Separator className="mb-12" />
        <MotionSection className="max-w-4xl mx-auto">
          <MotionH2 className="text-2xl font-bold mb-6">Applications</MotionH2>
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {applications.map((app) => (
              <motion.div key={app.id} variants={itemReveal}>
                <TiltCard
                  tiltAmount={6}
                  glareOpacity={0.06}
                  className="p-6 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-all duration-300 h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    >
                      <app.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    <h3 className="font-semibold">{app.name}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {app.description}
                  </p>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </MotionSection>
      </div>
    </SubsystemPage>
  );
}
