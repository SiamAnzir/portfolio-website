import React from "react";
import {Container,Row,Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCodepen,
    faFacebook,
    faGithub,
    faGitlab,
    faInstagram,
    faLinkedin,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return(
        <section className="footer">
            <hr/>
            <Container className="col-lg-10 col-md-10 mx-auto">
                <br/>
                <Row>
                    <Col className="text-start" lg={4} md={4} sm={4}>
                        <p className="text-muted">Connect with me through ~ </p>
                        <p>
                            <a style={{ marginLeft: '.5rem' }} href="https://www.facebook.com/md.siamanzir/"><FontAwesomeIcon icon={faFacebook} size="2x" color="black" /></a>
                            <a style={{ marginLeft: '.5rem' }} href="https://www.instagram.com/md_siam_anzir/?hl=en"><FontAwesomeIcon icon={faInstagram} size="2x" color="black"  /></a>
                            <a style={{ marginLeft: '.5rem' }} href="https://www.linkedin.com/in/mohammed-siam-anzir-087005203/"><FontAwesomeIcon icon={faLinkedin} size="2x" color="black" /></a>
                            <a style={{ marginLeft: '.5rem' }} href="https://www.twitter.com/"><FontAwesomeIcon icon={faTwitter} size="2x" color="black" /></a>
                        </p>
                    </Col>
                    <Col className="text-center" lg={4} md={4} sm={4}>
                        <br/>
                        <p><a href="https://github.com/SiamAnzir/react-blogsite"><FontAwesomeIcon icon={faGithub}/> Source Code </a></p>
                    </Col>
                    <Col className="text-end" lg={4} md={4} sm={4}>
                        <p className="text-muted">Show my other projects on ~ </p>
                        <p>
                            <a style={{ marginLeft: '.5rem' }} href="https://github.com/SiamAnzir"><FontAwesomeIcon icon={faGithub} size="2x" color="black"/></a>
                            <a style={{ marginLeft: '.5rem' }} href="https://codepen.io/Siam28"><FontAwesomeIcon icon={faCodepen} size="2x" color="black"/></a>
                            <a style={{ marginLeft: '.5rem' }} href="https://gitlab.com/SiamAnzir"><FontAwesomeIcon icon={faGitlab} size="2x" color="black"/></a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default Footer;