
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from 'react-bootstrap';
import './navbar.css'
import { Link } from 'react-router';



function Navbars() {
  return (
    <Navbar  expand="lg" className='navbarcolour'>
    <Container className='navtext'>
      <Navbar.Brand href="#home" id='navtexttts'>Aroyehun's Profile</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav  className='navtext'  >
          <Nav.Link href="#home" className='spacenav' id='navtexttts' >Home</Nav.Link>
          <Nav.Link href="#Portfolio" className='otherspacenave' id='navtexttts'>Portfolio</Nav.Link>
          <Nav.Link href="#link" className='otherspacenave' id='navtexttts'>Contact Me</Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Navbars
