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
    contentStyle={{ border: '3px solid  yellow', background: '#303841', color: '#f6c90e' }}
    contentArrowStyle={{ borderRight: '16px solid  yellow' }}
    date={"2013 - present" }
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
    contentStyle={{ border: '3px solid  yellow', background: '#303841', color: '#f6c90e' }}
    contentArrowStyle={{ borderRight: '16px solid  yellow' }}
    iconStyle={{ background: '#303841', color: '#f6c90e' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Software Enginnerr</h3>
    <h4 className="vertical-timeline-element-subtitle">Toronto, Canada</h4>
    <p>
    I hold a Software Engineer diploma.
    </p>
  </VerticalTimelineElement>
             
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ border: '3px solid  yellow', background: '#303841', color: '#f6c90e' }}
    contentArrowStyle={{ borderRight: '16px solid  yellow' }}
    date="2008 - 2010"
    iconStyle={{ background: '#303841', color: '#f6c90e' }}
    icon={<StarIcon />}
  >
    <h3 className="vertical-timeline-element-title"> C# Project </h3>
    <p>
      User Experience, Visual Design
    </p>
    <h4 className="vertical-timeline-element-button"> LIVE </h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ border: '3px solid  yellow', background: '#303841', color: '#f6c90e' }}
    contentArrowStyle={{ borderRight: '16px solid  yellow' }}
    date="November 2020"
    iconStyle={{ background: '#303841', color: '#f6c90e' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
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
