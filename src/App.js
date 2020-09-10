import React,{useRef} from "react";
import "./App.css";
import Navbar from "./Components/navbar";
import ImageSection from './Components/imageSection';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import animateScrollTo from 'animated-scroll-to';

function App() {
  const about= useRef(null)
  const project=useRef(null)
  const contact=useRef(null)
  const executeScroll = () => scrollToRef(about)
  const scrollToRef = (ref) => animateScrollTo(ref.current.offsetTop)
  const proj = () => scrollToRef(project)
  const con = () => scrollToRef(contact)




  return (
    <div className="App">
      <Navbar toAbout={executeScroll} toProjects={proj} toContact={con}/>
      <ImageSection />
      <About  reff={about}/>
      <Projects reff= {project}/>
      <Contact reff={contact}/>
    </div>
  );
}

export default App;
