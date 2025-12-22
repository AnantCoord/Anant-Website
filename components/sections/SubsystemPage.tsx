"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { MotionSection, MotionItem, MotionH2, MotionP } from "@/components/motion";
import { TiltCard, SlideReveal } from "@/components/effects";
import { containerReveal, itemReveal, listContainer, listItem } from "@/lib/motion";
import { Footer } from "./Footer";

export type SubsystemSpec = {
  param: string;
  value: string;
};

export type SubsystemComponent = {
  id: string;
  name: string;
  description: ReactNode;
};

export type SubsystemStat = {
  value: string;
  label: string;
};

export type SubsystemNavLink = {
  href: string;
  label: string;
};

type SubsystemPageProps = {
  code: string;
  subtitle: string;
  description: string;
  overview: ReactNode;
  overviewDetails?: ReactNode;
  specs: SubsystemSpec[];
  components: SubsystemComponent[];
  stats?: SubsystemStat[];
  prevLink?: SubsystemNavLink;
  nextLink?: SubsystemNavLink;
  children?: ReactNode;
};

export function SubsystemPage({
  code,
  subtitle,
  description,
  overview,
  overviewDetails,
  specs,
  components,
  stats,
  prevLink,
  nextLink,
  children,
}: SubsystemPageProps) {
  return (
    <>
      <div className="min-h-screen pt-16 md:pt-18 relative">
        {/* Fixed Left Navigation Arrow */}
        {prevLink && (
          <Link
            href={prevLink.href}
            className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:bg-muted/50 transition-all duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{prevLink.label}</span>
          </Link>
        )}

        {/* Fixed Right Navigation Arrow */}
        {nextLink && (
          <Link
            href={nextLink.href}
            className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:bg-muted/50 transition-all duration-300 group"
          >
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{nextLink.label}</span>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
        )}

        {/* Mobile Navigation - bottom fixed */}
        <div className="fixed bottom-4 left-4 right-4 z-40 flex justify-between lg:hidden">
          {prevLink ? (
            <Link
              href={prevLink.href}
              className="flex items-center gap-1 px-3 py-2 rounded-lg bg-card/90 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">{prevLink.label}</span>
            </Link>
          ) : (
            <div />
          )}
          {nextLink && (
            <Link
              href={nextLink.href}
              className="flex items-center gap-1 px-3 py-2 rounded-lg bg-card/90 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <span className="text-sm">{nextLink.label}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Hero */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <MotionSection className="max-w-4xl mx-auto text-center">
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {code}
              </motion.h1>
              <MotionItem>
                <div className="h-1 w-24 mx-auto mb-6 bg-linear-to-r from-primary to-primary/50 rounded-full" />
              </MotionItem>
              <SlideReveal delay={0.2}>
                <p className="text-xl text-primary mb-2">{subtitle}</p>
              </SlideReveal>
              <SlideReveal delay={0.3}>
                <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
              </SlideReveal>
            </MotionSection>
          </div>
        </section>

      {/* Quick Stats */}
      {stats && stats.length > 0 && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <motion.div
              className="flex flex-wrap justify-center gap-8 md:gap-16"
              variants={listContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 rounded-lg hover:bg-muted/20 transition-colors duration-300"
                  variants={listItem}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary drop-shadow-[0_0_8px_rgba(180,120,90,0.3)]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Overview */}
      <section className="py-12 container mx-auto px-4">
        <MotionSection className="max-w-4xl mx-auto">
          <MotionH2 className="text-2xl font-bold mb-6">Overview</MotionH2>
          <motion.div
            className="prose prose-neutral dark:prose-invert max-w-none"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground leading-relaxed text-lg border-l-4 border-primary pl-6 mb-6">
              {overview}
            </p>
            {overviewDetails && (
              <p className="text-muted-foreground leading-relaxed">{overviewDetails}</p>
            )}
          </motion.div>
        </MotionSection>
      </section>

      <Separator />

      {/* Specifications */}
      <section className="py-12 container mx-auto px-4 overflow-hidden">
        <MotionSection className="max-w-4xl mx-auto">
          <MotionH2 className="text-2xl font-bold mb-6">Specifications</MotionH2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <TiltCard tiltAmount={3} glareOpacity={0.04} className="rounded-lg overflow-hidden">
              <div className="overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/2">Parameter</TableHead>
                      <TableHead>Value</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {specs.map((spec, index) => (
                      <motion.tr
                        key={spec.param}
                        className="border-b transition-colors hover:bg-muted/50"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <TableCell className="text-muted-foreground">{spec.param}</TableCell>
                        <TableCell className="font-medium">{spec.value}</TableCell>
                      </motion.tr>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TiltCard>
          </motion.div>
        </MotionSection>
      </section>

      <Separator />

      {/* Components */}
      <section className="py-12 container mx-auto px-4">
        <MotionSection className="max-w-4xl mx-auto">
          <MotionH2 className="text-2xl font-bold mb-6">System Components</MotionH2>
          <motion.div
            className="space-y-6"
            variants={containerReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {components.map((component) => (
              <motion.div
                key={component.id}
                className="pl-6 border-l-2 border-primary/50 hover:border-primary hover:bg-muted/10 rounded-r-lg p-4 -ml-4 transition-all duration-300"
                variants={itemReveal}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              >
                <h3 className="font-semibold text-lg mb-2">{component.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{component.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </MotionSection>
      </section>

      {/* Children content (for custom sections like Payload applications) */}
      {children}

      {/* Bottom padding for mobile navigation */}
      <div className="h-20 lg:hidden" />
    </div>
    <Footer />
    </>
  );
}

export default SubsystemPage;
