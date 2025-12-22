"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MotionSection, MotionItem, MotionH2, MotionH3, MotionP } from "@/components/motion";
import { TiltCard, Magnetic, SlideReveal } from "@/components/effects";
import { containerReveal, itemReveal, listContainer, listItem, EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

// Custom Avatar with loading state
function TeamAvatar({
  src,
  alt,
  fallback,
  className,
  ringClassName,
}: {
  src: string;
  alt: string;
  fallback: string;
  className?: string;
  ringClassName?: string;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <Avatar className={cn(className, ringClassName)}>
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-full">
          <div className="w-full h-full animate-pulse bg-gradient-to-br from-muted via-muted-foreground/10 to-muted rounded-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1/3 h-1/3 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
          </div>
        </div>
      )}
      <AvatarImage
        src={src}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        className={cn(isLoading && "opacity-0")}
      />
      <AvatarFallback className="text-sm">{fallback}</AvatarFallback>
    </Avatar>
  );
}

const teamData = {
  faculty: {
    name: "Dr. Meetha V. Shenoy",
    position: "Faculty Coordinator",
    image: "/assets/team_files/Meetha Teacher.png",
  },
  leads: [
    {
      name: "Pranav Chandra",
      position: "Student Coordinator",
      image: "/assets/team_files/24-25/PRANAV_CHANDRA.jpg",
    },
    {
      name: "Samridhi Agrawal",
      position: "Joint Student Coordinator",
      image: "/assets/team_files/24-25/SAMRIDHI_AGRAWAL.png",
    },
    {
      name: "Pramit Pal",
      position: "Systems Engineer",
      image: "/assets/team_files/24-25/PRAMIT_PAL.png",
    },
    {
      name: "Rushil Barnwal",
      position: "Systems Engineer",
      image: "/assets/team_files/24-25/RUSHIL_BARNWAL.png",
    },
  ],
  subsystems: [
    {
      name: "Attitude Determination and Control System",
      members: [
        { name: "Aaditya Thakkar", position: "Subsystem Lead", image: "/assets/team_files/24-25/AADITYA_THAKKAR.png" },
        { name: "Nikhil Mathew", position: "Subsystem Lead", image: "/assets/team_files/24-25/NIKHIL_GEORGE_MATHEW.png" },
        { name: "Pranav Chandra", position: "Senior Member", image: "/assets/team_files/24-25/PRANAV_CHANDRA.jpg" },
        { name: "Pramit Pal", position: "Senior Member", image: "/assets/team_files/24-25/PRAMIT_PAL.png" },
        { name: "Anmol Saksena", position: "Member", image: "/assets/team_files/24-25/ANMOL_SAKSENA.png" },
        { name: "Apoorva Prabhala", position: "Member", image: "/assets/team_files/24-25/APOORVA_PRABHALA.png" },
        { name: "Atharva Sonwane", position: "Member", image: "/assets/team_files/24-25/ATHARVA_ABHILASH_SONWANE.png" },
        { name: "Kanav Sharma", position: "Member", image: "/assets/team_files/24-25/KANAV_SHARMA.png" },
        { name: "Vansh Jain", position: "Member", image: "/assets/team_files/24-25/VANSH_JAIN.png" },
      ],
    },
    {
      name: "Electrical Power System",
      members: [
        { name: "Meghadri Ghosh", position: "Subsystem Lead", image: "/assets/team_files/24-25/MEGHADRI_GHOSH.jpg" },
        { name: "Manit Kachhwaha", position: "Senior Member", image: "/assets/team_files/24-25/MANIT_ANAND_KACHHWAHA.png" },
        { name: "Arush Mangalam Bajpai", position: "Senior Member", image: "/assets/team_files/24-25/ARUSH_MANGALAM_BAJPAI.png" },
        { name: "Depak Ravinuthala", position: "Senior Member", image: "/assets/team_files/unknown.png" },
        { name: "Konaark Berwal", position: "Member", image: "/assets/team_files/24-25/KONAARK_BERWAL.png" },
        { name: "Karthik Raj Palleboyina", position: "Member", image: "/assets/team_files/24-25/KARTHIK_RAJ_PALLEBOYINA.png" },
        { name: "Abhirup Tapadar", position: "Member", image: "/assets/team_files/24-25/ABHIRUP_TAPADAR.png" },
        { name: "Advait Mehta", position: "Member", image: "/assets/team_files/24-25/ADVAIT_SNEHALBHAI_MEHTA.png" },
        { name: "Siddhant Patel", position: "Member", image: "/assets/team_files/24-25/SIDDHANT_ANANTKUMAR_PATEL.png" },
        { name: "Yog Panjarle", position: "Member", image: "/assets/team_files/24-25/YOG_SURYAKANT_PANJARALE.png" },
      ],
    },
    {
      name: "On Board Computer System",
      members: [
        { name: "Rushil Barnwal", position: "Subsystem Lead", image: "/assets/team_files/24-25/RUSHIL_BARNWAL.png" },
        { name: "Dhruv Deshpande", position: "Senior Member", image: "/assets/team_files/24-25/DHRUV_PRASAD_DESHPANDE.png" },
        { name: "Neha Gujjari", position: "Senior Member", image: "/assets/team_files/24-25/NEHA_GUJJARI.png" },
        { name: "Samridhi Agrawal", position: "Senior Member", image: "/assets/team_files/24-25/SAMRIDHI_AGRAWAL.png" },
        { name: "Aryan Sharma", position: "Member", image: "/assets/team_files/24-25/ARYAN_SHARMA.jpg" },
        { name: "Aanya Singh", position: "Member", image: "/assets/team_files/24-25/AANYA_SINGH.png" },
        { name: "Arnav Chhabra", position: "Member", image: "/assets/team_files/24-25/ARNAV_CHHABRA.png" },
        { name: "Kushagra Agarwal", position: "Member", image: "/assets/team_files/24-25/KUSHAGRA_AGARWAL.png" },
        { name: "Siddharth Vivek", position: "Member", image: "/assets/team_files/24-25/SIDDHARTH_VIVEK.png" },
        { name: "Sumit Kumar Shah", position: "Member", image: "/assets/team_files/24-25/SUMIT_KUMAR_SHAH.png" },
      ],
    },
    {
      name: "Payload Subsystem",
      members: [
        { name: "Pranav Suryanvanshi", position: "Subsystem Lead", image: "/assets/team_files/unknown.png" },
        { name: "Prakhar Chindalia", position: "Senior Member", image: "/assets/team_files/24-25/PRAKHAR_CHINDALIA.png" },
        { name: "Sannidhya Ray", position: "Senior Member", image: "/assets/team_files/24-25/SANNIDHYA_RAY.png" },
        { name: "Arth Gada", position: "Member", image: "/assets/team_files/24-25/ARTH_GADA.png" },
        { name: "Atharva Gupta", position: "Member", image: "/assets/team_files/24-25/ATHARVA_GUPTA.png" },
        { name: "Bharat Kumar Saxena", position: "Member", image: "/assets/team_files/24-25/BHARAT_KUMAR_SAXENA.jpg" },
        { name: "Shardul Narayan", position: "Member", image: "/assets/team_files/24-25/SHARDUL_NARAYAN.png" },
      ],
    },
    {
      name: "Structural and Thermal Subsystem",
      members: [
        { name: "Vivek Gunuganti", position: "Subsystem Lead", image: "/assets/team_files/24-25/VIVEK_GUNUGANTI.png" },
        { name: "Aditya Jaikrishnia", position: "Member", image: "/assets/team_files/24-25/ADITYA_PRASHANT_JAIKRISHNIA.png" },
        { name: "Ahaan Chaturvedi", position: "Member", image: "/assets/team_files/24-25/AHAAN_CHATURVEDI.jpg" },
        { name: "Hiya Desai", position: "Member", image: "/assets/team_files/24-25/HIYA_NIRAV_DESAI.png" },
        { name: "Rahul Garg", position: "Member", image: "/assets/team_files/24-25/RAHUL_GARG.png" },
      ],
    },
    {
      name: "Telemetry, Tracking and Command Subsystem",
      members: [
        { name: "Kanishk Jain", position: "Subsystem Lead", image: "/assets/team_files/24-25/KANISHK_JAIN.png" },
        { name: "Rakshit Jain", position: "Subsystem Lead", image: "/assets/team_files/24-25/RAKSHIT_JAIN.png" },
        { name: "Shashank Saha", position: "Senior Member", image: "/assets/team_files/24-25/SHASHANK_SAHA.png" },
        { name: "Harsh Lakshakar", position: "Senior Member", image: "/assets/team_files/unknown.png" },
        { name: "Aarnav Sood", position: "Member", image: "/assets/team_files/24-25/AARNAV_SOOD.png" },
        { name: "Raafey Aziz", position: "Member", image: "/assets/team_files/24-25/RAAFEY_AZIZ.png" },
        { name: "Vatsal Goyal", position: "Member", image: "/assets/team_files/24-25/VATSAL_GOYAL.png" },
        { name: "Y.N. Shashank", position: "Member", image: "/assets/team_files/24-25/YAMMANURU_NARASIMHA_SHASHANK.png" },
      ],
    },
  ],
};

