import { Publications } from "@/components/sections/Publications";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Publications | Team Anant",
  description: "Our research contributions to the field of nanosatellite technology and space systems.",
};

export default function PublicationsPage() {
  return (
    <>
      <div className="pt-14 md:pt-16">
        <Publications />
      </div>
      <Footer />
    </>
  );
}
