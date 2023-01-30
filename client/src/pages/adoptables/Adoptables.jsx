import React from 'react';
import './adoptables.css';
import { Container, Row, Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Pagination from 'react-bootstrap/Pagination';
import Card from 'react-bootstrap/Card';
import NavbarInHeader from '../../components/navbar/Navbar';

const Adoptables = () => {
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  const paginationBasic = (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );

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
                <Dropdown>
                  <Dropdown.Toggle variant='light' id='dropdown-basic'>
                    Any
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href='/dogs'>
                      <input type='checkbox' /> Dog
                    </Dropdown.Item>
                    <Dropdown.Item href='/cats'>
                      <input type='checkbox' /> Cat
                    </Dropdown.Item>
                    <Dropdown.Item href='/others'>
                      <input type='checkbox' /> Other
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col>
                <h3>Sex</h3>
                <Dropdown>
                  <Dropdown.Toggle variant='light' id='dropdown-basic'>
                    Any
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href='#/action-1'>
                      <input type='checkbox' /> Male
                    </Dropdown.Item>
                    <Dropdown.Item href='#/action-2'>
                      <input type='checkbox' /> Female
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col>
                <h3>Age</h3>
                <Dropdown>
                  <Dropdown.Toggle variant='light' id='dropdown-basic'>
                    Any
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href='#/action-1'>
                      <input type='checkbox' /> Senior
                    </Dropdown.Item>
                    <Dropdown.Item href='#/action-2'>
                      <input type='checkbox' /> Adult
                    </Dropdown.Item>
                    <Dropdown.Item href='#/action-3'>
                      <input type='checkbox' /> Young
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </div>
          {paginationBasic}
          <div className='photoCards'>
            <Row xs={1} sm={2} md={3} lg={4} className='g-4'>
              {Array.from({ length: 12 }).map((_, idx) => (
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
              ))}
            </Row>
          </div>
          {paginationBasic}
        </div>
      </Container>
    </>
  );
};

export default Adoptables;
