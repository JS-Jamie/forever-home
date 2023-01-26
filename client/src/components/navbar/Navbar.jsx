import React from 'react';
import './navbar.css';

const Navbar = () => {
  const logoImg = require('../../img/foreverHomeLogo-removebg-preview.png');

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
          <img src={logoImg} className='logoImage' />
          <h1 className='foreverHomeText'>Forever Home</h1>
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarColor03'
          aria-controls='navbarColor03'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarColor03'>
          <ul className='navbar-nav ms-auto'>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                <span className='menu'>About Us</span>
              </a>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                data-bs-toggle='dropdown'
                href='#'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <span className='menu'>Adopt</span>
              </a>
              <div className='dropdown-menu'>
                <a className='dropdown-item' href='#'>
                  Adoptable Animals
                </a>
                <a className='dropdown-item' href='#'>
                  Adoption Process
                </a>
                <a className='dropdown-item' href='#'>
                  Adoption Success Stories
                </a>
              </div>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                data-bs-toggle='dropdown'
                href='#'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <span className='menu'>Get Involved</span>
              </a>
              <div className='dropdown-menu'>
                <a className='dropdown-item' href='#'>
                  Volunteer
                </a>
                <a className='dropdown-item' href='#'>
                  Foster Animals
                </a>
              </div>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                data-bs-toggle='dropdown'
                href='#'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <span className='menu'>Donate</span>
              </a>
              <div className='dropdown-menu'>
                <a className='dropdown-item' href='#'>
                  Donate Items
                </a>
                <a className='dropdown-item' href='#'>
                  Financial Donation
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
