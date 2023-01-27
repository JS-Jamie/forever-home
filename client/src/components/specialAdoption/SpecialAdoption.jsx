import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './specialAdoption.css';

const SpecialAdoption = () => {
  return (
    <Container>
      <Carousel fade>
        <Carousel.Item className='carouselItem'>
          <img
            className='d-block w-100 image'
            src='https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
            alt='First slide'
          />
          <Carousel.Caption>
            <h2>Max</h2>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carouselItem'>
          <img
            className='d-block w-100 image'
            src='https://images.unsplash.com/photo-1565353919366-554312dd0e86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3RyYXl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
            alt='Second slide'
          />

          <Carousel.Caption>
            <h2>Bella</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carouselItem'>
          <img
            className='d-block w-100 imageCat'
            src='https://images.unsplash.com/photo-1414638298765-18200405ba2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHN0cmF5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
            alt='Third slide'
          />

          <Carousel.Caption style={{ color: 'black' }}>
            <h2>Chai</h2>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default SpecialAdoption;
