import React from "react";
import classes from './imageSection.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

const ImageSection = () => {
  return (
  <div className={classes.imageContainer}>
      <h1 style={{ color: 'white' }}>Hello, My name is Raphael Molinaro</h1>
      <h3 style={{ color: 'white' }}>I'm a software Engineer</h3>
  </div>
  )
};

export default ImageSection;
