import React, { useState } from 'react';
import './donate.css';
import { Container } from 'react-bootstrap';
import NavbarInHeader from '../../components/navbar/Navbar';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Info from '../../components/info/Info';
import Footer from '../../components/footer/Footer';

const Donate = () => {
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: '$10', value: '1' },
    { name: '$20', value: '2' },
    { name: '$30', value: '3' },
    { name: '$40', value: '4' },
    { name: '$50', value: '5' },
    { name: '$60', value: '6' },
    { name: '$70', value: '7' },
    { name: '$80', value: '8' },
    { name: '$90', value: '9' },
    { name: '$100', value: '10' },
  ];

  return (
    <>
      <NavbarInHeader />
      <Container>
        <div>
          {' '}
          <Card className='bg-dark text-white'>
            <Card.Img
              className='cardImg'
              src='https://images.unsplash.com/photo-1617731452557-1b859ad0aeae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
              alt='Cat sleeping on a blanket'
            />
            <Card.ImgOverlay>
              <Card.Title>
                <h1 className='title'>Donate</h1>
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div>
          <h1 className='mt-5 mb-4 text-center'>Accepted Items</h1>
          <p className='fs-6 mb-4'>
            Donations may be dropped off during normal business or adoption
            hours or shipped directly to Forever Home office at 3100 Pet Friends
            Rd, Furry Friends City, CA 91234.
          </p>
          <div className='mb-4'>
            <Accordion>
              <Accordion.Item eventKey='0'>
                <Accordion.Header>
                  <h4>Cat Supplies</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <ul>
                      <li>Cat tree scratching posts</li>
                      <li>Cardboard scratching pads</li>
                      <li>
                        Kitten milk replacement powder – unopened and unexpired
                      </li>
                      <li>
                        Aluminum litter pans – similar to aluminum steam or
                        roasting pans; approximate size 16″ x 12″
                      </li>
                      <li>
                        Assorted toys – without small detachable parts like
                        bells, buttons, strings, etc.
                      </li>
                      <li>Wand toys</li>
                      <li>Treats – unopened and unexpired\</li>
                      <li>Washable cat beds</li>
                      <li>Fleece blankets</li>
                      <li>Plastic litter pans – approximate size 16″ x 12″</li>
                      <li>Plastic scoops</li>
                      <li>Food bowls</li>
                    </ul>
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='1'>
                <Accordion.Header>
                  <h4>Dog Supplies</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <ul>
                      <li>Large (60×40) fleece blankets/throws</li>
                      <li>Exercise pens</li>
                      <li>KONGs – all sizes</li>
                      <li>Interactive puzzle toys</li>
                      <li>Nylabones – all sizes and flavors</li>
                      <li>Training/bait bags for treats</li>
                      <li>Rope toys</li>
                      <li>
                        Assorted toys – durable, washable, and non-destructible
                      </li>
                      <li>
                        Dog treats – all shapes and sizes, unopened and
                        unexpired
                      </li>
                      <li>Large jars of peanut butter – no xylitol</li>
                      <li>Large dog treat rolls</li>
                      <li>Puppia harnesses – x-small, small, medium</li>
                      <li>Muzzles</li>
                      <li>Collars – martingale, variety of sizes</li>
                      <li>6’ clip leashes – variety of widths</li>
                      <li>Food bowls</li>
                    </ul>
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='2'>
                <Accordion.Header>
                  <h4>Cleaning and Medical Supplies</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <ul>
                      <li>Non-latex gloves – sizes medium and large</li>
                      <li>
                        Seal-top bag – snack sized, sandwich, and gallon sized
                      </li>
                      <li>Sponges – blue/green or yellow/green packages</li>
                      <li>Window cleaner – jugs</li>
                      <li>Carpet cleaner – jugs</li>
                      <li>Sanitizing wipes</li>
                      <li>Hand sanitizer</li>
                      <li>Paper towels</li>
                      <li>Liquid hand soap</li>
                      <li>Step-lid trash cans – 10 gallons</li>
                      <li>Carpet/upholstery cleaner</li>
                      <li>Distilled water</li>
                      <li>Digital thermometers</li>
                      <li>High-pressure hoses</li>
                    </ul>
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='3'>
                <Accordion.Header>
                  <h4>Office Supplies and More</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <ul>
                      <li>White copy paper: 8½”x11″, 8½”x14″, and 11″x17″</li>
                      <li>Assorted bright colored copy paper: 8½”x11″</li>
                      <li>Pastel green and yellow copy paper: 8½”x11″</li>
                      <li>Construction paper</li>
                      <li>Washable markers</li>
                      <li>Blue painters tape</li>
                      <li>Laminating sheets: 8½”x11″ and 11″x17″</li>
                      <li>Pads of lined writing paper – any color</li>
                      <li>Sharpies</li>
                      <li>Mailing envelopes: 9″x12″ and 11″x13″</li>
                      <li>Lint rollers</li>
                      <li>Zip ties</li>
                      <li>Dry erase markers – all colors</li>
                      <li>Presentation materials – easels and easel pads</li>
                      <li>
                        8-foot white or black plastic tablecloths and table
                        runners
                      </li>
                      <li>Rolls of wire ribbon – various colors</li>
                      <li>Paper napkins</li>
                      <li>Paper plates, utensils, cups</li>
                      <li>Forever postage stamps</li>
                      <li>Batteries: 9V, AA, AAA, and D</li>
                    </ul>
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div>
            <h1 className='mt-5 mb-4 text-center'>Financial Donation</h1>
            <div style={{ width: '80%' }} className='m-auto'>
              <Form>
                <ButtonGroup className=' mt-5 mb-5  d-flex'>
                  {radios.map((radio, idx) => (
                    <ToggleButton
                      style={{ width: '60px' }}
                      className='m-auto'
                      key={idx}
                      id={`radio-${idx}`}
                      type='radio'
                      variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                      name='radio'
                      value={radio.value}
                      checked={radioValue === radio.value}
                      onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
                <Row className='mb-3'>
                  <Form.Group as={Col}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder='First Name' />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder='Last Name' />
                  </Form.Group>
                </Row>

                <Form.Group className='mb-3' controlId='formGridAddress1'>
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder='1234 Main St' />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formGridAddress2'>
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control placeholder='Apartment, studio, or floor' />
                </Form.Group>

                <Row className='mb-3'>
                  <Form.Group as={Col} controlId='formGridCity'>
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId='formGridState'>
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue='Choose...'>
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId='formGridZip'>
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Row>
                <div>
                  <Button
                    className='mt-4 mb-5'
                    style={{
                      float: 'right',
                      width: '250px',
                      height: '43px',
                      fontSize: '20px',
                    }}
                    variant='primary'
                    type='submit'
                  >
                    Next
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Container>
      <Info />
      <Footer />
    </>
  );
};

export default Donate;
