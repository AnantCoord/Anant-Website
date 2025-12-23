"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Instagram, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MotionSection, MotionItem, MotionH2, MotionP } from "@/components/motion";
import { TiltCard, Magnetic } from "@/components/effects";
import { containerReveal, itemReveal, listContainer, listItem } from "@/lib/motion";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: (
      <>
        Birla Institute of Technology and Science
        <br />
        Pilani, Rajasthan 333031
        <br />
        India
      </>
    ),
    href: "https://maps.google.com/?q=BITS+Pilani+Rajasthan",
  },
  {
    icon: Mail,
    title: "Email",
    content: "anant_coordinator@pilani.bits-pilani.ac.in",
    href: "mailto:anant_coordinator@pilani.bits-pilani.ac.in",
  },
  {
    icon: Instagram,
    title: "Instagram",
    content: "@teamanantbits",
    href: "https://www.instagram.com/teamanantbits",
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/teamanant/",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 scroll-mt-16 md:scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <MotionSection className="text-center mb-16">
            <MotionH2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</MotionH2>
            <MotionItem>
              <div className="h-1 w-16 mx-auto mb-6 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
            </MotionItem>
            <MotionP className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Have questions about our project or interested in collaboration? We&apos;d love to hear from you.
            </MotionP>
          </MotionSection>

          {/* Contact Grid */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-12"
            variants={listContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {contactInfo.map((item) => (
              <motion.div key={item.title} variants={listItem}>
                <TiltCard tiltAmount={6} glareOpacity={0.06} className="h-full">
                  <a
                    href={item.href}
                    target={item.title === "Address" ? "_blank" : undefined}
                    rel={item.title === "Address" ? "noopener noreferrer" : undefined}
                    className="group flex flex-col items-center text-center p-6 rounded-xl hover:bg-muted/30 transition-all duration-300 h-full"
                  >
                    <Magnetic strength={5} radius={50}>
                      <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 bg-primary/10 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                    </Magnetic>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <div className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                      {item.content}
                    </div>
                  </a>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>

          <Separator className="my-8" />

          {/* Social Links */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-sm text-muted-foreground mb-4">Connect with us</p>
            <TooltipProvider>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social) => (
                  <Tooltip key={social.name}>
                    <TooltipTrigger asChild>
                      <motion.a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full flex items-center justify-center bg-muted hover:bg-primary/10 hover:text-primary hover:shadow-md hover:shadow-primary/20 transition-all duration-300"
                        aria-label={social.name}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{social.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
