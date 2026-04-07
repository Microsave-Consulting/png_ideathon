import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import IdeathonJourney from "@/components/IdeathonJourney";
import Benefits from "@/components/Benefits";
import Eligibility from "@/components/Eligibility";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Results from "@/components/Results";
export default function Home() {
  return (
    <div className="hackathon">
      <Navbar />
      <Hero />
      <About />
      <IdeathonJourney />
      <Benefits />
      <Eligibility />
      <Results />
      <Gallery />
      <Registration />
      <Footer />  
    </div>
  );
}
