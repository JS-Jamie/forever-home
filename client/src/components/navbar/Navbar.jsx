import React from 'react';
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarInHeader = () => {
  const logoImg = require('../../img/foreverHomeLogo-removebg-preview.png');

  return (
    <Navbar expand='lg'>
      <Container>
        <Navbar.Brand>
          <img src={logoImg} className='logoImage' href='/' />
          <span className='foreverHomeText'>
            <a href='/' style={{ textDecoration: 'none', color: 'black' }}>
              Forever Home
            </a>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto menus'>
            <Nav.Link className='menu' href='/aboutus'>
              ABOUT US
            </Nav.Link>
            <NavDropdown className='menu' title='ADOPT' id='basic-nav-dropdown'>
              <NavDropdown.Item className='menu' href='/adoptables'>
                Adoptable Animals
              </NavDropdown.Item>
              <NavDropdown.Item className='menu' href='/adoptionprocess'>
                Adoption Process
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className='menu'
              title='GET INVOLVED'
              id='basic-nav-dropdown'
            >
              <NavDropdown.Item className='menu' href='/volunteer'>
                Volunteer
              </NavDropdown.Item>
              <NavDropdown.Item className='menu' href='/foster'>
                Foster an Animal
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='menu' href='/donate'>
              DONATE
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarInHeader;
