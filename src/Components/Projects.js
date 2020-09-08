import React from "react";
import classes from "./Projects.module.css";
import { VerticalTimeline,  VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';

const Projects = () => {
  return (
<div className={classes.body}>
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
                  
    <h3 className="vertical-timeline-element-title">PhD in BioMedical Science</h3>
    <h4 className="vertical-timeline-element-subtitle"> Brazil / Hungary </h4>
    <p>
        Data processing and analysis of Large amount of Genomic and protein-level dataset sequencing. 
        Analysis and creating annotation as well data pipelines. I hold a phD in Molecular Biology in Infectious disease and Metabolic disorders.
    </p>
  </VerticalTimelineElement>
             
              
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ border: '3px solid  yellow', background: '#3a4750', color: '#f6c90e' }}
    contentArrowStyle={{ borderRight: '16px solid  yellow' }}
    iconStyle={{ background: '#303841', color: '#f6c90e' }}
    icon={<StarIcon />}
  >
    <h3 className="vertical-timeline-element-title"> Javascript Project </h3>
    <p>
    its a game deleoper for website.
    </p>
    <h4 className="vertical-timeline-element-button"> LIVE </h4>
  </VerticalTimelineElement>
              

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ border: '3px solid  yellow', background: '#3a4750', color: '#f6c90e' }}
    contentArrowStyle={{ borderRight: '16px solid  yellow' }}
    iconStyle={{ background: '#303841', color: '#f6c90e' }}
    icon={<StarIcon />}
  >
    <h3 className="vertical-timeline-element-title"> React Project </h3>
    <p>
    its about Daily TO DO LIST 
    </p>
    <h4 className="vertical-timeline-element-button"> LIVE </h4>
  </VerticalTimelineElement>
              

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ border: '3px solid  yellow', background: '#3a4750', color: '#f6c90e' }}
    contentArrowStyle={{ borderRight: '16px solid  yellow' }}
    iconStyle={{ background: '#303841', color: '#f6c90e' }}
    icon={<StarIcon />}
  >
    <h3 className="vertical-timeline-element-title"> Python/React Project </h3>
    <p>
    its about tweet my news
    </p>
    <h4 className="vertical-timeline-element-button"> LIVE </h4>
    </VerticalTimelineElement>


  
              
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ border: '3px solid  yellow', background: '#3a4750', color: '#f6c90e' }}
    contentArrowStyle={{ borderRight: '16px solid  yellow' }}
    iconStyle={{ background: '#303841', color: '#f6c90e' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Software Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Toronto, Canada</h4>
    <p>
    I graduate a Software Engineer diploma at Centennial College.
    </p>
  </VerticalTimelineElement>
        

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ border: '3px solid  yellow', background: '#f6c90e', color: 'black' }}
    contentArrowStyle={{ borderRight: '16px solid  yellow' }}
    iconStyle={{ background: '#303841', color: '#f6c90e' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Open to Work</h3>
    <h4 className="vertical-timeline-element-subtitle">as Software developer</h4>
    
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
