import React,{useState} from "react";
import {Container, Card, Row, Col, CardImg} from "react-bootstrap";
import {allProjects} from "../store/store";

const Projects = () => {
    const [isShown, setIsShown] = useState({active:false,id:""});
    const changeBackground = (id) => {
        setIsShown({active: true,id:id});

    }
    const initialBackground = (id) => {
        setIsShown({active: false,id:id});
    }
    return(
        <section id="projects" className="col-xxl-8 col-xl-9 col-lg-12 col-md-6 mx-auto mt-5">
            <Container>
                <div className="text-center">
                    <h2>Apps I've Made</h2>
                </div>
                <div className="pt-5">
                    <Row>
                        {
                            allProjects.map((project) => (
                                <Col key={project.id} >
                                    <div style={{height:"220px",width:"420px"}}>
                                        <div key={project.image} onMouseOver={() =>changeBackground(project.id)} onMouseLeave={() => initialBackground(project.id)}>
                                            {isShown.active && isShown.id === project.id ?
                                                (<Card border="primary" style={{background:"#323232",height:"220px",width:'420px',textAlign:'center',color:"white"}}>
                                                    <Card.Title style={{marginTop:'1rem'}}> {project.title} </Card.Title>
                                                    <Card.Body>{project.description}</Card.Body>
                                                    <Card.Footer>{project.subtitle}</Card.Footer>
                                                    <Card.Link href={project.link}> Project Link </Card.Link>
                                                </Card>) :
                                                (<Card border="primary">
                                                    <CardImg src={project.image} style={{height:"220px",width:"420px"}} alt="projectImg"/>
                                                </Card>)}
                                        </div>
                                    </div>
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
}

export default Projects;