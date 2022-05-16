
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from 'react-bootstrap';
import './navbar.css';
import './body.css';
 

function Bodyfunc() {
    return (
        <div className='design'>
            <div className='row'>
                <div className='col-6'>
                    <div className='imagebody'>
                    </div>
                    <img src={require('../assets/segun.jpg')}  alt="fireSpot" className='editpic'/>
                </div>
                <div className='col-6'>
                    <h1 className='contentdown'> About Me and What i Do</h1>
                    <span> I am a full stack developer with over five years experience in software 
                        engineering with skills spanning across both front end and back end. I have 
                        worked in corporate environments and also as a freelance agent and i am currently 
                        working freelance. </span>

                </div>

            </div>
            
            
        </div>
        
    );

}

export default Bodyfunc
