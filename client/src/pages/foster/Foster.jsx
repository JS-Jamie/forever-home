import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Footer from '../../components/footer/Footer';
import Info from '../../components/info/Info';
import NavbarInHeader from '../../components/navbar/Navbar';

const Foster = () => {
  return (
    <>
      <NavbarInHeader />
      <Container>
        <div>
          <Card className='bg-dark text-white'>
            <Card.Img
              className='cardImg'
              src='https://images.unsplash.com/photo-1605484649538-98578113d4f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              alt='Cute dog on a couch'
            />
            <Card.ImgOverlay>
              <Card.Title>
                <h1 className='title'>Foster</h1>
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div>
          <h1 className='mt-5 mb-4 text-center'>Become Foster Parents</h1>
          <p className='mb-5 text-center'>
            Fostering is a wonderful opportunity to volunteer together as a
            family or care for a pet without a long-term adoption commitment.
          </p>
          <p>We provide:</p>
          <ul>
            <li>Support</li>
            <li>Support</li>
            <li>Support</li>
          </ul>{' '}
        </div>
      </Container>
      <Info />
      <Footer />
    </>
  );
};

export default Foster;
