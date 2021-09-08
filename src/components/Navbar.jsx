import React from "react";
import {Container, Nav, Navbar, NavItem} from "react-bootstrap";

const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
                <Nav className="navbar-brand">
                    <div className="border rounded">
                        <Nav.Link href="#about" className="text-white text-decoration-none">
                            Moahmmed Siam Anzir
                        </Nav.Link>
                    </div>
                </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <NavItem> <Nav.Link href="#projects" className="text-white text-decoration-none"> Projects  </Nav.Link> </NavItem>
                        <NavItem> <Nav.Link href="#skills" className="text-white text-decoration-none"> Skills  </Nav.Link> </NavItem>
                        <NavItem> <Nav.Link href="#testimonials" className="text-white text-decoration-none"> Testimonials  </Nav.Link> </NavItem>
                        <NavItem> <Nav.Link href="#contact" className="text-white text-decoration-none"> Contact  </Nav.Link> </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;