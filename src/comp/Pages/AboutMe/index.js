import React from "react"
import { Jumbotron, Row, Col } from 'reactstrap';
import './style.css';
import skills from "../../Info/skills.js";

class About extends React.Component {

  state = {
    skills
  };

  render() {
    return (
      
    <div className="main">
      <Jumbotron className="m-3 text-center hello">
        <h1 className="display-4">Hello, I'm Michelle Jordan</h1>
        <p className="lead">I am a full-stack web developer.</p>
        <hr className="my-4" />
        <Row className="justify-content-center">
          <Col>
            <p className="">I received my Certification for Full Stack Web Development from University of North Carolina Charlotte. I am passionate about creating impactful and responsive web applications to enhance user experiences. I have strong project and people management skills, the ability to take the initiative. I'm excited to leverage my Web Development skills and background in Design to offer unique perspectives and collaborations on how end users interact with web applications.</p>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row className="justify-content-center">
          <Col xs="8">
            <p className="font-weight-bold">Technical Skills</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {this.state.skills.map(skill => (
            <Col>
              <img className="skillsLogo" src={skill.src} alt="Logo"/>
              <hr className="my-2" />
              <p>{skill.skill}</p>
            </Col>
          ))}
        </Row>
      </Jumbotron>
    </div>
    
    );
  }

};

export default About;