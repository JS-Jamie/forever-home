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
            <h2 className='hours'>Adoption Hours</h2>
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
            <h2>Social Connect</h2>
            <div>
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faYoutube} />
            </div>
          </Col>

          <Col className='col'>
            <p>ABOUT US</p>
            <p>CONTACT US</p>
            <p>CAREER</p>
            <p>PRIVACY POLICY</p>
          </Col>

          <Col className='col'>
            <p>3100 Pet Friends Rd</p>
            <p>Walnut Creek, CA 91234</p>
            <p>Phone: (123)-456-7890</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Info;
