import React from 'react';
import { Row } from 'react-bootstrap';
import './adoptables.css';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Adoptables = () => {
  return (
    <Container className='adoptablesCardsSection'>
      <Row xs={1} s={2} md={3} className='g-4'>
        <div>
          <Card className=' w-100 adoptablesCard'>
            <Card.Img
              className='adoptablesImg'
              variant='top'
              src='https://cdn.pixabay.com/photo/2017/10/02/21/56/dog-2810484_960_720.jpg'
            />
            <Card.Body>
              <Button className='cardButton' variant='primary'>
                Adoptable Dogs ➤
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className='w-100 adoptablesCard'>
            <Card.Img
              className='adoptablesImg'
              variant='top'
              src='https://cdn.pixabay.com/photo/2018/01/28/12/37/cat-3113513__340.jpg'
            />
            <Card.Body>
              <Button className='cardButton' variant='primary'>
                Adoptable Cats ➤
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className='w-100 adoptablesCard'>
            <Card.Img
              className='adoptablesImg'
              variant='top'
              src='https://cdn.pixabay.com/photo/2022/11/09/10/59/turtle-7580318__340.jpg'
            />
            <Card.Body>
              <Button className='cardButton' variant='primary'>
                Other Animals ➤
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </Container>
  );
};

export default Adoptables;
