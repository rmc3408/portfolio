import React, { useEffect } from "react";
import classes from "./about.module.css";
import Jimg3 from './img/Slide3.PNG';
import Jimg4 from './img/Slide4.PNG';
import Jimg5 from './img/Slide5.PNG';
import AOS from "aos";

const About = ({reff}) => {
  useEffect(() => {
    AOS.init({
      // initialise with other settings
      duration: 2000,
    });
  });
  return (
    <div className={classes.about} ref={reff}>
      <div className={classes.about_text}>
        <div>
          <h2> About </h2>
          <span>
            I'm a logical, critical thinker that enjoys the problem solving and
            continuous learning inherent in software development. My mission is
            to use my skills and passion for learning to build intuitive and
            responsive web applications.
          </span>
        </div>
      </div>
      <div className={classes.about_cards}>
        <div data-aos="flip-left">
          <img src={Jimg3} alt="skill" className={classes.about_cards_img}/>
          <h3> Languages </h3>
          <p> Javascript </p>
          <p> TypeScript </p>
          <p> HTML5 / CSS3 </p>
          <p> SQL and NoSQL</p>
          <p> C# </p>
          <p> Java </p>
          <p> Python </p>
          
        </div>
        <div data-aos="flip-left">
        <img src={Jimg4} alt="skill" className={classes.about_cards_img}/>
          <h3> Library and Frameworks </h3>
          <p> React / Redux / Hooks </p>
          <p> Material-UI </p>
          <p> Node.Js </p>
          <p> Express </p>
          <p> JQuery </p>
          <p> ASP.NET </p>
          
          
        </div>
        <div data-aos="flip-left">
        <img src={Jimg5} alt="skill" className={classes.about_cards_img}/>
          <h3> Others </h3>
          <p> Windows / Linux </p>
          <p> Cloud service </p>
          <p> Trello / JIRA </p>
          <p> Git / Github / BitBucket </p>
        </div>
      </div>
      <div className={classes.project}></div>
    </div>
  );
};
export default About;
