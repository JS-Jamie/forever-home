import React, { useState, useEffect } from 'react';
import './adoptables.css';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';
import Card from 'react-bootstrap/Card';
import NavbarInHeader from '../../components/navbar/Navbar';
import { animals } from '../../animalsData';
import axios from 'axios';
import Info from '../../components/info/Info';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';

const Adoptables = () => {
  const [animalsList, setAnimalsList] = useState([]);
  const [speciesValue, setSpeciesValue] = useState('Any');
  const [active, setActive] = useState(1);

  const getAnimals = async () => {
    const res = await axios.get('/api/animals');
    setAnimalsList(res.data.animals);
  };

  useEffect(() => {
    if (speciesValue === 'Any') {
      getAnimals();
    } else {
      const animalsListCopy = [...animals];
      const filteredResult = animalsListCopy.filter((animal) => {
        return animal.species === speciesValue;
      });

      setAnimalsList(filteredResult);
    }
  }, [speciesValue]);

  const navigate = useNavigate();

  let items = [];
  const handlePagination = (e) => {
    setActive(Number(e.target.innerText));
  };
  for (let i = 1; i <= Math.ceil(animalsList?.length / 12); i++) {
    items.push(
      <Pagination.Item onClick={handlePagination} key={i} active={i === active}>
        {i}
      </Pagination.Item>
    );
  }

  const paginationBasic = (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );

  const handleClickSpecies = (e) => {
    setSpeciesValue(e.target.value);
  };

  const handleClick = () => {
    navigate('/profile');
  };

  return (
    <>
      <NavbarInHeader />
      <Container className='adoptablesContainer'>
        <div className='titleSection'>
          <h1>Adoptable Animals</h1>
          <p>
            Animals available for adoption are on this page which is updated
            every 30 minutes.
          </p>
          <p>
            Learn more about our{' '}
            <a href='/adoptionprocess'>adoption process.</a>
          </p>
        </div>
        <div className='animalListSection'>
          <div className='filterTools'>
            <Row>
              <Col>
                <h3>Species</h3>
                <Form.Select aria-label='Species' onChange={handleClickSpecies}>
                  <option value='Any'>Any</option>
                  <option value='Dog'>Dog</option>
                  <option value='Cat'>Cat</option>
                  <option value='Other'>Other</option>
                </Form.Select>
              </Col>
              <Col>
                <h3>Sex</h3>
                <Form.Select aria-label='Sex'>
                  <option value='Any'>Any</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                </Form.Select>
              </Col>
              <Col>
                <h3>Age</h3>
                <Form.Select aria-label='Sex'>
                  <option value='Any'>Any</option>
                  <option value='Senior'>Senior</option>
                  <option value='Adult'>Adult</option>
                  <option value='Young'>Young</option>
                </Form.Select>
              </Col>
            </Row>
          </div>
          {paginationBasic}
          <div className='photoCards'>
            <Row xs={1} sm={2} md={3} lg={4} className='g-4'>
              {animalsList?.map((animal) => (
                <Col key={animal.name}>
                  <Card onClick={handleClick} style={{ cursor: 'pointer' }}>
                    <Card.Img variant='top' src={animal.image} />
                    <Card.Body>
                      <Card.Title>{animal.name}</Card.Title>
                      <Card.Text>{animal.sex}</Card.Text>
                      <Card.Text>{animal.age}</Card.Text>
                      <Card.Text>{animal.species}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
          {paginationBasic}
        </div>
      </Container>
      <Info />
      <Footer />
    </>
  );
};

export default Adoptables;
