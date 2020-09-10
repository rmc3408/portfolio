import React from "react";
import classes from "./Contact.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub , faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = ({reff}) => {
    return <div className={classes.contact_body} ref={reff}>
    <footer>
        <div> 
                <a href="https://github.com/rmc3408" ><FontAwesomeIcon icon={faGithub} className={classes.icons} /></a>
                <a href='https://www.linkedin.com/in/raphael-molinaro-68388b133/'><FontAwesomeIcon icon={faLinkedin} className={classes.icons} /> </a>      
        </div>
         
    <p> Created by Raphael Molinaro @ 2020 </p>
    </footer>
        
    </div>
};

export default Contact;
