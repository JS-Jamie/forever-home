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
        <Navbar.Brand href='#home'>
          <img src={logoImg} className='logoImage' />
          <span className='foreverHomeText'>Forever Home</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <NavDropdown title='ADOPT' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='GET INVOLVED' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='DONATE' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>
                Donate Items
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>
                Financial Donation
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

  // return (
  //   <nav className='navbar navbar-expand-lg navbar-light bg-light'>
  //     <div className='container-fluid'>
  //       <a className='navbar-brand' href='/'>
  //         <img src={logoImg} className='logoImage' />
  //         <h1 className='foreverHomeText'>Forever Home</h1>
  //       </a>
  //       <button
  //         className='navbar-toggler'
  //         type='button'
  //         data-bs-toggle='collapse'
  //         data-bs-target='#navbarColor03'
  //         aria-controls='navbarColor03'
  //         aria-expanded='false'
  //         aria-label='Toggle navigation'
  //       >
  //         <span className='navbar-toggler-icon'></span>
  //       </button>
  //       <div className='collapse navbar-collapse' id='navbarColor03'>
  //         <ul className='navbar-nav ms-auto'>
  //           <li className='nav-item'>
  //             <a className='nav-link' href='#'>
  //               <span className='menu'>About Us</span>
  //             </a>
  //           </li>
  //           <li className='nav-item dropdown'>
  //             <a
  //               className='nav-link dropdown-toggle'
  //               data-bs-toggle='dropdown'
  //               href='#'
  //               role='button'
  //               aria-haspopup='true'
  //               aria-expanded='false'
  //             >
  //               <span className='menu'>Adopt</span>
  //             </a>
  //             <div className='dropdown-menu'>
  //               <a className='dropdown-item' href='#'>
  //                 Adoptable Animals
  //               </a>
  //               <a className='dropdown-item' href='#'>
  //                 Adoption Process
  //               </a>
  //               <a className='dropdown-item' href='#'>
  //                 Adoption Success Stories
  //               </a>
  //             </div>
  //           </li>
  //           <li className='nav-item dropdown'>
  //             <a
  //               className='nav-link dropdown-toggle'
  //               data-bs-toggle='dropdown'
  //               href='#'
  //               role='button'
  //               aria-haspopup='true'
  //               aria-expanded='false'
  //             >
  //               <span className='menu'>Get Involved</span>
  //             </a>
  //             <div className='dropdown-menu'>
  //               <a className='dropdown-item' href='#'>
  //                 Volunteer
  //               </a>
  //               <a className='dropdown-item' href='#'>
  //                 Foster Animals
  //               </a>
  //             </div>
  //           </li>
  //           <li className='nav-item dropdown'>
  //             <a
  //               className='nav-link dropdown-toggle'
  //               data-bs-toggle='dropdown'
  //               href='#'
  //               role='button'
  //               aria-haspopup='true'
  //               aria-expanded='false'
  //             >
  //               <span className='menu'>Donate</span>
  //             </a>
  //             <div className='dropdown-menu'>
  //               <a className='dropdown-item' href='#'>
  //                 Donate Items
  //               </a>
  //               <a className='dropdown-item' href='#'>
  //                 Financial Donation
  //               </a>
  //             </div>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </nav>
  // );
};

export default NavbarInHeader;
