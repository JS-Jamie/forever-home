import React from 'react';
import './volunteerAndFoster.css';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

const VolunteerAndFoster = () => {
  return (
    <Container>
      <h1 className='getInvolvedText'>Get Involved</h1>
      <Row xs={1} md={2} className='g-4'>
        <div>
          <Card className='w-100'>
            <Card.Img
              className='w-100 cardImg'
              variant='top'
              src='https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHZvbHVudGVlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60'
            />
            <Card.Body>
              <Card.Title>VOLUNTEER</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className='w-100'>
            <Card.Img
              className='w-100 cardImg'
              variant='top'
              src='https://images.unsplash.com/photo-1601758261049-55d060e1159a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nJTIwYW5kJTIwcGVvcGxlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60'
            />
            <Card.Body>
              <Card.Title>FOSTER</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </Container>
  );
};

export default VolunteerAndFoster;
