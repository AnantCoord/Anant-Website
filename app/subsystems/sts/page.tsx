import { Metadata } from "next";
import { SubsystemPage } from "@/components/sections/SubsystemPage";

export const metadata: Metadata = {
  title: "STS - Structural & Thermal Subsystem | Team Anant",
  description:
    "Monoblock Aluminum 6061-T6 structure with passive and active thermal control for Team Anant's 3U CubeSat nanosatellite. ECSS-compliant design for LEO missions.",
};

const specs = [
  { param: "Structural Material", value: "Aluminum 6061-T6" },
  { param: "Configuration", value: "3U CubeSat (P-POD compatible)" },
  { param: "Total Mass", value: "< 4 kg" },
  { param: "Design Load", value: "10 g (quasi-static)" },
  { param: "Factor of Safety", value: "1.25 (yield margin per ECSS)" },
  { param: "Thermal Insulation", value: "Multi-Layer Insulation (MLI)" },
  { param: "Operating Temperature", value: "−40 °C to +85 °C" },
  { param: "Temperature Sensors", value: "TMP117 (high-accuracy digital)" },
  { param: "Vibration Rating", value: "> 10 Grms" },
];

const components = [
  {
    id: "primary-structure",
    name: "Primary Structure",
    description:
      "Monoblock frame machined from a single piece of Aluminum 6061-T6, eliminating mechanically fastened joints. This design reduces tolerance stack-up, increases structural stiffness, and decreases fastener loosening risk during launch vibrations. Provides a continuous load path from internal subsystems to the deployer interface rails.",
  },
  {
    id: "surface-treatments",
    name: "Surface Treatments & Interfaces",
    description:
      "Internal surfaces are black anodized to increase emissivity and boost heat exchange among internal components (EPS, OBC, COMMS, Payload). Deployer interface rails are hard-anodized and Teflon-impregnated to reduce friction, prevent cold welding, and ensure P-POD deployer compatibility.",
  },
  {
    id: "mass-optimization",
    name: "Mass Optimization",
    description:
      "Non-load-bearing areas feature weight-reduction elements including 6.5 mm diameter through-holes and chamfered internal/external edges. These modifications reduce overall structural mass while maintaining a minimum Factor of Safety of 1.25 under defined design loads.",
  },
  {
    id: "passive-thermal",
    name: "Passive Thermal Control",
    description:
      "Thermal regulation through Multi-Layer Insulation (MLI) blankets that reduce direct solar heating and Earth infrared radiation. Selected surface finishes manage radiative properties, while the monoblock aluminum structure acts as a distributed heat sink. High-power components are thermally coupled to the structure for heat spreading toward external radiators.",
  },
  {
    id: "active-thermal",
    name: "Active Thermal Control (Battery)",
    description:
      "Lithium-ion battery pack protected by an active thermal control loop with optimal range of 0 °C to 45 °C. TMP117 sensors monitor battery temperature continuously, with a closed-loop hysteresis controller activating Kapton resistive heaters during eclipse conditions to prevent electrolyte freezing and long-term battery damage.",
  },
  {
    id: "temperature-monitoring",
    name: "Temperature Monitoring Network",
    description:
      "Network of TMP117 high-precision digital temperature sensors at key locations: battery pack (EPS), payload mounting interface, and On-Board Computer (OBC). Sensor data is transmitted to the OBC for real-time telemetry, thermal health monitoring, and post-flight analysis.",
  },
  {
    id: "antenna-deployment",
    name: "Antenna Deployment Mechanism",
    description:
      "Communications antennas secured during launch with nylon wire restraints. Deployment via nichrome burn-wire mechanism cuts the restraint upon command after orbital insertion, allowing antennas to unfold into dipole configuration without relying on the deployer for release.",
  },
  {
    id: "qualification-testing",
    name: "Qualification & Environmental Testing",
    description:
      "ECSS and GEVS-compliant environmental qualification program. Random vibration testing at 10 Grms for 60 seconds per axis with sine sweep from 50 Hz to 2000 Hz. Thermal vacuum (TVAC) testing down to 5 × 10⁻⁵ Torr with multiple thermal cycles across the operational temperature range to verify material outgassing and thermal design margins.",
  },
];

const stats = [
  { value: "3U", label: "Form Factor" },
  { value: "< 4 kg", label: "Total Mass" },
  { value: "10 Grms", label: "Vibration Rating" },
  { value: "1.25", label: "Factor of Safety" },
];

export default function STSPage() {
  return (
    <SubsystemPage
      code="STS"
      subtitle="Structural & Thermal Subsystem"
      description="Monoblock 3U CubeSat structure with integrated passive and active thermal management, designed to ECSS standards for LEO missions."
      overview="The Structural and Thermal Subsystem (STS) provides the main mechanical load path, thermal control interface, and environmental protection for Team Anant's nanosatellite. It acts as the primary structural connection between the spacecraft and the launch vehicle, ensuring all onboard subsystems operate within their specified mechanical and thermal limits during launch and orbital operations."
      overviewDetails="The STS is built to endure combined static, vibrational, and acoustic loads experienced during launch (greater than 10 Grms) and the thermal-vacuum environment of Low Earth Orbit (LEO). Following ECSS structural design guidelines, the subsystem employs a monoblock structural architecture to reduce part count, eliminate joint-related failures, and improve overall stiffness. This keeps the spacecraft's fundamental natural frequency well separated from launch vehicle excitation frequencies, minimizing dynamic coupling and resonance during ascent."
      specs={specs}
      components={components}
      stats={stats}
      prevLink={{ href: "/subsystems/ttc", label: "TTC" }}
      nextLink={{ href: "/subsystems/payload", label: "Payload" }}
    />
  );
}
