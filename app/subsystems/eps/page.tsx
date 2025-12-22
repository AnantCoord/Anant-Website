import { Metadata } from "next";
import { SubsystemPage } from "@/components/sections/SubsystemPage";

export const metadata: Metadata = {
  title: "EPS - Electrical Power System | Team Anant",
  description:
    "Comprehensive electrical power management system for Team Anant's nanosatellite, featuring solar panel control, battery management, and power distribution.",
};

const specs = [
  { param: "Solar Panel Efficiency", value: "28–30%" },
  { param: "Battery Capacity", value: "20–25 Wh" },
  { param: "Battery Configuration", value: "2s2p Li-ion" },
  { param: "Power Generation", value: "8–12 W" },
  { param: "Regulated Rails", value: "3.3V, 5V, 12V" },
  { param: "Mission Duration", value: "2+ years" },
];

const components = [
  {
    id: "solar",
    name: "Solar Panels",
    description: "High-efficiency triple-junction GaAs arrays (28–30% efficiency) with deployable design for maximum surface area. Includes Maximum Power Point Tracking (MPPT) for optimal energy harvesting under varying illumination.",
  },
  {
    id: "battery",
    name: "Battery Management",
    description: "2s2p Li-ion pack with 20–25 Wh capacity. Features intelligent charge/discharge management, cell balancing, and comprehensive protection against overcharge, overdischarge, and thermal runaway.",
  },
  {
    id: "distribution",
    name: "Power Distribution",
    description: "Multiple regulated voltage rails (3.3V, 5V, 12V) with overcurrent protection, load switching, and housekeeping telemetry for real-time power monitoring.",
  },
];

const stats = [
  { value: "8–12 W", label: "Power Generation" },
  { value: "99.9%", label: "System Reliability" },
  { value: "2+ Years", label: "Mission Duration" },
];

export default function EPSPage() {
  return (
    <SubsystemPage
      code="EPS"
      subtitle="Electrical Power System"
      description="Advanced power management with efficient generation, storage, and distribution for continuous operations."
      overview="The Electrical Power System generates, stores, and distributes electrical power across the mission. It handles demanding payload requirements while maintaining reliability throughout the satellite's operational lifetime."
      overviewDetails="High-efficiency solar arrays with MPPT, intelligent battery management, and robust power distribution ensure continuous operation during both sunlit and eclipse periods. The system includes comprehensive protection circuits and housekeeping telemetry for ground monitoring."
      specs={specs}
      components={components}
      stats={stats}
      prevLink={{ href: "/subsystems/adcs", label: "ADCS" }}
      nextLink={{ href: "/subsystems/obc", label: "OBC" }}
    />
  );
}
