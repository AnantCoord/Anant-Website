import { Metadata } from "next";
import { SubsystemPage } from "@/components/sections/SubsystemPage";

export const metadata: Metadata = {
  title: "TTC - Telemetry, Tracking & Command | Team Anant",
  description:
    "UHF LoRa and S-band communication system for Team Anant's nanosatellite with beaconing and mission data downlink capabilities.",
};

const specs = [
  { param: "UHF Transceiver", value: "LoRa (433 MHz)" },
  { param: "S-band Transceiver", value: "2.4 GHz" },
  { param: "UHF Protocol", value: "AX.25" },
  { param: "UHF Data Rate", value: "9.6 kbps" },
  { param: "Pass Duration", value: "10+ min" },
  { param: "UHF Antenna", value: "Deployable Turnstile/Monopole" },
  { param: "S-band Antenna", value: "2.4 GHz Patch" },
];

const components = [
  {
    id: "uhf-transceiver",
    name: "UHF LoRa Transceiver",
    description: "UHF LoRa transceiver operating at 433 MHz for beaconing and telemetry. Provides low power consumption and high sensitivity with configurable data rates and modulation schemes.",
  },
  {
    id: "sband-transceiver",
    name: "S-band Transceiver",
    description: "S-band transceiver for high-speed mission data downlink. Enables efficient transfer of payload data and imagery to the ground station during passes.",
  },
  {
    id: "uhf-antennas",
    name: "UHF Antennas (433 MHz)",
    description: "Deployable turnstile and monopole antennas for omnidirectional coverage. Spring-loaded deployment mechanism activates post-separation from launch vehicle.",
  },
  {
    id: "sband-antenna",
    name: "S-band Antenna (2.4 GHz)",
    description: "2.4 GHz patch antenna for S-band mission data downlink. Provides directional transmission for efficient high-bandwidth data transfer to the ground station.",
  },
  {
    id: "ground",
    name: "Ground Station",
    description: "SatNOGS based Yagi antenna setup with SDR reception for command uplink and telemetry downlink. Located at BITS Pilani campus with tracking capability.",
  },
];

const stats = [
  { value: "433 MHz", label: "UHF Beaconing" },
  { value: "2.4 GHz", label: "S-band Downlink" },
  { value: "10+ min", label: "Pass Duration" },
];

export default function TTCPage() {
  return (
    <SubsystemPage
      code="TTC"
      subtitle="Telemetry, Tracking & Command"
      description="Dual-band communication system with UHF LoRa beaconing and S-band mission data downlink for reliable ground station operations."
      overview="The Telemetry and Ground Station subsystem serves as the communication backbone of the satellite mission. It is responsible for receiving real-time health and status data (telemetry) from the satellite and transmitting commands from the ground. The subsystem uses a UHF LoRa transceiver for beaconing and an S-band transceiver for downlinking mission data."
      overviewDetails="The ground station enables mission control to monitor and manage operations throughout the mission lifecycle. Using deployable antennas and AX.25 protocol for data framing, the TTC provides reliable communication links during ground station passes. The system supports both beacon transmission and commanded data downloads."
      specs={specs}
      components={components}
      stats={stats}
      prevLink={{ href: "/subsystems/obc", label: "OBC" }}
      nextLink={{ href: "/subsystems/sts", label: "STS" }}
    />
  );
}
