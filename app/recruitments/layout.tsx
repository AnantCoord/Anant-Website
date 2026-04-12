import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { isRecruitmentsEnabled } from "@/lib/feature-flags";

interface RecruitmentsLayoutProps {
  children: ReactNode;
}

export default function RecruitmentsLayout({ children }: RecruitmentsLayoutProps) {
  if (!isRecruitmentsEnabled) {
    notFound();
  }

  return <>{children}</>;
}