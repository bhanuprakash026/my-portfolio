import About from "./components/About";
import Intro from "./components/Intro";
import SectionDevider from "./components/SectionDevider";
import Projects from './components/Projects'
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ContactMe from "./components/ContactMe";

export default function Home() {
  return (
    <div className="flex flex-col items-center
    px-4">
      <Intro />
      <SectionDevider />
      <About />
      <SectionDevider />
      <Projects />
      <SectionDevider />
      <Skills />
      <SectionDevider />
      <Experience />
      <SectionDevider />
      <ContactMe />
    </div>
  );
}
