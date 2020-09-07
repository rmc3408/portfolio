import React from "react";
import classes from './imageSection.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init({
  duration: 3200
 });

const ImageSection = () => {
  return (
    <div className={classes.imageContainer}>
      <div className={classes.boxTitle} >
        <h1 data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className={classes.titleName}> Hello, My name is Raphael Molinaro </h1>
        <h3 data-aos="fade-up"
          data-aos-delay="700"
          data-aos-duration="3000"> I'm a software developer</h3>
      </div>
      
  </div>
  )
};

export default ImageSection;
