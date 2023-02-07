import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Footer from '../../components/footer/Footer';
import Info from '../../components/info/Info';
import NavbarInHeader from '../../components/navbar/Navbar';

const Volunteer = () => {
  return (
    <>
      <NavbarInHeader />
      <Container>
        <div>
          <Card className='bg-dark text-white'>
            <Card.Img
              className='cardImg'
              src='https://images.unsplash.com/photo-1461532257246-777de18cd58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
              alt='Holding hands'
            />
            <Card.ImgOverlay>
              <Card.Title>
                <h1 className='title'>Volunteer</h1>
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div>
          <h1 className='mt-5 mb-4 text-center'>
            Available Volunteer Activities
          </h1>
          <p className='mb-5 text-center'>
            Would you like to be part of a lifesaving team? Could you share your
            time and talents to connect people and pets? <br />
            Forever Home currently has three types of volunteer opportunities
            available.
          </p>

          <CardGroup className='mb-5'>
            <Card>
              <Card.Img
                variant='top'
                src='https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              />
              <Card.Body>
                <Card.Title className='text-center'>
                  Shelter Essentials
                </Card.Title>
                <Card.Text>
                  Shelter essentials volunteers support our animals by doing
                  laundry, washing toys and supplies, sanitizing litter boxes,
                  sweeping and mopping, and more.
                </Card.Text>
              </Card.Body>
              <Card.Footer
                style={{ backgroundColor: 'transparent', border: 'none' }}
              >
                <small className='d-flex justify-content-center mb-2'>
                  <Button variant='info'>Submit Volunteer Application</Button>{' '}
                </small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant='top'
                src='https://images.unsplash.com/photo-1531617494862-4e322fb560c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
              />
              <Card.Body>
                <Card.Title className='text-center'>Dog Care</Card.Title>
                <Card.Text>
                  From walking dogs to cleaning condos, dog care volunteers
                  ensure the comfort and care of out canine shelter guests while
                  they await doption.
                </Card.Text>
              </Card.Body>
              <Card.Footer
                style={{ backgroundColor: 'transparent', border: 'none' }}
              >
                <small className='d-flex justify-content-center mb-2'>
                  <Button variant='info'>Submit Volunteer Application</Button>{' '}
                </small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant='top'
                src='https://images.unsplash.com/photo-1517451330947-7809dead78d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              />
              <Card.Body>
                <Card.Title className='text-center'>Cat Care</Card.Title>
                <Card.Text>
                  Cat care volunteers assist with feeding our shelter cats and
                  cleaning their living spaces, to ensure they are happy and
                  healthy during their stay at our adoption center.
                </Card.Text>
              </Card.Body>
              <Card.Footer
                style={{ backgroundColor: 'transparent', border: 'none' }}
              >
                <small className='d-flex justify-content-center mb-2'>
                  <Button variant='info'>Submit Volunteer Application</Button>{' '}
                </small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
        <div>
          <h1 className='mb-4 text-center'>Frequently Asked Questions</h1>
          <Accordion>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>
                <h5>Q) Is there any age requirements?</h5>
              </Accordion.Header>
              <Accordion.Body>
                You must be at least 18 years old to join our volunteer program.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
              <Accordion.Header>
                <h5>Q) Can I volunteer after work hours or on weekends?</h5>
              </Accordion.Header>
              <Accordion.Body>
                Weekend and evening volunteer opportunities are available.
                Please note your days and hours of availability when submitting
                your volunteer application form.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='2'>
              <Accordion.Header>
                <h5>Q) What kind of commitment is required?</h5>
              </Accordion.Header>
              <Accordion.Body>
                We ask for a commitment of six months with at least eight hours
                each month.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='3'>
              <Accordion.Header>
                <h5>
                  Q) Can I complete my court ordered community service at
                  Forever Home?
                </h5>
              </Accordion.Header>
              <Accordion.Body>
                We require a six month minimum commitment from all volunteers.
                We cannot accommodate short-term community service volunteer
                opportunities or sign off on hours before this six month
                commitment is complete.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='4'>
              <Accordion.Header>
                <h5>Q) Are there ways I can volunteer from home?</h5>
              </Accordion.Header>
              <Accordion.Body>
                Yes! Consider becoming a foster home! Every new foster family
                means another pet rescued from an overburdened, public shelter.
                Find out more about the foster program.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
      <Info />
      <Footer />
    </>
  );
};

export default Volunteer;
