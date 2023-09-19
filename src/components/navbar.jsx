import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../components/images/logo.png';
import './navbar.css';
//import NavDropdown from "react-bootstrap/NavDropdown";

function navbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary ">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt='' width={60}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
    
          </Nav>
          <Nav>
            <Nav.Link href="#homeOpen" id="links">Home</Nav.Link>
            <Nav.Link href="#about" id="links">About</Nav.Link>
            <Nav.Link href="#educationHeading" id="links">Education</Nav.Link>
            <Nav.Link href="#experiences" id="links">Experience</Nav.Link>
            <Nav.Link href="#skillsStart" id="links">Skills</Nav.Link>
            <Nav.Link href="#projects" id="links">Projects</Nav.Link>
            <Nav.Link href="#contactMe" id="links">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;
