import React from 'react';
import './info.css';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Info = () => {
  return (
    <Container>
      <hr />
      <div className='infoSection'>
        <Row>
          <Col className='col'>
            <h3 className='hours'>Adoption Hours</h3>
            <p>
              <strong>Mon-Fri: 9am-5pm</strong>
            </p>
            <p>
              <strong>Sat-Sun: 9am-3pm</strong>
            </p>
            <p>No appointment necessary;</p>
            <p>Walk-ins welcome!</p>
          </Col>

          <Col className='col'>
            <h3>Social Connect</h3>
            <div className='icons'>
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ cursor: 'Pointer' }}
              />
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ cursor: 'Pointer' }}
              />
              <FontAwesomeIcon icon={faTwitter} style={{ cursor: 'Pointer' }} />
              <FontAwesomeIcon icon={faYoutube} style={{ cursor: 'Pointer' }} />
            </div>
          </Col>

          <Col className='col'>
            <p style={{ cursor: 'Pointer' }}>ABOUT US</p>
            <p style={{ cursor: 'Pointer' }}>CONTACT US</p>
            <p style={{ cursor: 'Pointer' }}>CAREER</p>
            <p style={{ cursor: 'Pointer' }}>PRIVACY POLICY</p>
          </Col>

          <Col className='col'>
            <p>3100 Pet Friends Rd</p>
            <p>Furry Friends City, CA 91234</p>
            <p>Phone: 123-456-7890</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Info;
