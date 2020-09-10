import React, { useRef } from "react";
import "./App.css";
import Navbar from "./Components/navbar";
import ImageSection from "./Components/imageSection";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import animateScrollTo from "animated-scroll-to";

function App() {
  const about = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);
  const home = useRef(null);
  const executeScroll = () => scrollToRef(about, "about");
  const scrollToRef = (ref, link) => {
    animateScrollTo(ref.current.offsetTop);
  };
  const proj = () => scrollToRef(project, "project");
  const con = () => scrollToRef(contact, "contact");
  const hom = () => scrollToRef(home);

  return (
    <div className="App">
      <Navbar
        toAbout={executeScroll}
        toProjects={proj}
        toContact={con}
        reff={home}
        toHome={hom}
      />
      <ImageSection reff={home} />
      <About reff={about} />
      <Projects reff={project} />
      <Contact reff={contact} />
    </div>
  );
}

export default App;
