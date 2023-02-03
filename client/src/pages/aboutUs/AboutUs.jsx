import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './aboutUsPage.css';
import Card from 'react-bootstrap/Card';
import NavbarInHeader from '../../components/navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import Info from '../../components/info/Info';
import Footer from '../../components/footer/Footer';

export const AboutUs = () => {
  return (
    <>
      <NavbarInHeader />
      <Container>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <Card className='bg-dark text-white w-100 mb-5'>
            <Card.Img
              className='cardImg'
              src='https://images.unsplash.com/photo-1557495235-340eb888a9fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=813&q=80'
              alt='Card image'
            />
            <Card.ImgOverlay>
              <Card.Title className='cardText'>ABOUT US</Card.Title>
            </Card.ImgOverlay>
          </Card>

          <div className='mb-5'>
            <h1 className='mb-3' style={{ textAlign: 'center' }}>
              Since 1846
            </h1>
            <p>
              For more than 170 years, Forever Home has been serving the
              community, saving animals and helping people. Forever Home is
              still the only animal shelter in Pet Friends County, taking in all
              types of unwanted, injured, lost, stray, abandoned, and abused
              animals. Today, we help over 24,000 animals and their people
              through our array of services every year. We are governed by a
              board of directors and is supported by generous individual and
              corporate donors.
            </p>
          </div>

          <div className='mb-3'>
            <Row d-flex flex-row>
              <Col className='w-auto'>
                <Card border='light'>
                  <Card.Body>
                    <Card.Title className='mb-3'>
                      <h3>Our Mission Statement</h3>
                    </Card.Title>
                    <Card.Text>
                      To advocate the compassionate treatment of animals;
                      educate the community on responsible, lifelong pet
                      ownership; and promote adoption as the best option when
                      searching for a new pet.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />
                <Card border='light'>
                  <Card.Body>
                    <Card.Title className='mb-3'>
                      <h3>Vision for the Future</h3>
                    </Card.Title>
                    <Card.Text>
                      We envision a time when every companion animal is treated
                      with respect, care, and compassion as a valued, lifelong
                      member of the family. A time when there are no more
                      homeless animals resulting from irresponsible or
                      noncommittal pet ownership.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col className='w-auto'>
                <Card border='light'>
                  <Card.Body>
                    <Card.Title className='mb-3'>
                      <h3>Core Values :</h3>
                    </Card.Title>
                    <Card.Text>
                      <p>
                        <FontAwesomeIcon icon={faPaw} className='icon' />
                        Teamwork, built on knowledge, respect, and appreciation,
                        to achieve our mission
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faPaw} className='icon' />
                        Kindness and common sense to guide and accomplish shared
                        goals
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faPaw} className='icon' />
                        High level of care and compassion provided to all of our
                        animals
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faPaw} className='icon' />
                        Respectful, unbiased customer service provided
                        internally and externally
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faPaw} className='icon' />
                        Embracement of diversity, equity, and inclusion in all
                        areas of operation
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faPaw} className='icon' />
                        Ethical, accountable, and transparent practices and
                        activities
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faPaw} className='icon' />
                        Financial accountability worthy of our donors’ trust
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
      <Info />
      <Footer />
    </>
  );
};

export default AboutUs;
