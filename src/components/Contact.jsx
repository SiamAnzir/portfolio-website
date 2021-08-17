import React from "react";
import {Container, Row, Col, Form, Button, Card} from "react-bootstrap";
import location from "../assets/location.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faEnvelopeOpen, faMapMarkerAlt, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    const handleSubmit = () => {
        alert("Message Send Successfully");
    }
    return(
        <section id="contact" className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 mx-auto">
            <Container className="mt-3">
                <Row className="pt-2">
                    <Col className="justify-content-start">
                        <Card border="dark" className="mapImage" style={{ backgroundImage: `url(${location})` }}>
                            <Card border="primary" className="addressCard" style={{background:'#323232',color:'white'}}>
                                <Card.Body>
                                    <Row>
                                        <Col lg={6} md={6} sm={12}>
                                            <Card.Text><FontAwesomeIcon icon={faMapMarkerAlt} style={{marginRight:'.3rem'}} color="red"/> Location:  H-315,Road - 8/a (new) 15 no. (old),  Dhanmondi, Dhaka.</Card.Text>
                                        </Col>
                                        <Col lg={6} md={6} sm={12}>
                                            <Card.Text><FontAwesomeIcon icon={faPhoneAlt} style={{marginRight:'.3rem'}} color="green"/> Cell : 01620304621 </Card.Text>
                                            <Card.Text><FontAwesomeIcon icon={faEnvelope} style={{marginRight:'.3rem'}} color="blue"/> siamanzir18@gmail.com</Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Card>
                    </Col>
                    <br/>
                    <Col className="justify-content-start" xl={4} lg={12} md={12} sm={12}>
                        <h1> <FontAwesomeIcon icon={faEnvelopeOpen}/> Contact </h1>
                        <p className="leading-relaxed mb-5">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                            suscipit officia aspernatur veritatis. Asperiores, aliquid?
                        </p>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control required type="text" placeholder="Type your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control required type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control required type="text" as="textarea" rows={3} />
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <Button type="submit"> Submit </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
                <br/>
            </Container>
        </section>
    )
};

export default Contact;
