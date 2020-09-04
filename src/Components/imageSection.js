import React from "react";
import classes from './imageSection.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

const ImageSection = () => {
  return (
    <div className={classes.imageContainer}>
      <div className={classes.boxTitle}>
        <h1 className={classes.titleName}> Hello, My name is Raphael Molinaro </h1>
        <h3>I'm a software Engineer</h3>
      </div>
      
  </div>
  )
};

export default ImageSection;
