import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TheProblem from "@/components/TheProblem";
import TheSystem from "@/components/TheSystem";
import SocialProof from "@/components/SocialProof";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import WhoItsFor from "@/components/WhoItsFor";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TheProblem />
      <TheSystem />
      <SocialProof />
      <HowItWorks />
      <Pricing />
      <WhoItsFor />
      <Contact />
      <Footer />
    </>
  );
}
