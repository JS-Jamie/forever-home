import React from 'react';
import { Container } from 'react-bootstrap';
import NavbarInHeader from '../../components/navbar/Navbar';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Info from '../../components/info/Info';
import Footer from '../../components/footer/Footer';

const DonateItems = () => {
  return (
    <>
      <NavbarInHeader />
      <Container>
        <div>
          {' '}
          <Card className='bg-dark text-white'>
            <Card.Img
              src='https://images.unsplash.com/photo-1617731452557-1b859ad0aeae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
              alt='Cat sleeping on a blanket'
            />
            <Card.ImgOverlay>
              <Card.Title>Donate Items</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div>
          <h1>Items We Can Accept</h1>
          <h5>
            Donations may be dropped off during normal business or adoption
            hours or shipped directly to{' '}
          </h5>
          <div>
            <Accordion>
              <Accordion.Item eventKey='0'>
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='1'>
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='2'>
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='3'>
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='4'>
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div>
            <h1>Another Way to Donate</h1>
            <div>card for financial donation</div>
          </div>
        </div>
      </Container>
      <Info />
      <Footer />
    </>
  );
};

export default DonateItems;
