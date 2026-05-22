import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import './Navbar.css'; // Import custom CSS for styling

const EdukaNavbar = () => {
  return (
    <Navbar expand="lg" className="eduka-navbar">
      <Container>
        <Navbar.Brand href="#home">
          {/* Replace with your logo image */}
          <img
            src="logo.png" // Adjust this path to your logo
            alt="Eduka Logo"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto"> {/* mx-auto to center the main nav items */}
            <NavDropdown title="Home" id="home-dropdown" className="custom-dropdown">
              <NavDropdown.Item href="#home1">Home Page 01</NavDropdown.Item>
              <NavDropdown.Item href="#home2">Home Page 02</NavDropdown.Item>
              <NavDropdown.Item href="#home3">Home Page 03</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Courses" id="courses-dropdown" className="custom-dropdown">
              <NavDropdown.Item href="#course1">Course 01</NavDropdown.Item>
              <NavDropdown.Item href="#course2">Course 02</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Academics" id="academics-dropdown" className="custom-dropdown">
              <NavDropdown.Item href="#academic1">Academic Item 01</NavDropdown.Item>
              <NavDropdown.Item href="#academic2">Academic Item 02</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pages" id="pages-dropdown" className="custom-dropdown">
              <NavDropdown.Item href="#page1">Page 01</NavDropdown.Item>
              <NavDropdown.Item href="#page2">Page 02</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Admissions" id="admissions-dropdown" className="custom-dropdown">
              <NavDropdown.Item href="#admission1">Admission Info</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-center">
            <Nav.Link href="#" className="me-3">
              <i className="bi bi-search"></i> {/* Assuming you have Bootstrap Icons */}
            </Nav.Link>
            <Button variant="warning" className="apply-button">APPLY NOW</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default EdukaNavbar;