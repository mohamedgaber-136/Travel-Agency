import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './Navbar.css'
export const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="md" className="bg-body-tertiary navbarParent p-2 ">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav " className="p-1 ">
        <i class="fa-solid fa-circle-chevron-down NavbarButton"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="m-auto ">
            <Nav.Link className="text-dark" ><i class="fa-solid fa-plane px-1"></i>Find Flights</Nav.Link>
            <Nav.Link  className="text-dark"><i class="fa-solid fa-couch px-1"></i>Find Stays</Nav.Link>
    
          </Nav>
          <Nav>
            <Nav.Link  className="text-dark FavouriteBorder" ><i class="fa-solid fa-heart px-1"></i>Favourites</Nav.Link>
            <Nav.Link  className="text-dark" eventKey={2} >
              john D.
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
