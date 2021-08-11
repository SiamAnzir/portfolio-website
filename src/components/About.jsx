import React from "react";
import {Col, Container, Row, Button, Image} from "react-bootstrap";
import final from "../assets/sureFinal.jpg";


const About = () => {
    return(
        <section id="about">
            <Container className="mt-3">
                <Row className="pt-2">
                    <Col className="justify-content-start" lg={6} md={6} sm={12}>
                        <Image alt="portfolio" src={final} width={400} height={350} roundedCircle/>
                    </Col>
                    <Col className="justify-content-start" lg={6} md={6} sm={6}>
                        <br/>
                        <br/>
                        <h1>
                            Hi, I'm Siam.
                        </h1>
                        <h2>I love to build amazing web apps.</h2>
                        <p className="mb-8 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                            Laborum, voluptas natus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                            Laborum, voluptas natus?
                        </p>
                        <Button variant="outline-primary" style={{marginRight:".5rem"}}>Work With Me</Button>
                        <Button variant="outline-primary" href="#projects"> See My Past Works </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default About;