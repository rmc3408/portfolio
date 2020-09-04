import React from "react";
import "./App.css";
import Navbar from "./Components/navbar";
import ImageSection from './Components/imageSection';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageSection />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
