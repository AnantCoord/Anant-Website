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
  // 2024
  {
    id: "pub-1",
    title: "Dynamic Simulation of Electrical and Thermal Systems",
    authors: "Aryan, Vinayak, Sai, Shiv",
    conference: "75th International Astronautical Congress (IAC 2024)",
    year: "2024",
    type: "Conference Paper",
    pdf: "/papers/2024_10-IAC75-Dynamic Simulation of Electrical and Thermal Systems-Aryan,Vinayak,Sai,Shiv.pdf",
    externalUrl: null,
    abstract:
      "This paper presents a comprehensive dynamic simulation framework for electrical and thermal systems in nanosatellites.",
  },
  // 2020
  {
    id: "pub-2",
    title: "Kalman Filter Implementation for Attitude Determination",
    authors: "Aditya Bhardwaj",
    conference: "71st International Astronautical Congress (IAC 2020)",
    year: "2020",
    type: "Conference Paper",
    pdf: "/papers/IAC2020-KalmanFilter - Aditya Bhardwaj.pdf",
    externalUrl: null,
    abstract:
      "Advanced Kalman filtering techniques for precise attitude determination in nanosatellite systems.",
  },
  {
    id: "pub-3",
    title: "Design and Development of CubeSat Power System",
    authors: "Parth Kharade",
    conference: "71st International Astronautical Congress (IAC 2020)",
    year: "2020",
    type: "Conference Paper",
    pdf: "/papers/IAC-20,C3,4,5,x60998 - Parth Kharade.pdf",
    externalUrl: null,
    abstract:
      "Comprehensive design methodology for CubeSat power systems with focus on efficiency and reliability.",
  },
  // 2019
  {
    id: "pub-4",
    title: "Hardware-in-the-Loop Simulation for Satellite Systems",
    authors: "Team Anant",
    conference: "IEEE Conference 2019",
    year: "2019",
    type: "Conference Paper",
    pdf: "/papers/IEEE2019-InLoopSimulation.pdf",
    externalUrl: null,
    abstract:
      "Development of hardware-in-the-loop simulation environment for testing satellite subsystems.",
  },
  {
    id: "pub-5",
    title: "Satellite Communication and Ground Station Design",
    authors: "Tushar Goyal",
    conference: "International Conference 2019",
    year: "2019",
    type: "Conference Paper",
    pdf: "/papers/goyal2019.pdf",
    externalUrl: null,
    abstract:
      "Design principles and implementation strategies for satellite communication systems and ground station interfaces.",
  },
  {
    id: "pub-6",
    title: "Attitude Determination and Control System Design",
    authors: "Tanuj Kumar",
    conference: "arXiv Preprint 2019",
    year: "2019",
    type: "Technical Report",
    pdf: "/papers/1911.11225 - Tanuj Kumar.pdf",
    externalUrl: "https://arxiv.org/abs/1911.11225",
    abstract:
      "Comprehensive approach to attitude determination and control system design for nanosatellites.",
  },
  {
    id: "pub-7",
    title: "CubeSat Mission Analysis and Design",
    authors: "Team Anant",
    conference: "69th International Astronautical Congress (IAC 2019)",
    year: "2019",
    type: "Conference Paper",
    pdf: "/papers/IAC-19,B4,9-GTS.5,10,x53342.pdf",
    externalUrl: null,
    abstract:
      "Mission analysis methodology and design considerations for CubeSat missions.",
  },
  {
    id: "pub-8",
    title: "Small Satellite Conference Paper",
    authors: "Team Anant",
    conference: "33rd Annual Small Satellite Conference (SSC 2019)",
    year: "2019",
    type: "Conference Paper",
    pdf: "/papers/Manuscrpit_SSC19-WP2-25.pdf",
    externalUrl: null,
    abstract:
      "Technical developments and mission planning for small satellite systems.",
  },
  {
    id: "pub-9",
    title: "Hardware Architecture of Electrical Power System for 3U Hyperspectral Imaging CubeSat",
    authors: "Nihal Sanjay Singh",
    conference: "IEEE Conference",
    year: "2019",
    type: "Conference Paper",
    pdf: "/papers/Hardware Architecture of Electrical Power System for 3U Hyperspectral Imaging CubeSat - Nihal Sanjay Singh.pdf",
    externalUrl: null,
    abstract:
      "Design and implementation of robust electrical power systems for hyperspectral imaging CubeSat missions.",
  },
  {
    id: "pub-10",
    title: "Implementation of CCSDS Hyperspectral Image Compression Algorithm onboard a nanosatellite",
    authors: "Nishant Gupta",
    conference: "IEEE International Geoscience and Remote Sensing Symposium",
    year: "2019",
    type: "Journal Article",
    pdf: "/papers/09172474 - NISHANT GUPTA.pdf",
    externalUrl: null,
    abstract:
      "Novel approach to implementing CCSDS compression standards for hyperspectral data processing in resource-constrained environments.",
  },
  // 2018
  {
    id: "pub-11",
    title: "Full Length Paper on Satellite Research",
    authors: "Team Anant",
    conference: "Progress In Electromagnetics Research Symposium (PIERS 2018)",
    year: "2018",
    type: "Conference Paper",
    pdf: "/papers/Full_length_paper_PIERS.pdf",
    externalUrl: null,
    abstract:
      "Comprehensive research findings on electromagnetic systems for satellite applications.",
  },
  {
    id: "pub-12",
    title: "11th European CubeSat Symposium Paper",
    authors: "Team Anant",
    conference: "11th European CubeSat Symposium",
    year: "2018",
    type: "Conference Paper",
    pdf: "/papers/11th-European CubeSat Symposium.pdf",
    externalUrl: null,
    abstract:
      "Research contributions presented at the European CubeSat Symposium on nanosatellite development.",
  },
  // 2017
  {
    id: "pub-13",
    title: "Helmholtz Cage Design for Magnetic Testing",
    authors: "Tushar Goyal",
    conference: "68th International Astronautical Congress (IAC 2017)",
    year: "2017",
    type: "Conference Paper",
    pdf: "/papers/IAC2017-HelmholtzCage - Tushar Goyal.pdf",
    externalUrl: null,
    abstract:
      "Design and implementation of Helmholtz cage systems for magnetic field testing of satellite components.",
  },
  // Technical Reports and Other Documents
  {
    id: "pub-14",
    title: "Modes of Operation for Nanosatellite Systems",
    authors: "Team Anant",
    conference: "Technical Report",
    year: "2020",
    type: "Technical Report",
    pdf: "/papers/Final_Modes_of_Operation_Paper.pdf",
    externalUrl: null,
    abstract:
      "Comprehensive analysis of operational modes for efficient nanosatellite mission execution.",
  },
  {
    id: "pub-15",
    title: "OBC-TTC Interface Design",
    authors: "Team Anant",
    conference: "Technical Report",
    year: "2019",
    type: "Technical Report",
    pdf: "/papers/OBC-TTC interface.pdf",
    externalUrl: null,
    abstract:
      "Interface design documentation between On-Board Computer and Telemetry, Tracking & Command systems.",
  },
  {
    id: "pub-16",
    title: "IAC Manuscript on Satellite Systems",
    authors: "Team Anant",
    conference: "International Astronautical Congress",
    year: "2019",
    type: "Conference Paper",
    pdf: "/papers/IAC_Manuscript_C.2.2.10.pdf",
    externalUrl: null,
    abstract:
      "Research manuscript on advanced satellite system architectures and implementations.",
  },
  {
    id: "pub-17",
    title: "Satellite Payload Research",
    authors: "Jeet Yadav",
    conference: "Research Paper",
    year: "2019",
    type: "Technical Report",
    pdf: "/papers/Paper - Jeet Yadav.pdf",
    externalUrl: null,
    abstract:
      "Research on satellite payload systems and data processing methodologies.",
  },
  {
    id: "pub-18",
    title: "Prerna Research Paper",
    authors: "Prerna",
    conference: "Research Paper",
    year: "2019",
    type: "Technical Report",
    pdf: "/papers/prerna.pdf",
    externalUrl: null,
    abstract:
      "Research contributions to nanosatellite systems development.",
  },
  {
    id: "pub-19",
    title: "Implementation of CCSDS Hyperspectral Image Compression Algorithm",
    authors: "Team Anant",
    conference: "Technical Documentation",
    year: "2019",
    type: "Technical Report",
    pdf: "/papers/Implementation of CCSDS Hyperspectral Image Compression Algorithm onboard a nanosatellite.pdf",
    externalUrl: null,
    abstract:
      "Detailed implementation guide for CCSDS hyperspectral image compression on nanosatellite platforms.",
  },
  {
    id: "pub-20",
    title: "Research Poster Presentation",
    authors: "Team Anant",
    conference: "Conference Poster",
    year: "2019",
    type: "Technical Report",
    pdf: "/papers/POSTER pre-final 1.pdf",
    externalUrl: null,
    abstract:
      "Visual summary of research findings and project progress for conference presentation.",
  },
];

const stats = [
  { value: "20", label: "Total Papers" },
  { value: "13", label: "Conference Papers" },
  { value: "1", label: "Journal Articles" },
  { value: "6", label: "Technical Reports" },
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
