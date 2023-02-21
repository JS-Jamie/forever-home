import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../components/footer/Footer';
import Info from '../../components/info/Info';
import NavbarInHeader from '../../components/navbar/Navbar';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import AdoptionFees from '../../components/adoptionFees/AdoptionFees';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const [animal, setAnimal] = useState({});

  const params = useParams();

  const getAnimal = async () => {
    const res = await axios.get(`/api/animals/${params.animalId}`);

    setAnimal(res.data);
  };

  useEffect(() => {
    getAnimal();
  }, [params.animalId]);

  return (
    <>
      <NavbarInHeader />
      <Container>
        <div
          style={{ height: '200px', backgroundColor: '#b6e8fa' }}
          className='mb-4 d-flex justify-content-center align-items-center'
        >
          <h1 className='text-center' style={{ fontSize: '50px' }}>
            {animal.name}
            <br />
            <span style={{ fontSize: '20px' }}>
              {animal.breed} / {animal.sex} / {animal.age}
            </span>
          </h1>
        </div>
        <div className='d-flex flex-row mb-5'>
          <Image
            style={{ width: '50vw', height: '50vh' }}
            rounded={true}
            src={animal.image}
          />{' '}
          <Card className='w-auto'>
            <Card.Body>
              <h2>{animal.name}'s Story</h2>
              <p>{animal.description}</p>
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
