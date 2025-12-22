import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Contact | Team Anant",
  description: "Get in touch with Team Anant for questions or collaboration opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <div className="pt-14 md:pt-16">
        <Contact />
      </div>
      <Footer />
    </>
  );
}
