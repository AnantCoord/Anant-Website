import { Metadata } from "next";
import { SubsystemPage } from "@/components/sections/SubsystemPage";

export const metadata: Metadata = {
  title: "ADCS - Attitude Determination & Control | Team Anant",
  description:
    "Precision attitude control system for Team Anant's nanosatellite with BNO085 IMU and B-dot controller.",
};

const specs = [
  { param: "IMU", value: "BNO085" },
  { param: "GPS/GNSS Receiver", value: "Spacemanic's Celeste" },
  { param: "Actuators", value: "Magnetorquers, Reaction Wheels" },
  { param: "Algorithm", value: "B-dot Controller, PID Control" },
  { param: "Estimation", value: "Kalman Filters" },
  { param: "Stabilization", value: "3-axis" },
];

const components = [
  {
    id: "sensors",
    name: "Sensors",
    description: "BNO085 IMU with magnetometer, gyroscope, and accelerometer for attitude sensing. Provides 9-DOF motion data with sensor fusion.",
  },
  {
    id: "estimations",
    name: "Estimation of Sensor Data",
    description: "Using Kalman Filter to estimate true state from noisy and incomplete sensor measurements.",
  },
  {
    id: "actuators",
    name: "Actuators",
    description: "Magnetorquers with PWM control for attitude adjustment using Earth's magnetic field. Reaction Wheels for precise attitude control by taking advantage of Newton's third law of motion. Four reaction wheels in a tetrahedral arrangement for redundancy and fault tolerance, ensuring 3-axis control in case one fails.",
  },
  {
    id: "gps",
    name: "GPS Module",
    description: "Position determination for orbital mechanics calculations and timing synchronization with ground stations.",
  },
];

export default function ADCSPage() {
  return (
    <SubsystemPage
      code="ADCS"
      subtitle="Attitude Determination & Control System"
      description="Precision attitude control for stable imaging and communication operations."
      overview="The Attitude Determination and Control System (ADCS) maintains satellite orientation using sensors and actuators for precise pointing. It enables stable imaging operations and optimal antenna alignment for ground communication."
      overviewDetails="Our ADCS features the BNO085 IMU with integrated sensor fusion, coupled with a GPS module for position determination. The B-dot controller algorithm handles initial detumbling after deployment, using magnetorquers with PWM control signals to interact with Earth's magnetic field."
      specs={specs}
      components={components}
      prevLink={{ href: "/subsystems/sts", label: "STS" }}
      nextLink={{ href: "/subsystems/eps", label: "EPS" }}
    />
  );
}
