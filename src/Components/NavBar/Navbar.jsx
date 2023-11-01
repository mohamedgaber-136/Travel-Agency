import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import avatar from "../../assets/images/accountFlow/accountAvatar.png";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
export const NavigationBar = () => {
  let navigatation = useNavigate();
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className="bg-body-tertiary navbarParent p-2 "
    >
      <Container>
        <Navbar.Brand className='logoBrand' onClick={() => navigatation("/")}>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav " className="p-1 ">
          <i className="fa-solid fa-circle-chevron-down NavbarButton"></i>
        </Navbar.Toggle>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className=" flex-md-row flex-column align-items-center justify-content-center"
        >
          <Nav className="m-auto d-flex align-items-center ">
            <Nav.Link className="text-dark">
              <i className="fa-solid fa-plane px-1"></i>Find Flights
            </Nav.Link>
            <Nav.Link className="text-dark">
              <i className="fa-solid fa-couch px-1"></i>Find Stays
            </Nav.Link>
          </Nav>
          <Nav className="d-flex  align-items-center">
            <Nav.Link className="text-dark ">
              <i className="fa-solid fa-heart px-1"></i>Favourites
            </Nav.Link>
            <Nav.Link className="text-dark" eventKey={2} onClick={()=>navigatation('login')} >
              {/* <img
                src={avatar}
                width={"40px"}
                height={"40px"}
                alt="AvataLogo"
                style={{ objectFit: "cover" }}
              />
              <span> john D.</span> */}
             <span className="text-dark">Login</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

