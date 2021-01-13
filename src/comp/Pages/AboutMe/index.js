import React from "react"
import { Row, Col, NavLink } from 'reactstrap';
import './style.css';
import skills from "../../Info/skills.js";
import headshot from "../../Pictures/selfie.jpeg";
import resume from "../../Pictures/Michelle-Jordan-Resume.pdf";
import emailIcon from "../../Pictures/email-logo.png";
import githubIcon from "../../Pictures/github-logo.png";
import linkedInIcon from "../../Pictures/linkedin-logo.png";




class About extends React.Component {

  state = {
    skills
  };

  render() {
    return (
      <div>
       <div className="main m-3 text-center hello">
         <Row>
           <Col>
     <div className="banner">
        
        </div>
        </Col>
        <Col>
        <div className="banner2">
        <h1 className="display-4 lead brand animate__animated animate__fadeIn animate__delay-1s">Michelle Jordan</h1>
        <p className="lead brand animate__animated animate__fadeIn animate__delay-3s">Full-Stack Web Developer</p>
        </div>
        </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col>
            <p className="brand2 animate__animated animate__fadeInUp animate__delay-3s">I am a passionate web developer who enjoys taking on new challenges, learning new technologies and bringing a vision to life through coding. I received my Certificate for Full Stack Web Development from UNCC. I'm excited to leverage my Web Development skills and background in Design to offer unique perspectives and create impactful web applications to enhance user experiences.</p>
            <p className=" lead brand resume">
              Please check out my  <a className="res-link" href = {resume} target = "_blank" rel="noopener noreferrer">resume</a> to see more about my work experience.
            </p>
            <Row className="justify-content-center">
            <NavLink className="links" href="mailto:tmsmith1150@live.com"><img className="logo" src={emailIcon} alt="Logo"/></NavLink>
                                    <NavLink className="links" href="https://www.linkedin.com/in/michelle-jordan-6988maiden/"><img className="logo" src={linkedInIcon} alt="Logo"/></NavLink>
                                    <NavLink className="links" href="https://github.com/tmsmith1150"><img className="logo" src={githubIcon} alt="Logo"/></NavLink>
                                    </Row>
          </Col>
        </Row>
        <hr className="my-4" color="white" />
        <Row className="justify-content-center">
          <Col xs="8">
            <p className="font-weight-bold brand">Technical Skills</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {this.state.skills.map(skill => (
            <Col>
              <img className="skillsLogo" src={skill.src} alt="Logo"/>
              <hr className="my-2" />
              <p className="brand">{skill.skill}</p>
            </Col>
          ))}
        </Row>
 
    </div>
    </div>
    
    );
  }

};

export default About;