const stats = [
  { value: "60+", label: "Team Members" },
  { value: "6", label: "Subsystems" },
  { value: "12+", label: "Years Experience" },
  { value: "3U", label: "CubeSat" },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

function getDisplayName(name: string) {
  // For names with initials like "Y.N. Shashank", return the last part
  const parts = name.split(" ");
  // If first part looks like initials (contains dots or is very short), return last part
  if (parts.length > 1 && (parts[0].includes(".") || parts[0].length <= 2)) {
    return parts[parts.length - 1];
  }
  return parts[0];
}

function getPositionVariant(position: string): "default" | "secondary" | "outline" {
  if (position.includes("Lead")) return "default";
  if (position.includes("Senior")) return "secondary";
  return "outline";
}

export function Team() {
  return (
    <section id="team" className="py-16 md:py-24 scroll-mt-16 md:scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <MotionSection className="text-center mb-16">
            <MotionH2 className="text-3xl md:text-5xl font-bold mb-4">Our Team</MotionH2>
            <MotionItem>
              <div className="h-1 w-16 mx-auto mb-6 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
            </MotionItem>
            <MotionP className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet the passionate individuals behind Team Anant&apos;s compact hyperspectral imaging CubeSat mission
            </MotionP>
          </MotionSection>

          {/* Team Photo */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
          >
            <Image
              src="/assets/images1/team-anant-picture.jpg"
              alt="Team Anant Group Photo"
              width={1200}
              height={600}
              className="w-full max-w-4xl mx-auto rounded-xl shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-500"
            />
          </motion.div>

          {/* Team Stats - Simple grid */}
          <MotionSection className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label} 
                className="text-center relative p-4 rounded-lg hover:bg-muted/20 transition-colors duration-300"
                variants={itemReveal}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1 drop-shadow-[0_0_8px_rgba(var(--primary-rgb,180,120,90),0.3)]">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                {index < stats.length - 1 && (
                  <Separator orientation="vertical" className="absolute right-0 top-1/2 -translate-y-1/2 h-10 hidden md:block" />
                )}
              </motion.div>
            ))}
          </MotionSection>

          {/* Faculty Coordinator - Simple centered layout */}
          <MotionSection className="mb-16 text-center">
            <MotionH3 className="text-2xl font-bold mb-8">Faculty Coordinator</MotionH3>
            <motion.div 
              className="inline-flex flex-col items-center p-6 rounded-2xl bg-muted/30 backdrop-blur-sm border border-border/30"
              variants={itemReveal}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <Magnetic strength={6} radius={100}>
                <TeamAvatar
                  src={teamData.faculty.image}
                  alt={teamData.faculty.name}
                  fallback={getInitials(teamData.faculty.name)}
                  className="w-36 h-36 mb-4 animate-float"
                  ringClassName="ring-4 ring-primary/30 transition-all hover:ring-primary/50 hover:shadow-lg hover:shadow-primary/20"
                />
              </Magnetic>
              <SlideReveal delay={0.1}>
                <h4 className="text-xl font-semibold mb-1">{teamData.faculty.name}</h4>
              </SlideReveal>
              <SlideReveal delay={0.15}>
                <Badge>{teamData.faculty.position}</Badge>
              </SlideReveal>
            </motion.div>
          </MotionSection>

          {/* Leadership Team - Horizontal row with hover effect */}
          <MotionSection className="mb-16">
            <MotionH3 className="text-2xl font-bold mb-8 text-center">Leadership Team</MotionH3>
            <motion.div 
              className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto"
              variants={listContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <TooltipProvider>
                {teamData.leads.map((member, index) => (
                  <Tooltip key={member.name}>
                    <TooltipTrigger asChild>
                      <motion.div 
                        className="flex items-center gap-4 p-4 rounded-xl bg-muted/20 hover:bg-muted/40 border border-transparent hover:border-primary/20 transition-all duration-300 cursor-default"
                        variants={listItem}
                        whileHover={{ y: -3, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                      >
                        <Magnetic strength={5} radius={70}>
                          <TeamAvatar
                            src={member.image}
                            alt={member.name}
                            fallback={getInitials(member.name)}
                            className="w-20 h-20"
                            ringClassName="ring-2 ring-primary/40 transition-all hover:ring-primary/60 hover:shadow-md hover:shadow-primary/15"
                          />
                        </Magnetic>
                        <div className="text-left">
                          <p className="font-medium">{member.name}</p>
                          <Badge variant="secondary" className="text-xs mt-1">{member.position}</Badge>
                        </div>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{member.position}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </motion.div>
          </MotionSection>

          <Separator className="mb-16" />

          {/* Subsystem Teams - Consistent avatar-based layout */}
          <motion.div 
            className="space-y-12"
            variants={containerReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {teamData.subsystems.map((subsystem, subsystemIndex) => {
              const seniorMembers = subsystem.members.filter(
                (m) => m.position.includes("Senior") || m.position.includes("Lead")
              );
              const regularMembers = subsystem.members.filter(
                (m) => !m.position.includes("Senior") && !m.position.includes("Lead")
              );

              return (
                <TiltCard 
                  key={subsystem.name} 
                  tiltAmount={5}
                  glareOpacity={0.08}
                  className="p-6 rounded-xl bg-muted/20 border border-border/30 hover:border-primary/20 transition-colors duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <h3 className="text-xl font-bold text-center mb-6">{subsystem.name}</h3>

                  <TooltipProvider>
                    {seniorMembers.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-primary mb-4 text-center">
                          Senior Members & Leads
                        </h4>
                        <motion.div 
                          className="flex flex-wrap justify-center gap-5"
                          variants={listContainer}
                        >
                          {seniorMembers.map((member) => (
                            <Tooltip key={member.name}>
                              <TooltipTrigger asChild>
                                <motion.div 
                                  className="text-center w-28 cursor-default group"
                                  variants={listItem}
                                  whileHover={{ y: -2 }}
                                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                >
                                  <Magnetic strength={4} radius={50}>
                                    <TeamAvatar
                                      src={member.image}
                                      alt={member.name}
                                      fallback={getInitials(member.name)}
                                      className="w-20 h-20 mx-auto mb-2"
                                      ringClassName="ring-2 ring-primary/40 transition-all group-hover:ring-primary/70 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-primary/20"
                                    />
                                  </Magnetic>
                                  <p className="text-xs font-medium truncate">{getDisplayName(member.name)}</p>
                                  <span className="text-[10px] text-primary">
                                    {member.position.includes("Lead") ? "Lead" : "Senior"}
                                  </span>
                                </motion.div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{member.name}</p>
                                <p className="text-xs text-muted-foreground">{member.position}</p>
                              </TooltipContent>
                            </Tooltip>
                          ))}
                        </motion.div>
                      </div>
                    )}

                    {regularMembers.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-muted-foreground mb-4 text-center">
                          Team Members
                        </h4>
                        <motion.div 
                          className="flex flex-wrap justify-center gap-5"
                          variants={listContainer}
                        >
                          {regularMembers.map((member) => (
                            <Tooltip key={member.name}>
                              <TooltipTrigger asChild>
                                <motion.div 
                                  className="text-center w-26 cursor-default group"
                                  variants={listItem}
                                  whileHover={{ y: -2 }}
                                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                >
                                  <Magnetic strength={3} radius={40}>
                                    <TeamAvatar
                                      src={member.image}
                                      alt={member.name}
                                      fallback={getInitials(member.name)}
                                      className="w-18 h-18 mx-auto mb-2"
                                      ringClassName="transition-all group-hover:scale-105 group-hover:ring-2 group-hover:ring-primary/30 group-hover:shadow-sm group-hover:shadow-primary/15"
                                    />
                                  </Magnetic>
                                  <p className="text-xs font-medium truncate">{getDisplayName(member.name)}</p>
                                </motion.div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{member.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          ))}
                        </motion.div>
                      </div>
                    )}
                  </TooltipProvider>
                </TiltCard>
              );
            })}
          </motion.div>

          {/* Call to Action - Simple styled div */}
          <MotionSection className="mt-16 max-w-4xl mx-auto text-center">
            <TiltCard tiltAmount={4} glareOpacity={0.06} className="py-10 px-6 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <SlideReveal>
                <h3 className="text-2xl font-semibold mb-2">Interested in Joining Team Anant?</h3>
              </SlideReveal>
              <SlideReveal delay={0.1}>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                  We&apos;re always looking for passionate students interested in space technology,
                  satellite systems, and innovative engineering solutions.
                </p>
              </SlideReveal>
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 justify-center"
                variants={containerReveal}
              >
                <Magnetic strength={10} radius={100}>
                  <Button asChild className="transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </Magnetic>
                <Magnetic strength={10} radius={100}>
                  <Button variant="outline" asChild className="transition-all hover:scale-105">
                    <Link href="/about">Learn More</Link>
                  </Button>
                </Magnetic>
              </motion.div>
            </TiltCard>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}

export default Team;
