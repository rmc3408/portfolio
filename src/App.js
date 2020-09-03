import React from "react";
import "./App.css";
import Navbar from "./Components/navbar";
import ImageSection from './Components/imageSection'
import About from './Components/About'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageSection/>
      <About/>
    </div>
  );
}

export default App;
