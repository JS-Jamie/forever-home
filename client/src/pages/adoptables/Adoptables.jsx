import React, { useState, useEffect } from 'react';
import './adoptables.css';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';
import Card from 'react-bootstrap/Card';
import NavbarInHeader from '../../components/navbar/Navbar';
import { animals } from '../../animalsData';

const Adoptables = () => {
  const [animalsList, setAnimalsList] = useState([]);
  const [speciesValue, setSpeciesValue] = useState('Any');
  const [active, setActive] = useState(1);

  useEffect(() => {
    if (speciesValue === 'Any') {
      setAnimalsList(animals);
    } else {
      const animalsListCopy = [...animals];
      const filteredResult = animalsListCopy.filter((animal) => {
        return animal.species === speciesValue;
      });

      setAnimalsList(filteredResult);
    }
  }, [speciesValue]);

  let items = [];
  const handlePagination = (e) => {
    setActive(Number(e.target.innerText));
  };
  for (let i = 1; i <= Math.ceil(animalsList.length / 12); i++) {
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
            <a href='/applicationprocess'>adoption process.</a>
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
              {animalsList.map((animal) => (
                <Col key={animal.name}>
                  <Card>
                    <Card.Img variant='top' src={animal.photo} />
                    <Card.Body>
                      <Card.Title>{animal.name}</Card.Title>
                      <Card.Text>{animal.sex}</Card.Text>
                      <Card.Text>{animal.age}</Card.Text>
                      <Card.Text>{animal.species}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}

              {/* {Array.from({ length: 12 }).map((_, idx) => (
                <Col>
                  <Card>
                    <Card.Img
                      variant='top'
                      src='https://images.unsplash.com/photo-1607028649151-cd1fd5291120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHN0cmF5fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                    />
                    <Card.Body>
                      <Card.Title>Pet Name</Card.Title>
                      <Card.Text>Description</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))} */}
            </Row>
          </div>
          {paginationBasic}
        </div>
      </Container>
    </>
  );
};

export default Adoptables;
