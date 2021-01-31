import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


export default function App() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <div className="container">
      <Navbar.Brand href="Home" >Academix</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto ">
          <Nav.Link href="">Pricing</Nav.Link>
          &nbsp; &nbsp;
          <Nav.Link href="">About</Nav.Link>
          &nbsp; &nbsp;
          <Nav.Link href="">Contact</Nav.Link>
          &nbsp; &nbsp;
          &nbsp; &nbsp;
        </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>
    </>
  );
}