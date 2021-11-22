import React, { useEffect } from "react";
import classes from "./about.module.css";
import Jimg3 from './img/Slide3.PNG';
import Jimg4 from './img/Slide4.PNG';
import Jimg5 from './img/Slide5.PNG';
import AOS from "aos";

const About = ({ reff }) => {
  
  useEffect(() => {
    AOS.init({
      // initialise with other settings
      duration: 2000,
    });
  }, []);

  return (
    <div className={classes.about} ref={reff}>
      <div className={classes.about_text}>
        <div>
          <h2> About </h2>
          <span>
            I'm a <span className={classes.about_text, classes.highlight_text}>Front End developer with 1 year of professional experience</span> who is always continuous learning,
            excellent communicator, careful in writing documentation and works well independent and in a team.
          </span>
        </div>
      </div>
      <div className={classes.about_cards}>
        <div data-aos="flip-left">
          <img src={Jimg3} alt="skill" className={classes.about_cards_img}/>
          <h3> Main Skills </h3>
          <p> Javascript ES6+ </p>
          <p> TypeScript </p>
          <p> Python </p>
          <p> HTML5 / CSS3 </p>
          <p> MySQL and MongoDB</p>
          <p> GraphQL </p>
          <p> C# / Java </p>
          
        </div>
        <div data-aos="flip-left">
        <img src={Jimg4} alt="skill" className={classes.about_cards_img}/>
          <h3> Library and Frameworks </h3>
          <p> React / React Native / Redux </p>
          <p> Serverless Frameworks </p>
          <p> StoryBook </p>
          <p> Material-UI / AntD / Tailwind </p>
          <p> Node.Js / Express </p>
          <p> AWS Gateway / AppSync </p>
          
        </div>
        <div data-aos="flip-left">
        <img src={Jimg5} alt="skill" className={classes.about_cards_img}/>
          <h3> Others </h3>
          <p> Windows / Linux </p>
          <p> AWS Cloud services </p>
          <p> Trello / JIRA </p>
          <p> Git / Github / BitBucket </p>
        </div>
      </div>
      <div className={classes.project}></div>
    </div>
  );
};
export default About;
