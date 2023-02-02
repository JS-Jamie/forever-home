import React from 'react';
import './aboutUs.css';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const AboutUs = () => {
  return (
    <Container className='aboutUsSection'>
      <div className='aboutUsTextSection'>
        <h1 className='aboutUsText'>We need your help to</h1>
        <h1 className='aboutUsText'>find forever homes for our animals.</h1>
      </div>
      <div>
        <Button href='/aboutus' className='button' variant='info'>
          ABOUT US
        </Button>{' '}
      </div>
    </Container>
  );
};

export default AboutUs;
