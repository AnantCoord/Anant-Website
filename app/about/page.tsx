import { About } from "@/components/sections/About";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "About | Team Anant",
  description: "Learn about Team Anant - BITS Pilani's student satellite team building a compact hyperspectral imaging CubeSat.",
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-14 md:pt-16">
        <About />
      </div>
      <Footer />
    </>
  );
}
