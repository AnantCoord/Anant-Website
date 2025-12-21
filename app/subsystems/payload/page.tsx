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
import { ArrowLeft, ArrowRight, Leaf, Droplets } from "lucide-react";

export const metadata: Metadata = {
  title: "Payload - Hyperspectral Imaging | Team Anant",
  description:
    "Compact hyperspectral camera with 270 spectral bands for cost-effective orbital imaging and remote sensing applications.",
};

const specs = [
  { param: "Spectral Bands", value: "32" },
  { param: "Sensor Format", value: "640×480" },
  { param: "Bit Depth", value: "12-bit" },
  { param: "Compression", value: "CCSDS" },
  { param: "Power Consumption", value: "~10 W" },
  { param: "Data Interface", value: "I²C" },
];

const components = [
  {
    id: "camera",
    name: "Hyperspectral Camera",
    description: "Compact imaging sensor capturing 32 spectral bands across visible and near-infrared wavelengths. Enables detailed spectral analysis for vegetation health, water quality, and land classification.",
  },
  {
    id: "processing",
    name: "Data Processing",
    description: "On-board CCSDS compression algorithm reduces data volume by up to 4:1 while preserving spectral fidelity. Enables efficient storage and transmission of hyperspectral datacubes.",
  },

  {
    id: "pipeline",
    name: "Pipeline",
    description: "An end-to-end pipeline supporting high-impact computer vision tasks, including semantic segmentation, object detection, and anomaly detection."
  }
];

const applications = [
  {
    id: "vegetation",
    name: "Vegetation Monitoring",
    icon: Leaf,
    description: "Crop health assessment, forest cover analysis, agricultural yield prediction, and early detection of plant stress through spectral signature analysis.",
  },
  {
    id: "environment",
    name: "Environmental Analysis",
    icon: Droplets,
    description: "Water quality monitoring, land use classification, environmental change detection, and coastal zone mapping using multi-spectral indices.",
  },
];

const stats = [
  { value: "32", label: "Spectral Bands" },
  { value: "30 m at 500 km", label: "Ground Sampling Distance" },
  { value: "~10 W", label: "Power Draw" },
];

export default function PayloadPage() {
  return (
    <div className="min-h-screen pt-16 md:pt-18">
      {/* Hero */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Payload</h1>
            <p className="text-xl text-primary mb-2">Hyperspectral Imaging Payload</p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Compact hyperspectral camera enabling cost-effective orbital imaging for remote sensing applications.
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
              The hyperspectral imaging payload is the primary scientific instrument of the mission,
              capturing detailed spectral data across 32 bands for Earth observation and remote sensing.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a 4096 pixel across-track sensor format and 12-bit depth, the payload enables vegetation monitoring,
              water quality assessment, and land classification. On-board CCSDS compression ensures 
              efficient data transmission during ground station passes.
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

      {/* Applications */}
      <section className="py-12 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Applications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {applications.map((app) => (
              <div key={app.id} className="p-6 rounded-xl bg-muted/30 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <app.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{app.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {app.description}
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
            <Link href="/subsystems/adcs">
              ADCS
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
