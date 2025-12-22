import { Team } from "@/components/sections/Team";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Team | Team Anant",
  description: "Meet the passionate individuals behind Team Anant's compact hyperspectral imaging CubeSat mission.",
};

export default function TeamPage() {
  return (
    <>
      <div className="pt-14 md:pt-16">
        <Team />
      </div>
      <Footer />
    </>
  );
}
