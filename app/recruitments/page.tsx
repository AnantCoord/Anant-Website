"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Calendar, ExternalLink, CheckCircle2, Circle, Clock } from "lucide-react";
import { SlideReveal, BlurReveal } from "@/components/effects";

interface Stage {
  id: string;
  name: string;
  date: string;
  status: "completed" | "current" | "upcoming";
  description: string;
  details: string[];
  resources?: { name: string; url: string }[];
}

const recruitmentStages: Stage[] = [
  {
    id: "orientation",
    name: "Orientation",
    date: "January 10, 2025",
    status: "upcoming",
    description: "To introduce you to our work, vision, and opportunitites for you to be a part of this journey, we are hosting an Orientation Session. Learn about the different subsystems and find where your interests align.",
    details: [
      "Introduction to Team Anant and our satellite projects",
      "Overview of all six subsystems",
      "Meet current team members and leads",
      "Q&A session for prospective members",
      "Location: TBA"
    ],
    resources: [
      { name: "Orientation Slides", url: "#" },
      { name: "Team Overview", url: "/about" }
    ]
  },
  {
    id: "test-1",
    name: "Round 1 Test",
    date: "January 16, 2025",
    status: "upcoming",
    description: "The first screening test to evaluate your fundamental understanding and problem-solving abilities. We hope you enjoy the paper!",
    details: [
      "Duration: 24 hours",
      "Open Internet Test",
      "You may attempt the paper for multiple subsystems.",
      "Your current choice does not lock you into the specific vertical."
    ],
    resources: [
      { name: "Resources", url: "#" },
      // { name: "Sample Questions", url: "#" }
    ]
  },
  {
    id: "introductory-lectures",
    name: "Introductory Lectures",
    date: "January 28 - February 11, 2025",
    status: "upcoming",
    description: "Attend specialized lectures for each subsystem to understand the technical aspects and choose your preferred domain.",
    details: [
      "One-Two lecture per subsystem over the weeks",
      "Topics covered: EPS, OBC, TTC, ADCS, STS, Payload",
      "Hands-on demonstrations where applicable",
      "Attendance mandatory for all lectures",
      "Opportunity to ask subsystem-specific questions"
    ],
    resources: [
      { name: "Lecture Schedule", url: "#" },
      { name: "Subsystem Overviews", url: "/subsystems/eps" }
    ]
  },
  {
    id: "task-2",
    name: "Round 2 Tasks",
    date: "February 12-19, 2025",
    status: "upcoming",
    description: "Complete a subsystem-specific tasks assigned during the lectures to demonstrate your understanding and technical skills.",
    details: [
      "Can choose multiple subsystems",
      "Practical implementation needed wherever required",
      "Documentation and presentation of your work",
      "Mentorship available from current members"
    ],
    resources: [
      { name: "Task Guidelines", url: "#" }
    ]
  },
  {
    id: "final-interviews",
    name: "Final Interviews",
    date: "TBA",
    status: "upcoming",
    description: "One-on-one interviews to discuss the techinical skills you built up during the recruitment process",
    details: [
      "Duration: 20-30 minutes per candidate",
      "Discussion of Task 2 submission",
      "Technical questions on chosen subsystem",
      "Assessment of teamwork and communication skills",
    ],
    resources: [
      // { name: "Interview Tips", url: "#" }
    ]
  }
];

function getStatusIcon(status: Stage["status"]) {
  switch (status) {
    case "completed":
      return <CheckCircle2 className="h-4 w-4 text-green-500" />;
    case "current":
      return <Clock className="h-4 w-4 text-primary animate-pulse" />;
    case "upcoming":
      return <Circle className="h-4 w-4 text-muted-foreground" />;
  }
}

export default function RecruitmentsPage() {
  const [selectedStage, setSelectedStage] = useState<Stage>(recruitmentStages[0]);

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <BlurReveal delay={0.1} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Recruitments</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join Team Anant and be part of BITS Pilani&apos;s student satellite initiative. 
            Follow the timeline below to track the recruitment process.
          </p>
        </BlurReveal>

        {/* Main Content */}
        <SlideReveal delay={0.2} distance={30}>
          <Card className="border border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Left Pane - Timeline */}
              <div className="w-full md:w-[300px] md:shrink-0 border-b md:border-b-0 md:border-r border-border/50 bg-muted/30 order-2 md:order-1">
                <div className="p-4 pb-2">
                  <h3 className="font-semibold text-lg mb-1">Timeline</h3>
                  <p className="text-xs text-muted-foreground">Click on a stage to view details</p>
                </div>
                <ScrollArea className="h-auto max-h-[400px] px-4">
                  <div className="space-y-0 py-2">
                    {recruitmentStages.map((stage) => (
                      <button
                        key={stage.id}
                        onClick={() => setSelectedStage(stage)}
                        className={cn(
                          "w-full text-left px-3 py-3 rounded-lg border transition-all duration-200",
                          "hover:bg-accent/50",
                          selectedStage.id === stage.id
                            ? "bg-background border-primary/50 shadow-sm"
                            : "bg-transparent border-transparent"
                        )}
                      >
                        <div className="flex items-center gap-2.5">
                          {getStatusIcon(stage.status)}
                          <div className="flex-1">
                            <div className="font-medium text-sm">{stage.name}</div>
                            <div className="text-xs text-muted-foreground truncate">{stage.date}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </ScrollArea>
              </div>

              {/* Right Pane - Stage Details */}
              <div className="flex-1 p-5 md:p-6 flex flex-col order-1 md:order-2">
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-center gap-3 mb-1">
                    {getStatusIcon(selectedStage.status)}
                    <span className={cn(
                      "text-xs font-medium uppercase tracking-wider",
                      selectedStage.status === "completed" && "text-green-500",
                      selectedStage.status === "current" && "text-primary",
                      selectedStage.status === "upcoming" && "text-muted-foreground"
                    )}>
                      {selectedStage.status === "current" ? "In Progress" : selectedStage.status}
                    </span>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl">{selectedStage.name}</CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{selectedStage.date}</span>
                  </div>
                </CardHeader>

                <CardContent className="p-0 flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {selectedStage.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {selectedStage.details.map((detail, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-sm text-foreground/80">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {selectedStage.resources && selectedStage.resources.length > 0 && (
                    <div className="mt-auto pt-4 border-t border-dashed border-border/50">
                      <h4 className="text-sm font-medium mb-2 text-muted-foreground">Resources</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedStage.resources.map((resource, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            asChild
                            className="gap-2"
                          >
                            <a href={resource.url}>
                              {resource.name}
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </div>
            </div>
          </Card>
        </SlideReveal>
      </div>
    </main>
  );
}
