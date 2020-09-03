import React from "react";
import classes from "./about.module.css";

const About = () => {
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
        <div>
          <h3>Langauges</h3>
          <ul>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className={classes.project}></div>
    </div>
  );
};
export default About;
