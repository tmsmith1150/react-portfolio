import React from "react"
import { Row, Col, NavLink } from 'reactstrap';
import './style.css';
import skills from "../../Info/skills.js";
import headshot from "../../Pictures/selfie.jpeg";
import resume from "../../Pictures/Web-Dev-Resume.pdf";
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
     <div className="banner">
        {/* <Row className="justify-content-center pic"><img className="headshot shadow bg-white rounded mt-3" src={headshot} alt="Headshot"/>
        </Row> */}
        </div>
    <div className="main m-3 text-center hello">
        
        <h1 className="display-4 brand animate__animated animate__fadeIn animate__delay-2s">Michelle Jordan</h1>
        <p className="lead brand animate__animated animate__fadeIn animate__delay-3s">Full-Stack Web Developer.</p>
        <hr className="my-4" color="white" />
        <Row className="justify-content-center">
          <Col>
            <p className="brand animate__animated animate__fadeInUp animate__delay-3s">I received my Certificate for Full Stack Web Development from UNCC. I am passionate about creating impactful and responsive web applications to enhance user experiences. I have strong project and people management skills, the ability to take the initiative. I'm excited to leverage my Web Development skills and background in Design to offer unique perspectives and collaborations on how end users interact with web applications.</p>
            <p className="brand resume">
              Please check out my  <a className="res-link" href = {resume} target = "_blank" rel="noopener noreferrer">resume</a> to see more about my work experiences.
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