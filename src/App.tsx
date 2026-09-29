import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import MachinePark from './components/MachinePark/MachinePark';
import ProjectSpotlight from './components/ProjectSpotlight/ProjectSpotlight';
import Marquee from './components/Marquee/Marquee';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <div id="top" className="page">
      <Hero />
      <About />
      <Projects />
      <Services />
      <MachinePark />
      <ProjectSpotlight />
      <Marquee />
      <Contact />
      <Footer />
    </div>
  );
}
