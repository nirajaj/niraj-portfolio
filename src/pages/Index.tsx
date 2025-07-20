import Navigation from "@/components/Navigation";
import DarkModeToggle from "@/components/DarkModeToggle";
import Hero from "@/components/Hero";
import About from "@/components/About";
import LearningJourney from "@/components/LearningJourney";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <DarkModeToggle />
      <Navigation />
      <Hero />
      <About />
      <LearningJourney />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
