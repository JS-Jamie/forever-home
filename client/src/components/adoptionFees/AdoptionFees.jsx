import React from 'react';
import { Col, Row } from 'react-bootstrap';

const AdoptionFees = () => {
  return (
    <div>
      <div className='mb-4'>
        All animals are spayed or neutered, current on vaccinations,
        microchipped, de-wormed, and given flea/tick preventative. Animals are
        sent home with a welcome home supply of Purina food. Dogs 6 months and
        older are tested for heartworm, and all dogs are started on heartworm
        preventative. Dog adopters are offered a discount on training classes
        and puppy socials with Forever Home’s skilled instructors. All cats are
        tested for FeLV, and all cats older than 6 months are tested for FIV.
      </div>
      <div>
        <h4>Adoption Fees</h4>
        <Row>
          <Col>
            <ul>
              <li>Cat – $125</li>
              <li>Special Needs Cat – $75</li>
              <li>Senior Cat (Seven years or older) – $75</li>
              <li>Kitten (six months or older) – $175</li>
              <li>Special Needs Kitten – $100</li>
              <li>Two Kittens – $300</li>
              <li>Two Cats – $200</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>Dog – $250</li>
              <li>Special Needs Dog – $150</li>
              <li>Senior Dog (Seven years or older) – $150</li>
              <li>Puppy (six months or older) – $375</li>
              <li>Special Needs Puppy – $200</li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AdoptionFees;
