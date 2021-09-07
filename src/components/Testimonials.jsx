import React from "react";
import {Container, Image,Carousel} from "react-bootstrap";
import {allTestimonials} from "../store/store";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCertificate} from "@fortawesome/free-solid-svg-icons";
import slideImg from "../assets/blackImage.png";

const Testimonials = () => {
  return(
      <section id="testimonials" className="mt-5">
          <br/>
          <Container>
              <div className="text-center">
                  <h2> <FontAwesomeIcon icon={faCertificate}/> <u> Client Testimonials </u></h2>
              </div>
              <div className="col-xxl-8 col-xl-9 col-lg-12 col-md-12 mx-auto mt-5">
                  <Carousel variant="light">
                      {
                          allTestimonials.map((testimonial) => (
                              <Carousel.Item key={testimonial.id} interval={2000}>
                                  <img
                                      className="d-block w-100"
                                      src={slideImg}
                                      alt={testimonial.alt}
                                      height={250}
                                      width={500}
                                  />
                                  <Carousel.Caption>
                                      <blockquote className="blockquote mb-0 card-body">
                                          <p>
                                              {testimonial.quote}
                                          </p>
                                          <footer className="text-end blockquote-footer" style={{paddingTop:'.7rem'}}>
                                              <Image src={testimonial.image} style={{height:'60px',width:'65px',marginLeft:'.3rem'}} roundedCircle/>
                                              <small style={{marginLeft:'.7rem',fontSize:'18px'}}>
                                                  {testimonial.name}
                                              </small>
                                          </footer>
                                      </blockquote>
                                  </Carousel.Caption>
                              </Carousel.Item>
                          ))
                      }
                  </Carousel>
              </div>
              <br/>
          </Container>
          <br/>
      </section>
  )
};

export default Testimonials;