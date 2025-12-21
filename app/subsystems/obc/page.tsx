import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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

export const metadata: Metadata = {
  title: "OBC - On-Board Computer | Team Anant",
  description:
    "Zynq-7000 SoC based onboard computer system for Team Anant's nanosatellite with custom OS.",
};

const specs = [
  { param: "Platform", value: "Zynq-7000 All Programmable SoC" },
  { param: "Processor System (PS)", value: "Dual ARM Cortex-A9 @ 1 GHz" },
  { param: "Programmable Logic (PL)", value: "28 nm Xilinx PL" },
  { param: "Operating System", value: "Custom Linux system - TACOS" },
  { param: "Memory", value: "256 KB On-Chip with external DDR3/DDR2/LPDDR2 support" },
  { param: "Power Consumption", value: "<2 W" },
];

const components = [
  {
    id: "processor",
    name: "Processor System",
    description: "Dual ARM Cortex-A9 processor system running a custom Linux OS for reliable operations. Handles flight plan, ubsystem interfacing and image compression with fault-tolerant software architecture.",
  },
  {
    id: "fpga",
    name: "Programmable Logic",
    description: "28 nm Xilinx PL equipped with Configurable Logic Blocks, Signal Processing Blocks, Programmable I/O, transceivers and serial interface. Platform for SpaceWire Protocol implementation as well as image compression.",
  },
  {
    id: "interfaces",
    name: "Subsystem Interfacing",
    description: "Multiple communication interfaces (SpaceWire, I2C, SPI, UART) for subsystem coordination. We write custom device drivers to suit our sensor interfacing needs.",
  },
  {
    id: "flight_plan",
    name: "Flight Plan",
    description: "Coded in C++ and based on an Actor model, our flight plan software is fully modular, scaleable and testable. The OBC decides state transitions based on signals from sensors and some defined emergency conditions.",
  },
  {
    id: "os",
    name: "Operating System",
    description: "TACOS - Team Anant's Cubesat Operating System is our very own Linux-based OS that runs on the OBC. Built using Yocto, based on the Linux 6.12 kernel, our OS is fault-tolerant, verifiable and implements Secure Boot.",
  },
];

const stats = [
  { value: "1 GHz", label: "Clock Speed" },
  { value: "99.99%", label: "Targeted Uptime" },
  { value: "<2 W", label: "Power Consumption" },
];

export default function OBCPage() {
  return (
    <div className="min-h-screen pt-16 md:pt-18">
      {/* Hero */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">OBC</h1>
            <p className="text-xl text-primary mb-2">On-Board Computer</p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              System-on-Chip based onboard computer equipped with custom Linux OS for data processing, flight plan and subsystem interfacing.<br />FPGA enabled.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Overview</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed text-lg border-l-4 border-primary pl-6 mb-6">
              The On-Board Computer serves as the brain of the satellite, coordinating all subsystem operations
              and managing mission data. It executes the flight plan and handles autonomous decision-making.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Built on an AMD (Xilinx) Zynq-7000 All Programmable SoC, running a custom Linux-based operating system,
              the OBC provides reliable space operations with fault-tolerant software architecture. It manages
              payload scheduling, subsystem interfacing, state management and ground communication protocols.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Specifications */}
      <section className="py-12 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Specifications</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/2">Parameter</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {specs.map((spec) => (
                <TableRow key={spec.param}>
                  <TableCell className="text-muted-foreground">{spec.param}</TableCell>
                  <TableCell className="font-medium">{spec.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <Separator />

      {/* Components */}
      <section className="py-12 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">System Components</h2>
          <div className="space-y-6">
            {components.map((component) => (
              <div key={component.id} className="pl-6 border-l-2 border-primary/50">
                <h3 className="font-semibold text-lg mb-2">{component.name}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {component.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Navigation */}
      <section className="py-12 container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between gap-4">
          <Button variant="outline" asChild>
            <Link href="/subsystems/eps">
              <ArrowLeft className="w-4 h-4 mr-2" />
              EPS
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/subsystems/ttc">
              TTC
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
