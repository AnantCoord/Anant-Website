"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Download, FileText, BookOpen, FileCode, ExternalLink } from "lucide-react";
import { MotionSection, MotionItem, MotionH2, MotionH3, MotionP } from "@/components/motion";
import { TiltCard, Magnetic } from "@/components/effects";
import { containerReveal, itemReveal, listContainer, listItem, EASE } from "@/lib/motion";

const publications = [
  {
    id: "pub-1",
    title: "Dynamic Simulation of Electrical and Thermal Systems",
    authors: "Aryan, Vinayak, Sai, Shiv",
    conference: "IAC 2024",
    year: "2024",
    type: "Conference Paper",
    pdf: "/papers/2024_10-IAC75-Dynamic Simulation of Electrical and Thermal Systems-Aryan,Vinayak,Sai,Shiv.pdf",
    externalUrl: null,
    abstract:
      "This paper presents a comprehensive dynamic simulation framework for electrical and thermal systems in nanosatellites.",
  },
  {
    id: "pub-2",
    title: "Hardware Architecture of Electrical Power System for 3U Hyperspectral Imaging CubeSat",
    authors: "Nihal Sanjay Singh",
    conference: "IEEE Conference",
    year: "2023",
    type: "Conference Paper",
    pdf: "/papers/Hardware Architecture of Electrical Power System for 3U Hyperspectral Imaging CubeSat - Nihal Sanjay Singh.pdf",
    externalUrl: null,
    abstract:
      "Design and implementation of robust electrical power systems for hyperspectral imaging CubeSat missions.",
  },
  {
    id: "pub-3",
    title: "Implementation of CCSDS Hyperspectral Image Compression Algorithm onboard a nanosatellite",
    authors: "Team Anant",
    conference: "Space Systems Conference",
    year: "2023",
    type: "Journal Article",
    pdf: "/papers/Implementation of CCSDS Hyperspectral Image Compression Algorithm onboard a nanosatellite.pdf",
    externalUrl: null,
    abstract:
      "Novel approach to implementing CCSDS compression standards for hyperspectral data processing in resource-constrained environments.",
  },
  {
    id: "pub-4",
    title: "Kalman Filter Implementation for Attitude Determination",
    authors: "Aditya Bhardwaj",
    conference: "IAC 2020",
    year: "2020",
    type: "Conference Paper",
    pdf: "/papers/IAC2020-KalmanFilter - Aditya Bhardwaj.pdf",
    externalUrl: null,
    abstract:
      "Advanced Kalman filtering techniques for precise attitude determination in nanosatellite systems.",
  },
  {
    id: "pub-5",
    title: "Helmholtz Cage Design for Magnetic Testing",
    authors: "Tushar Goyal",
    conference: "IAC 2017",
    year: "2017",
    type: "Conference Paper",
    pdf: "/papers/IAC2017-HelmholtzCage - Tushar Goyal.pdf",
    externalUrl: null,
    abstract:
      "Design and implementation of Helmholtz cage systems for magnetic field testing of satellite components.",
  },
  {
    id: "pub-6",
    title: "Modes of Operation for Nanosatellite Systems",
    authors: "Team Anant",
    conference: "Space Conference",
    year: "2023",
    type: "Technical Report",
    pdf: "/papers/Final_Modes_of_Operation_Paper.pdf",
    externalUrl: null,
    abstract: "Comprehensive analysis of operational modes for efficient nanosatellite mission execution.",
  },
];

const stats = [
  { value: "15+", label: "Total Papers" },
  { value: "8", label: "Conference Papers" },
  { value: "4", label: "Journal Articles" },
  { value: "3", label: "Technical Reports" },
];

function getTypeVariant(type: string): "default" | "secondary" | "outline" {
  switch (type) {
    case "Conference Paper":
      return "default";
    case "Journal Article":
      return "secondary";
    default:
      return "outline";
  }
}

function getTypeIcon(type: string) {
  switch (type) {
    case "Conference Paper":
      return FileText;
    case "Journal Article":
      return BookOpen;
    default:
      return FileCode;
  }
}

export function Publications() {
  return (
    <section id="publications" className="py-16 md:py-24 scroll-mt-16 md:scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <MotionSection className="text-center mb-16">
            <MotionH2 className="text-3xl md:text-5xl font-bold mb-4">Publications</MotionH2>
            <MotionItem>
              <div className="h-1 w-16 mx-auto mb-6 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
            </MotionItem>
            <MotionP className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our research contributions to the field of nanosatellite technology and space systems
            </MotionP>
          </MotionSection>

          {/* Publications Stats - Simple grid without cards */}
          <MotionSection className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <motion.div 
                key={stat.label} 
                className="text-center p-4 rounded-lg hover:bg-muted/20 transition-colors duration-300"
                variants={itemReveal}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              >
                <div className="text-3xl font-bold text-primary mb-1 drop-shadow-[0_0_8px_rgba(180,120,90,0.3)]">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </MotionSection>

          {/* Publications Accordion */}
          <motion.div
            variants={listContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="mb-16">
              {publications.map((publication, index) => {
                const TypeIcon = getTypeIcon(publication.type);
                return (
                  <motion.div key={publication.id} variants={listItem}>
                    <AccordionItem value={publication.id} className="border-b">
                      <AccordionTrigger className="hover:no-underline py-4 group">
                        <div className="flex-1 text-left pr-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant={getTypeVariant(publication.type)} className="text-xs">
                              <TypeIcon className="w-3 h-3 mr-1" />
                              {publication.type}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{publication.year}</span>
                          </div>
                          <h3 className="text-base md:text-lg font-semibold group-hover:text-primary transition-colors">
                            {publication.title}
                          </h3>
                          <p className="text-sm text-primary/80 mt-1">{publication.authors}</p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6">
                        <motion.div 
                          className="pl-0 space-y-4"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-sm text-muted-foreground italic">{publication.conference}</p>
                          <p className="text-muted-foreground leading-relaxed">{publication.abstract}</p>
                          <div className="flex flex-wrap gap-2 pt-2">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                              <Button asChild size="sm">
                                <a href={publication.pdf} target="_blank" rel="noopener noreferrer">
                                  <Download className="w-4 h-4 mr-2" />
                                  Download PDF
                                </a>
                              </Button>
                            </motion.div>
                            {publication.externalUrl && (
                              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                                <Button asChild variant="outline" size="sm">
                                  <a href={publication.externalUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    View on Publisher
                                  </a>
                                </Button>
                              </motion.div>
                            )}
                          </div>
                        </motion.div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                );
              })}
            </Accordion>
          </motion.div>

          {/* Call to Action - Simple styled div */}
          <MotionSection className="text-center">
            <TiltCard tiltAmount={4} glareOpacity={0.06} className="py-10 px-6 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <MotionH3 className="text-2xl font-semibold mb-2">Interested in Collaborating?</MotionH3>
            <MotionP className="text-muted-foreground mb-6 max-w-lg mx-auto">
              We&apos;re open to research collaborations and partnerships. Contact us to explore
              opportunities for joint research projects.
            </MotionP>
            <motion.div 
              className="flex justify-center"
              variants={containerReveal}
            >
              <Magnetic strength={10} radius={80}>
                <motion.div variants={itemReveal} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
                  <Button asChild>
                    <Link href="/contact">Contact for Collaboration</Link>
                  </Button>
                </motion.div>
              </Magnetic>
            </motion.div>
            </TiltCard>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}

export default Publications;
