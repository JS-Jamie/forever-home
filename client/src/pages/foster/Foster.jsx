import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/footer/Footer';
import Info from '../../components/info/Info';
import NavbarInHeader from '../../components/navbar/Navbar';

const Foster = () => {
  const popover = (
    <Popover id='popover-basic'>
      <Popover.Body style={{ backgroundColor: '#029ACF' }}>
        <h5>Vaccination Requirements</h5>
        <li>
          <strong>Required:</strong> rabies and distemper (cats and dogs).
        </li>
        <li>Recommended: Bordetella, Lepto, Influenza (dogs) FeLuek (cats).</li>
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      <NavbarInHeader />
      <Container>
        <div>
          <Card className='bg-dark text-white'>
            <Card.Img
              className='cardImg'
              src='https://images.unsplash.com/photo-1605484649538-98578113d4f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              alt='Cute dog on a couch'
            />
            <Card.ImgOverlay>
              <Card.Title>
                <h1 className='title'>Foster</h1>
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div>
          <h1 className='mt-5 mb-4 text-center'>Become a Foster Parent</h1>
          <p className='mb-5 text-center'>
            Fostering is a wonderful opportunity to volunteer together as a
            family or care for a pet without a long-term adoption commitment.
          </p>
        </div>
        <div>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>What’s involved?</Card.Title>
                  <Card.Text>
                    Fostering can last from a few days to several months
                    depending on the needs of the animals and your availability.
                    Extra training is provided for unique circumstances, and
                    medical assistance and questions are handled quickly. All
                    veterinary care, food and animal supplies are provided by
                    Forever Home.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Who can foster?</Card.Title>
                  <Card.Text>
                    <p>
                      <FontAwesomeIcon icon={faPaw} className='icon' />
                      Must be at least 21 years old
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faPaw} className='icon' />
                      Have a household suitable
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faPaw} className='icon' />
                      Be able to make a commitment to temporarily care for
                      animals
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faPaw} className='icon' />
                      All your own animals must be sterilized and up-to-date on{' '}
                      {
                        <OverlayTrigger
                          trigger='click'
                          rootClose={true}
                          placement='right'
                          overlay={popover}
                        >
                          <strong>
                            <a
                              style={{
                                color: 'blue',
                                textDecorationLine: 'underline',
                                cursor: 'pointer',
                              }}
                            >
                              vaccinations
                            </a>
                          </strong>
                        </OverlayTrigger>
                      }
                      .
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faPaw} className='icon' />
                      Have experience with the type of animals you want to
                      foster.
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faPaw} className='icon' />
                      If you’re never had a pet, please consider becoming a
                      regular volunteer as a way to gain some experience
                      handling and caring for animals.
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faPaw} className='icon' />
                      For everyone’s health and safety, Forever Home Foster
                      Parents will need to commit to only fostering with Forever
                      Home and cannot foster for another organization if they
                      are fostering for us.
                    </p>{' '}
                    <p>
                      <FontAwesomeIcon icon={faPaw} className='icon' />
                      Potential fosters must also have a home check to make sure
                      they have a suitable space for a foster animal.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Whom can you help?</Card.Title>
                  <Card.Text>
                    <p>
                      {' '}
                      <FontAwesomeIcon icon={faPaw} className='icon' />
                      Kittens: Orphans who need round-the-clock care and bottle
                      feeding until old enough to eat on their own, or those who
                      are not yet old enough for adoption{' '}
                    </p>

                    <p>
                      {' '}
                      <FontAwesomeIcon icon={faPaw} className='icon' />
                      Puppies: Little ones who need socialization and some basic
                      manners training to ready them for adoption{' '}
                    </p>
                    <p>
                      {' '}
                      <FontAwesomeIcon icon={faPaw} className='icon' />
                      Mamas: Care for a pregnant or nursing animal while she
                      cares for her babies{' '}
                    </p>
                    <p>
                      {' '}
                      <FontAwesomeIcon icon={faPaw} className='icon' />
                      Dogs: Who have been waiting for a home for awhile, who
                      need help with training, or who don’t like kennels{' '}
                    </p>
                    <p>
                      {' '}
                      <FontAwesomeIcon icon={faPaw} className='icon' />
                      Animals who have medical or behavior needs best cared for
                      in a home, outside of the shelter
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
      <Info />
      <Footer />
    </>
  );
};

export default Foster;
