import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from 'react-bootstrap';
import './navbar.css'
import './footer.css'



function Footernav(){
    return(
        <div className='footerdesign' >
           <span className='copyr'>copyright 2022</span>
           <span className='copyr'>Developed by : Aroyehun Oluwasegun</span>
        </div>
    )
}

export default Footernav