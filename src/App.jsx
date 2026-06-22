import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import TrustBar     from "./components/TrustBar";
import Problems     from "./components/Problems";
import Solutions    from "./components/Solutions";
import HowItWorks   from "./components/HowItWorks";
import ClaraSection from "./components/ClaraSection";
import TeamSection   from "./components/TeamSection";
import Testimonials from "./components/Testimonials";
import Contact      from "./components/Contact";
import Footer       from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Problems />
      <Solutions />
      <HowItWorks />
      <ClaraSection />
      <TeamSection />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
