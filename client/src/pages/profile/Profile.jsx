import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../components/footer/Footer';
import Info from '../../components/info/Info';
import NavbarInHeader from '../../components/navbar/Navbar';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import AdoptionFees from '../../components/adoptionFees/AdoptionFees';

const Profile = () => {
  return (
    <>
      <NavbarInHeader />
      <Container>
        <div
          style={{ height: '200px', backgroundColor: '#b6e8fa' }}
          className='mb-4 d-flex justify-content-center align-items-center'
        >
          <h1 className='text-center' style={{ fontSize: '50px' }}>
            Bella
            <br />
            <span style={{ fontSize: '20px' }}>Chihuahua / Female / Young</span>
          </h1>
        </div>
        <div className='d-flex flex-row mb-5'>
          <Image
            style={{ width: '50vw' }}
            rounded={true}
            src='https://images.unsplash.com/photo-1565353919366-554312dd0e86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
          />{' '}
          <Card className='w-auto'>
            <Card.Body>
              <p>Description</p>
            </Card.Body>
          </Card>
        </div>

        <div>
          <AdoptionFees />
        </div>
      </Container>
      <Info />
      <Footer />
    </>
  );
};

export default Profile;
