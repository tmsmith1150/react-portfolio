import React from "react";
import {
    Card, Button, CardHeader, CardBody,
    CardTitle, Row, Col, NavLink
} from 'reactstrap';
import emailIcon from "../../Pictures/email-logo.png";
import githubIcon from "../../Pictures/github-logo.png";
import linkedInIcon from "../../Pictures/linkedin-logo.png";
import headshot from "../../Pictures/selfie.jpeg";
// import resume from "../../Pictures/Web-Dev-Resume.doc"
import "./style.css";
import MediaQuery, { useMediaQuery } from 'react-responsive';

const Contact = (props) => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1024px)'
    });

    const isTabletOrPhone = useMediaQuery({
        query: '(max-device-width: 1023px)'
    });

    return (
        <div>    
            {isDesktopOrLaptop && <>
                <h3 className="m-5 text-center">Contact Information</h3>
                <hr className="my-4" />
                <Row className="d-flex justify-content-center">
                    <Card className="w-50 mt-3 contact">
                        <CardHeader tag="h3" >
                            <Row>
                                <Col className="ml-4">
                                    Michelle Jordan
                                </Col>
                                
                                {/* <Button className="mr-5" href={resume} target="_blank">Resume</Button> */}
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col xs="5"><img className="headshot shadow bg-white rounded mt-3" src={headshot} alt="Headshot"/></Col>
                                <Col className="text-Left m-3">
                                    <CardTitle className="lead text-center font-weight-bold">Full Stack Developer</CardTitle>
                                    <hr className="m-3" />
                                    <NavLink className="links" href="mailto:tmsmith1150@live.com"><img className="logo" src={emailIcon} alt="Logo"/> : Michelle Jordan</NavLink>
                                    <NavLink className="links" href="https://www.linkedin.com/in/michelle-jordan-6988maiden/"><img className="logo" src={linkedInIcon} alt="Logo"/> : Michelle Jordan</NavLink>
                                    <NavLink className="links" href="https://github.com/tmsmith1150"><img className="logo" src={githubIcon} alt="Logo"/> : tmsmith1150</NavLink>                
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Row>
                </>}
            {isTabletOrPhone && <>
                <h3 className="m-3 text-center">Contact Information</h3>
                <hr className="my-4" />
                <Row className="d-flex justify-content-center">
                    <Card className="m-3">
                        <CardHeader tag="h3" >
                            <Row className="justify-content-center">
                                Michelle Jordan
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Row className="justify-content-center"><img className="headshot shadow bg-white rounded mt-3" src={headshot} alt="Headshot"/></Row>
                            <Row className="justify-content-center mt-3">
                                <CardTitle className="lead font-weight-bold">Full-Stack Web Developer</CardTitle>
                            </Row>
                            <hr/>
                            <Row>
                                <Col className="text-center">
                                {/* <Button color="secondary" className="mr-5" href={resume} target="_blank">Resume</Button> */}
                                    
                                    <NavLink href="mailto:tmsmith1150@live.com"><img className="logo" src={emailIcon} alt="Logo"/> : Michelle Jordan</NavLink>
                                    <NavLink href="https://www.linkedin.com/in/michelle-jordan-6988maiden/"><img className="logo" src={linkedInIcon} alt="Logo"/> : Michelle Jordan</NavLink>
                                    <NavLink href="https://github.com/tmsmith1150"><img className="logo" src={githubIcon} alt="Logo"/> : tmsmith1150</NavLink>
                                </Col>                
                            </Row>
                        </CardBody>
                    </Card>
                </Row>
            </>}
        </div>
    );
}

export default Contact;