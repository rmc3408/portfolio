import React, { useEffect } from "react";
import classes from "./about.module.css";
import Jimg from './img/js.jpg';
import AOS from "aos";

const About = ({reff}) => {
  useEffect(() => {
    AOS.init({
      // initialise with other settings
      duration: 1200,
    });
  });
  return (
    <div className={classes.about} ref={reff}>
      <div className={classes.about_text}>
        <div>
          <h2> About </h2>
          <p>
            I'm a logical, critical thinker that enjoys the problem solving and
            continuous learning inherent in software development. My mission is
            to use my skills and passion for learning to build intuitive and
            responsive web applications.
          </p>
        </div>
      </div>
      <div className={classes.about_cards}>
        <div data-aos="flip-left">
          <img src={Jimg} alt="skill" className={classes.about_cards_img}/>
          <h3> Languages </h3>
          <p> Javascript ES6 </p>
          <p> C Sharp </p>
          <p> Java </p>
          <p> Python </p>
          
        </div>
        <div data-aos="flip-left">
        <img src={Jimg} alt="skill" className={classes.about_cards_img}/>
          <h3> Library and Frameworks </h3>
          <p> JQuery </p>
          <p> React </p>
          <p> Node.Js </p>
          <p> Express </p>
          <p> ASP.NET MVC </p>
          <p> Django </p>
          
        </div>
        <div data-aos="flip-left">
        <img src={Jimg} alt="skill" className={classes.about_cards_img}/>
          <h3> Others </h3>
            <p> HTML5 / CSS3 </p>
            <p> SQL : Oracle</p>
            <p> NoSQL : MongoDB</p>
            <p> System: Windows / Linux </p>
            <p> VersionControl: Github </p>
        </div>
      </div>
      <div className={classes.project}></div>
    </div>
  );
};
export default About;
