import React from "react";
import classes from "./Projects.module.css";
import { VerticalTimeline,  VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/Star';

const Projects = ({reff}) => {
  return (
<div className={classes.body} ref={reff}>
    <div className={classes.project_title}>
        <h2> My Professional timeline </h2>
    </div>
          
<VerticalTimeline >
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ border: '3px solid  yellow', background: '#3a4750', color: '#f6c90e' }}
    contentArrowStyle={{ borderRight: '16px solid  yellow' }}
    iconStyle={{ background: '#303841', color: '#f6c90e' }}
    icon={<SchoolIcon />}  >
                  
    <h3 className="vertical-timeline-element-title">Ph.D in BioMedical Science</h3>
    <h4 className="vertical-timeline-element-subtitle"> 2013 - 2018 </h4>
    <p> Data processing and analysis of Large amount of Genomic and protein-level dataset sequencing. </p>
    <p><b>PhD in Molecular Biology in Infectious disease and Metabolic disorders</b></p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ border: '3px solid  yellow', background: '#3a4750', color: '#f6c90e' }}
    contentArrowStyle={{ borderRight: '16px solid  yellow' }}
    iconStyle={{ background: '#303841', color: '#f6c90e' }}
    icon={<SchoolIcon />}  >
                  
    <h3 className="vertical-timeline-element-title"> Software Enginner Program</h3>
    <h4 className="vertical-timeline-element-subtitle"> 2019-2020 </h4>
    <p> Studied Software Engineer program at Centennial College</p>
  </VerticalTimelineElement>   
              
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ border: '3px solid  yellow', background: '#3a4750', color: '#f6c90e' }}
    contentArrowStyle={{ borderRight: '16px solid yellow' }}
    iconStyle={{ background: '#303841', color: '#f6c90e' }}
    icon={<StarIcon />} >
          
    <h3 className="vertical-timeline-element-title"> Vanilla Javascript Projects </h3>
    <h4 className="vertical-timeline-element-subtitle"> 2019-2020 </h4>
      <p> In 2019, I performed more than 20 projects using javascript, HTML, CSS, JQuery, Node, express, MongoDB</p>
          <h4 className="vertical-timeline-element-button">
          <div className={classes.btns}>
              <Button variant="outlined" style={{border:'2px solid yellow', color:'white'}}
                href='https://github.com/rmc3408/webdevelop'>View Code</Button>
              <span className={classes.btns_span}></span>    
          </div></h4>
  </VerticalTimelineElement>
              

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ border: '3px solid  yellow', background: '#3a4750', color: '#f6c90e' }}
    contentArrowStyle={{ borderRight: '16px solid  yellow' }}
    iconStyle={{ background: '#303841', color: '#f6c90e' }}
    icon={<StarIcon />} >
    
    <h3 className="vertical-timeline-element-title"> Basic Concepts React Project </h3>
    <h4 className="vertical-timeline-element-subtitle"> 2020 </h4>
    <p> Project build in React using API, CSS framework library and state management</p>
    <p> Dirty Daddy Jokes is built using state managment in React. The application request jokes from API and local storage as session.
        User can give votes, request more jokes, interact with Emojis. </p>
          <h4 className="vertical-timeline-element-button">
            <div className={classes.btns}>
              <Button variant="outlined" style={{border:'2px solid yellow', color:'white'}}
                href='https://github.com/rmc3408/React/tree/master/ModernReactBootcamp/section18' >View Code</Button>
              <span className={classes.btns_span}></span>    
              <Button
                variant="outlined" style={{border:'2px solid yellow', color:'white'}}
                href='https://dirtydaddy-rmc3408.vercel.app/'>LIVE</Button>
          </div></h4>
  </VerticalTimelineElement>
              

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ border: '3px solid  yellow', background: '#3a4750', color: '#f6c90e' }}
    contentArrowStyle={{ borderRight: '16px solid  yellow' }}
    iconStyle={{ background: '#303841', color: '#f6c90e' }}
    icon={<StarIcon />} >
    <h3 className="vertical-timeline-element-title"> React + Firebase Cloud service Project </h3>
    <h4 className="vertical-timeline-element-subtitle"> 2020 </h4>
    <p> React.Js Web application called Notes and it aims to keep personal notes for each day.
        The application is avaliable live and code sources in the Github.The proposal was to develop 
        an application using database and deploy in the Firebase (Google). It was built in React and Bootstrap.
        The project goal is bulit a personal to do list per user.</p>
          <h4 className="vertical-timeline-element-button">
          <div className={classes.btns}>
              <Button
                variant="outlined"
                style={{ border: '2px solid yellow', color: 'white' }}
                href='https://github.com/rmc3408/React/tree/master/Emmanuel%20Henri%20-%20OReilly/notepad'>View Code</Button>
              <span className={classes.btns_span}></span>    
              <Button
                variant="outlined" style={{border:'2px solid yellow', color:'white'}}
                href='https://notepad-rmc3408.web.app/'>LIVE</Button>
          </div></h4>
  </VerticalTimelineElement>
           
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ border: '3px solid  yellow', background: '#3a4750', color: '#f6c90e' }}
    contentArrowStyle={{ borderRight: '16px solid  yellow' }}
    iconStyle={{ background: '#303841', color: '#f6c90e' }}
    icon={<StarIcon />} >
    <h3 className="vertical-timeline-element-title"> Advanced Concepts React </h3>
    <h4 className="vertical-timeline-element-subtitle"> 2020 </h4>
    <p> Created React projects to practice Router, Redux, Hooks, Material-UI, Animate.CSS and TypeScript.
       All projects are published using cloud services and realtime Database </p>
    <p> The source code below is PhotoWall Project which user can upload online picture in a photowall. 
      Each picture can be individual commented will be stored and hosted by Google Cloud services</p>
          <h4 className="vertical-timeline-element-button">
          <div className={classes.btns}>
              <Button
                variant="outlined"
                style={{ border: '2px solid yellow', color: 'white' }}
                href='https://github.com/rmc3408/React'>View Code</Button>
              <span className={classes.btns_span}></span>    
              <Button
                variant="outlined" style={{border:'2px solid yellow', color:'white'}}
                href='https://photowall-41fc8.web.app/'>LIVE</Button>
          </div></h4>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ border: '3px solid  yellow', background: '#3a4750', color: '#f6c90e' }}
    contentArrowStyle={{ borderRight: '16px solid  yellow' }}
    iconStyle={{ background: '#303841', color: '#f6c90e' }}
    icon={<WorkIcon />}>
    <h3 className="vertical-timeline-element-title"> Developer Internship </h3>
    <h4 className="vertical-timeline-element-subtitle"> 2021 </h4>
          <p> Started my internship at CheaprEats.</p>
          <ul>
            <li>Reviewing and updating to ensure Clean Code to their new technology stacks using TypeScript and React.js </li> 
            <li>Performing migration of queries using Typescript to ensure following GraphQL schema </li>
            <li>Collaborating with other developer and tracking any activity using Agile Team via Git and JIRA. </li>
          </ul>
  </VerticalTimelineElement>
        

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ border: '3px solid  yellow', background: '#f6c90e', color: 'black' }}
    contentArrowStyle={{ borderRight: '16px solid  yellow' }}
    iconStyle={{ background: '#303841', color: '#f6c90e' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Open to Work</h3>
    <h4 className="vertical-timeline-element-subtitle"> as Front End Software developer</h4>
    </VerticalTimelineElement>
              

<VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<StarIcon />}
  />
</VerticalTimeline>
    </div>
  );
};

export default Projects;
