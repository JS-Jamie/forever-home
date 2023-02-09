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
        <div>profile</div>
        <div className='d-flex flex-row mb-5'>
          <Image
            style={{ width: '50vw' }}
            rounded={true}
            src='https://images.unsplash.com/photo-1565353919366-554312dd0e86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
          />{' '}
          <Card className='w-auto'>
            <Card.Body>
              <p>
                Sixteen-week-old Bella is a very sweet girl who has lots of love
                to share!
              </p>
              <p>
                Her favorite activities are playing fetch and rolling around in
                your lap for cuddles! She currently weighs 5 pounds.
              </p>
              <p>
                Bella’s adopter must be at least 18 years old with valid
                state-issued identification.
              </p>
              <p>
                Forever Home encourages family members to participate in the
                adoption process, especially children and family dogs.
              </p>
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
