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
  title: "ADCS - Attitude Determination & Control | Team Anant",
  description:
    "Precision attitude control system for Team Anant's nanosatellite with BNO085 IMU and B-dot controller.",
};

const specs = [
  { param: "IMU", value: "BNO085" },
  { param: "GPS/GNSS Receiver", value: "Spacemanic's Celeste" },
  { param: "Actuators", value: "Magnetorquers, Reaction Wheels" },
  { param: "Algorithm", value: "B-dot Controller, PID Control" },
  { param: "Estimation", value: "Karman Filters" },
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
    description: "Using Karman Filter to estimate true state from noisy and incomplete sensor measurements.",
  },
  {
    id: "actuators",
    name: "Actuators",
    description: (
      <>
        Magnetorquers with PWM control for attitude adjustment using Earth's magnetic field.
        <br />
        <br />
        Reaction Wheels for precise attitude control by taking advantage of Newton’s third law
        of motion. Four reaction wheels in a tetrahedral arrangement for redundancy and fault
        tolerance, ensuring 3-axis control in case one fails.
      </>
    ),
  },
  {
    id: "gps",
    name: "GPS Module",
    description: "Position determination for orbital mechanics calculations and timing synchronization with ground stations.",
  },
];

// const stats = [
//   { value: "±5°", label: "Pointing Accuracy" },
//   { value: ">30 min", label: "Detumbling Time" },
//   { value: "3-axis", label: "Stabilization" },
// ];

export default function ADCSPage() {
  return (
    <div className="min-h-screen pt-16 md:pt-18">
      {/* Hero */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">ADCS</h1>
            <p className="text-xl text-primary mb-2">Attitude Determination & Control System</p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Precision attitude control for stable imaging and communication operations.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      {/* <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Overview */}
      <section className="py-12 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Overview</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed text-lg border-l-4 border-primary pl-6 mb-6">
              The Attitude Determination and Control System (ADCS) maintains satellite orientation using sensors 
              and actuators for precise pointing. It enables stable imaging operations and optimal antenna 
              alignment for ground communication.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our ADCS features the BNO085 IMU with integrated sensor fusion, coupled with a GPS module for 
              position determination. The B-dot controller algorithm handles initial detumbling after deployment, 
              using magnetorquers with PWM control signals to interact with Earth&apos;s magnetic field.
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
            <Link href="/subsystems/sts">
              <ArrowLeft className="w-4 h-4 mr-2" />
              STS
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/subsystems/eps">
              EPS
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
