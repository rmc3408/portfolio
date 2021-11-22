import React from "react";
import classes from "./Projects.module.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import Button from "@material-ui/core/Button";
import StarIcon from "@material-ui/icons/Star";

const Projects = ({ reff }) => {
  return (
    <div className={classes.body} ref={reff}>
      <div className={classes.project_title}>
        <h2> My Professional timeline </h2>
      </div>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            border: "3px solid  yellow",
            background: "#3a4750",
            color: "#f6c90e",
          }}
          contentArrowStyle={{ borderRight: "16px solid  yellow" }}
          iconStyle={{ background: "#303841", color: "#f6c90e" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Post Doctoral Fellow at University of Toronto
          </h3>
          <h4 className="vertical-timeline-element-subtitle"> 2013 - 2018 </h4>
          <p>
            {" "}
            Worked 5 years of Professional work at University of Toronto in LMP
            Department and hold a Ph. D in Molecular Biology in Infectious
            disease and Metabolic disorders
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            border: "3px solid  yellow",
            background: "#3a4750",
            color: "#f6c90e",
          }}
          contentArrowStyle={{ borderRight: "16px solid  yellow" }}
          iconStyle={{ background: "#303841", color: "#f6c90e" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
            Software Enginner Program
          </h3>
          <h4 className="vertical-timeline-element-subtitle"> 2019-2020 </h4>
          <p>
            {" "}
            Studied Software Engineer program at Centennial College which learn
            HTML/CSS , algorithm and data structure in C#, Java and Python
            language{" "}
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            border: "3px solid  yellow",
            background: "#3a4750",
            color: "#f6c90e",
          }}
          contentArrowStyle={{ borderRight: "16px solid yellow" }}
          iconStyle={{ background: "#303841", color: "#f6c90e" }}
          icon={<StarIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
            Advanced Front End Projects{" "}
          </h3>
          <h4 className="vertical-timeline-element-subtitle"> 2019-2020 </h4>
          <p>
            {" "}
            In 2019 and 2020, I performed more than 8 projects using Javascript,
            React, React Native, Redux, Hooks, Material-UI, Animate.CSS and
            TypeScript, AWS, Firebase, Serverless, GraphQL, API, Node, Express,
            MongoDB. All projects are published using cloud services and
            realtime Database
          </p>
          <h4 className="vertical-timeline-element-button">
            <div className={classes.btns}>
              <Button
                variant="outlined"
                style={{ border: "2px solid yellow", color: "white" }}
                href="https://github.com/rmc3408"
              >
                View Code at Github
              </Button>
              <span className={classes.btns_span}></span>
            </div>
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            border: "3px solid  yellow",
            background: "#3a4750",
            color: "#f6c90e",
          }}
          contentArrowStyle={{ borderRight: "16px solid  yellow" }}
          iconStyle={{ background: "#303841", color: "#f6c90e" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
            Full Stack Developer Internship{" "}
          </h3>
          <h4 className="vertical-timeline-element-subtitle"> 2020 - 2021 </h4>
          <p> Internship at CheaprEats.</p>
          <ul>
            <li>
              Wrote interfaces and Queries using using Typescript to ensure
              following GraphQL schema
            </li>
            <li>Created features using Gatsby, a React Framework </li>
            <li>
              Collaborating with other developer and tracking any activity using
              Agile Team via Git and JIRA.{" "}
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            border: "3px solid  yellow",
            background: "#3a4750",
            color: "#f6c90e",
          }}
          contentArrowStyle={{ borderRight: "16px solid  yellow" }}
          iconStyle={{ background: "#303841", color: "#f6c90e" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
            Front End Developer{" "}
          </h3>
          <h4 className="vertical-timeline-element-subtitle"> 2021 </h4>
          <p> Front End at Health Espresso</p>
          <ul>
            <li>
              Collaborating directly with UX/UI member to build and improve our
              application design
            </li>
            <li>
              Improving communication and documentation between teams and
              departments{" "}
            </li>
            <li>
              Leading, Creating and implementing a Web Portal with new features
              using Next.js, Typescript, Redux, Styled components{" "}
            </li>
            <li>Implement a Video Conference Call using Agora.io. </li>
            <li>Fetching data API endpoint using React-Query </li>
            <li>
              Implementing web socket, events and stream for secure messaging{" "}
            </li>
            <li>
              Participating in daily basis meeting follow by Agile Method{" "}
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Projects;
