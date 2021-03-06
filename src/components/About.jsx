import React from "react";
import {Col, Container, Row, Button, Image, Card} from "react-bootstrap";
import ProfilePic from "../assets/ProfilePic.jpg";
import emoji from "../assets/emoji.png";
import Resume from "../assets/File/Mohammed Siam Anzir.pdf";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {
    faDownload,
    faEnvelopeOpenText,
    faTasks
} from "@fortawesome/free-solid-svg-icons";


const About = () => {
    return(
        <section id="about">
            <br/>
            <br/>
            <Container className="aboutCard">
                <div>
                    <Row className="pt-2">
                        <Col className="justify-content-start" xl={4} lg={5} md={12} sm={12}>
                            <div style={{paddingTop:'2rem',paddingBottom:'1.5rem'}} >
                                <Image alt="portfolio" src={ProfilePic} width={250} height={250} loading="lazy" roundedCircle/>
                            </div>
                            <div style={{minHeight:'200px',position:'relative'}}>
                                <Col md={6} sm={6} xs={6}>
                                    <Button variant="outline-dark" className="linkCard" href="https://github.com/SiamAnzir" style={{textAlign:'center'}}><FontAwesomeIcon icon={faGithub} style={{marginRight:'.5rem'}}/> Github </Button>
                                    <Button variant="outline-dark" className="linkCard" href="https://www.linkedin.com/in/mohammed-siam-anzir-087005203/" style={{textAlign:'center'}}><FontAwesomeIcon icon={faLinkedin} style={{marginRight:'.5rem'}}/> Linkedin </Button>
                                    <Button variant="outline-dark" className="linkCard" href="https://www.facebook.com/md.siamanzir/" style={{textAlign:'center'}}><FontAwesomeIcon icon={faFacebook} style={{marginRight:'.5rem'}}/> Facebook </Button>
                                    <Button variant="outline-dark" className="linkCard" href="https://www.instagram.com/md_siam_anzir/?hl=en" style={{textAlign:'center'}}><FontAwesomeIcon icon={faInstagram} style={{marginRight:'.5rem'}}/> Instagram </Button>
                                </Col>
                            </div>
                        </Col>
                        <Col className="justify-content-start" xl={8} lg={7} md={12} sm={12}>
                            <br/>
                            <Card border="light">
                                <Card.Body>
                                    <Card.Title style={{marginBottom:'3.5rem'}}>
                                        <h1>
                                            Hi, I'm Siam. <Image src={emoji} alt='emoji' height={50} width={50} roundedCircle/>
                                        </h1>
                                        <h2>I love to build amazing web apps.</h2>
                                    </Card.Title>
                                    <Card.Text className="mb-8 leading-relaxed" style={{minHeight:'185px'}}>
                                        It was really hard to carry motivation as a self-taught programmer. But love for coding, taking on new challenges and solving problems always push me up to my next milestone.
                                        <br/>
                                        Currently, I am working on React.js. Before that, I worked on HTML,CSS, JavaScript & Jquery and did some cool projects with that.
                                        <br/>
                                        As a self-taught developer and quick learner, I can easily cope up with any new tech stack to get the work done and take business to next level. I always have a soft corner for contributing to the tech community.
                                    </Card.Text>
                                    <div style={{paddingTop:'4rem'}}>
                                        <Row>
                                            <Col xl={4} lg={4} md={4} sm={12}>
                                                <Button variant="outline-primary" href="#contact" className="responsiveBtn"><FontAwesomeIcon icon={faEnvelopeOpenText} style={{marginRight:'.5rem'}}/> Work With Me</Button>
                                            </Col>
                                            <Col xl={4} lg={4} md={4} sm={12}>
                                                <Button variant="outline-primary" href="#projects" className="responsiveBtn"><FontAwesomeIcon icon={faTasks} style={{marginRight:'.5rem'}}/>See My Past Works</Button>
                                            </Col>
                                            <Col xl={4} lg={4} md={4} sm={12}>
                                                <Button variant="outline-primary" className="responsiveBtn" href={Resume} download="Mohammed_Siam_Anzir.pdf">
                                                    <FontAwesomeIcon icon={faDownload} style={{marginRight:'.5rem'}}/>
                                                     Download Resume
                                                </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
};

export default About;