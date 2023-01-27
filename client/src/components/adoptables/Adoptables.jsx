import React from 'react';
import './adoptables.css';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Adoptables = () => {
  return (
    <Container className='adoptablesCardsSection'>
      <Card className='adoptablesCard'>
        <Card.Img
          className='adoptablesImg'
          variant='top'
          src='https://cdn.pixabay.com/photo/2017/10/02/21/56/dog-2810484_960_720.jpg'
        />
        <Card.Body>
          <Button className='cardButton' variant='primary'>
            See Adoptable Dogs
          </Button>
        </Card.Body>
      </Card>
      <Card className='adoptablesCard'>
        <Card.Img
          className='adoptablesImg'
          variant='top'
          src='https://cdn.pixabay.com/photo/2018/01/28/12/37/cat-3113513__340.jpg'
        />
        <Card.Body>
          <Button className='cardButton' variant='primary'>
            See Adoptable Cats
          </Button>
        </Card.Body>
      </Card>
      <Card className='adoptablesCard'>
        <Card.Img
          className='adoptablesImg'
          variant='top'
          src='https://cdn.pixabay.com/photo/2022/11/09/10/59/turtle-7580318__340.jpg'
        />
        <Card.Body>
          <Card.Title></Card.Title>

          <Button className='cardButton' variant='primary'>
            Other Adoptable Animals
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Adoptables;
