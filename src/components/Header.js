import React from "react";
import {Link} from "react-scroll";
import { Container, Navbar, Nav, Button} from "react-bootstrap";
const Header = () => {
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Container className="Navbar-color" fluid>
      <Navbar.Brand className="brand">
            <img
              alt=""
              src="https://i.pinimg.com/originals/39/96/57/39965743eb30634afdc5906133e19740.png"
              width="70"
            />{' '}
            CHEF FOOD
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto Nav"
            style={{ maxHeight: '250px' }}
            navbarScroll
          >
            <Nav.Link href="#home">
            <Link className="Nav-Link" to="home" spy={true} smooth={true} offset={-90} duration={500} style={{color:"black",textDecoration:'none'}}>Home</Link>
            </Nav.Link>
            <Nav.Link >
              <Link className="Nav-Link"activeClass="active" to="about" spy={true} smooth={true} offset={-80} duration={500} style={{textDecoration:'none'}}>About</Link>
            </Nav.Link>
            <Nav.Link >
            <Link className="Nav-Link"activeClass="active" to="food" spy={true} smooth={true} offset={-80} duration={500} style={{textDecoration:'none'}}>Food</Link>
            </Nav.Link>
          </Nav>
          <Button className="button"> <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-80} duration={500} style={{textDecoration:'none'}}>Contact Us</Link></Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>    
  );
};

export default Header;
