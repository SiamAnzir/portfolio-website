import React from "react";
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import {allTestimonials} from "../store/store";

const Testimonials = () => {
  return(
      <section id="testimonials">
          <Container className="col-lg-8 col-md-10 mx-auto mt-5">
              <div className="text-center">
                  <h2> Client Testimonials </h2>
              </div>
              <div className="mt-5">
                  <Row>
                      {
                          allTestimonials.map((testimonial) => (
                              <Col key={testimonial.id}>
                                  <Card className="p-3" border="info" style={{width:'400px',height:'200px',background:'#323232',color:'white'}}>
                                      <blockquote className="blockquote mb-0 card-body">
                                          <p>
                                              {testimonial.quote}
                                          </p>
                                          <footer className="text-end blockquote-footer" style={{paddingTop:'.7rem'}}>
                                              <Image src={testimonial.image} style={{height:'50px',width:'55px',marginLeft:'.3rem'}} roundedCircle/>
                                              <small style={{marginLeft:'.5rem'}}>
                                                  {testimonial.name}
                                              </small>
                                          </footer>
                                      </blockquote>
                                  </Card>
                                  <br/>
                              </Col>
                          ))
                      }
                  </Row>
              </div>
              <br/>
          </Container>
      </section>
  )
};

export default Testimonials;