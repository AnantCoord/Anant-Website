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
    date: "January 14, 2026",
    status: "completed",
    description: "To introduce you to our work, vision, and opportunitites for you to be a part of this journey, we are hosting an Orientation Session. Learn about the different subsystems and find where your interests align.",
    details: [
      "Introduction to Team Anant and our satellite projects",
      "Overview of all six subsystems",
      "Meet current team members and leads",
      "Q&A session for prospective members",
      "Location: LTC 5101",
      "Joining the Anant Recruitments WhatsApp Group is mandatory to receive updates regarding the recruitment process."
    ],
    resources: [
      { name: "Orientation Slides", url: "/Anant Orientation 2026_complete.pdf" },
      { name: "Team Overview", url: "/about" },
      { name: "Resources", url: "https://docs.google.com/document/d/1P9OWGGBwnghbKJ-MV08gKG0f1u7XYaIjdFwldpma6kE/" },
      { name: "Recruitment Form Link", url: "https://docs.google.com/forms/d/e/1FAIpQLSc-6R8pm-l6adQxe7bzccZdTuN2biaSFZa-3q8zX1PzGKEjrg/" }
    ]
  },
  {
    id: "test-1",
    name: "Round 1 Test",
    date: "January 17, 2026",
    status: "completed",
    description: "The first screening test to evaluate your fundamental understanding and problem-solving abilities.",
    details: [
      "Duration: 24 hours",
      "Open Internet Test",
      "You may attempt the paper for multiple subsystems.",
      "Your current choice does not lock you into the specific vertical.",
      "Joining the Anant Recruitments WhatsApp Group is mandatory to receive updates regarding the test.",
      "If you have not been added to the Google Classroom or face any issues fill out the Issues form from the link below."
    ],
    resources: [
      { name: "Resources", url: "https://docs.google.com/document/d/1P9OWGGBwnghbKJ-MV08gKG0f1u7XYaIjdFwldpma6kE/" },
      { name: "Resources Document", url: "/Anant_Recruitments_26_Resource_Doc.pdf" },
      { name: "Recruitment Form Link", url: "https://docs.google.com/forms/d/e/1FAIpQLSc-6R8pm-l6adQxe7bzccZdTuN2biaSFZa-3q8zX1PzGKEjrg/" },
      { name: "Issues Form", url: "https://forms.gle/qSwvhQ9s8T9xvmz46"}
    ]
  },
  {
    id: "interviews-1",
    name: "Round 1 Interviews",
    date: "January 25 - January 31, 2026",
    status: "completed",
    description: "Personal interviews to discuss your test performance for Round 1.",
    details: [
      "You may be called for multiple interviews based on the subsystems you attempted.",
      "Discussion of your answers and problem-solving approach",      
    ],
    resources: [
      { name: "Resources", url: "https://docs.google.com/document/d/1P9OWGGBwnghbKJ-MV08gKG0f1u7XYaIjdFwldpma6kE/" },
      { name: "Introduction Doc", url: "/Anant_Recruitments_26_Resource_Doc.pdf" },
      { name: "Round 1 Papers", url: "https://drive.google.com/file/d/1qVqt2aKb126p0UPGvIMNILevYiIVGAoi/view?usp=sharing" },
    ]
  },
  {
    id: "probationary-lectures",
    name: "Probationary Lectures",
    date: "February 2 - February 20, 2026",
    status: "completed",
    description: "Attend specialized lectures for each subsystem to understand the technical aspects and choose your preferred domain.",
    details: [
      "One-Two lecture per subsystem over the weeks",
      "Topics covered: EPS, OBC, TTC, ADCS, STS, Payload",
      "Hands-on demonstrations where applicable",
      "Attendance mandatory for all lectures",
      "Opportunity to ask subsystem-specific questions"
    ],
    resources: [
      // { name: "Lecture Schedule", url: "#" },
      { name: "Subsystem Overviews", url: "/Anant_Recruitments_26_Resource_Doc.pdf" }
    ]
  },
  {
    id: "task-2",
    name: "Round 2 Tasks",
    date: "February 22 - March 7, 2026",
    status: "current",
    description: "Complete a subsystem-specific tasks assigned during the lectures to demonstrate your understanding and technical skills.",
    details: [
      "Can choose multiple subsystems",
      "Practical implementation needed wherever required",
      "Documentation and presentation of your work",
      "Mentorship available from current members"
    ],
    resources: [
      // { name: "Task Guidelines", url: "#" }
    ]
  },
  {
    id: "final-interviews",
    name: "Final Interviews",
    date: "TBA",
    status: "upcoming",
    description: "One-on-one interviews to discuss the techinical skills you built up during the recruitment process",
    details: [
      "Discussion of Task 2 submission",
      "Technical questions on chosen subsystem",
      "Assessment of teamwork and communication skills",
    ],
    resources: [
      { name: "Subsystem Overviews", url: "/subsystems/eps" }
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
function getDefaultStage(stages: Stage[]): Stage {
  // 1. Current (in-progress)
  const current = stages.find(stage => stage.status === "current");
  if (current) return current;

  // 2. Most recent completed (last completed in list)
  const completed = [...stages]
    .filter(stage => stage.status === "completed");

  if (completed.length > 0) {
    return completed[completed.length - 1];
  }

  // 3. Fallback
  return stages[0];
}

export default function RecruitmentsPage() {
  const [selectedStage, setSelectedStage] = useState<Stage>(() =>
  getDefaultStage(recruitmentStages)
);


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
              <div className="w-full md:w-75 md:shrink-0 border-b md:border-b-0 md:border-r border-border/50 bg-muted/30 order-2 md:order-1">
                <div className="p-4 pb-2">
                  <h3 className="font-semibold text-lg mb-1">Timeline</h3>
                  <p className="text-xs text-muted-foreground">Click on a stage to view details</p>
                </div>
                <ScrollArea className="h-auto max-h-100 px-4">
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
