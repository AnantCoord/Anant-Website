import { Metadata } from "next";
import { SubsystemPage } from "@/components/sections/SubsystemPage";

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
    description: "Dual ARM Cortex-A9 processor system running a custom Linux OS for reliable operations. Handles flight plan, subsystem interfacing and image compression with fault-tolerant software architecture.",
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
    description: "Coded in C++ and based on an Actor model, our flight plan software is fully modular, scalable and testable. The OBC decides state transitions based on signals from sensors and some defined emergency conditions.",
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
    <SubsystemPage
      code="OBC"
      subtitle="On-Board Computer"
      description="System-on-Chip based onboard computer equipped with custom Linux OS for data processing, flight plan and subsystem interfacing. FPGA enabled."
      overview="The On-Board Computer serves as the brain of the satellite, coordinating all subsystem operations and managing mission data. It executes the flight plan and handles autonomous decision-making."
      overviewDetails="Built on an AMD (Xilinx) Zynq-7000 All Programmable SoC, running a custom Linux-based operating system, the OBC provides reliable space operations with fault-tolerant software architecture. It manages payload scheduling, subsystem interfacing, state management and ground communication protocols."
      specs={specs}
      components={components}
      stats={stats}
      prevLink={{ href: "/subsystems/eps", label: "EPS" }}
      nextLink={{ href: "/subsystems/ttc", label: "TTC" }}
    />
  );
}
