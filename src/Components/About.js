import React, { useEffect } from "react";
import classes from "./about.module.css";
import Jimg from './img/js.jpg';
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({
      // initialise with other settings
      duration: 2000,
    });
  });
  return (
    <div className={classes.about}>
      <div className={classes.about_text}>
        <div>
          <h2>About</h2>
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
          <ul>
            <li> Javascript ES6 </li>
            
            <li> C Sharp </li>
            <li> Java </li>
            <li> Python </li>
          </ul>
        </div>
        <div data-aos="flip-left">
        <img src={Jimg} alt="skill" className={classes.about_cards_img}/>
          <h3> Library and Frameworks </h3>
          <ul>
            <li> JQuery </li>
            <li> React </li>
            <li> Node.Js </li>
            <li> ASP.NET MVC </li>
            <li> Flask/Django </li>
          </ul>
        </div>
        <div data-aos="flip-left">
        <img src={Jimg} alt="skill" className={classes.about_cards_img}/>
          <h3> Others </h3>
          <ul>
            <li> HTML5 / CSS3 </li>
            <li> SQL : Oracle</li>
            <li> NoSQL : MongoDB</li>
            <li> System: Windows / Linux </li>
            <li> VersionControl: Github </li>
          </ul>
        </div>
      </div>
      <div className={classes.project}></div>
    </div>
  );
};
export default About;
