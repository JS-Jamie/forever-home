import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavbarInHeader from '../../components/navbar/Navbar';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Info from '../../components/info/Info';
import Footer from '../../components/footer/Footer';
import AdoptionFees from '../../components/adoptionFees/AdoptionFees';

const AdoptionProcess = () => {
  return (
    <>
      <NavbarInHeader />
      <Container>
        <div className='d-flex flex-row mb-5'>
          <img
            className='w-100'
            style={{ objectFit: 'cover' }}
            src='https://images.unsplash.com/photo-1606145744852-da45413f0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
          />

          <Card className='w-auto'>
            <Card.Body className='ms-4 me-4'>
              <Card.Title>
                <h1 className='mb-4 mt-3 text-center'>Adoption Process</h1>
              </Card.Title>

              <Card.Text>
                <p>
                  When you arrive, sign in and complete an adoption application
                  form.
                </p>
                <p>
                  Next, you’ll talk to an adoption counselor who will introduce
                  you to shelter guests who may be a good fit. Our skilled team
                  is here to assist you in finding a new family member.
                </p>
                <p>
                  During your visit we will share information about their
                  health, behavior, and the post-adoption resources we offer.
                  This can take time, so please allow 60-90 minutes for the
                  adoption process. Thank you for your patience and
                  understanding.{' '}
                </p>
                <p>
                  Want to save time? Download the{' '}
                  <a href=''>adoption application form</a> and bring the
                  completed form with you.
                </p>
                <hr className='mt-5' />
                <p>
                  We encourage the entire family to participate in the adoption
                  process, including children. If you are looking to add an
                  additional dog to your family, we encourage you to bring your
                  dog with you to meet their new canine friend. Our team can
                  provide a room for your dog to safely wait while your family
                  meets potential new pups.{' '}
                </p>
                <p>
                  We want to help you find the right companion for your family
                  and lifestyle. Potential adopters are able to meet up to three
                  available shelter guests during the adoption process. Since
                  this process can take time, we are unable to accommodate
                  multiple meet and greets for new adoptions beginning at 30
                  minutes before closing.
                </p>
                <p>
                  Adoptions are on a first-come, first-served basis.
                  Availability of particular animals cannot be guaranteed.
                </p>
              </Card.Text>
              <Card.Link href='/adoptables'>View Available Animals</Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Accordion className='mb-5'>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>
                <h4>Adoption Policies and Requirements</h4>
              </Accordion.Header>
              <Accordion.Body>
                <p>Adopters must be 18 or older with valid photo ID. </p>
                <p>
                  Adoptions are on a first-come, first-served basis. We adopt to
                  the first good match and cannot place animals on hold. If you
                  are interested in a specific dog or cat, please check our
                  website, which is updated daily.
                </p>
                <p>
                  We cannot guarantee the availability of particular animals,
                  and we do not place animals on hold.
                </p>
                <p>
                  You must be able to meet the animal in person at our
                  headquarters in Walnut Creek, California. If you cannot travel
                  to our campus, we encourage you to contact a local shelter or
                  rescue to adopt an animal who needs a home.
                </p>
                <p>
                  For the safety of the animal when leaving our adoption center,
                  adopted cats must be in carriers and dogs must be on leash and
                  collar.
                </p>
                <p>
                  Please note: Our team cannot guarantee the breed of any
                  animal.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
              <Accordion.Header>
                <h4>Adoption Fees (Cats and Dogs)</h4>
              </Accordion.Header>
              <Accordion.Body>
                <AdoptionFees />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='2'>
              <Accordion.Header>
                <h4>Adoptions Fees (Other Animals)</h4>
              </Accordion.Header>
              <Accordion.Body>
                <div>Chart</div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='3'>
              <Accordion.Header>
                <h4>Post-adoption Help</h4>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Did you adopt an animal from Forever Home and need help with a
                  medical, behavioral, or other question? Contact our team.
                </p>
                <ul>
                  <li>Behavior and training helpline: (123) 456-7777 </li>
                  <li>Clinic reception: (123) 455-6666</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='4'>
              <Accordion.Header>
                <h4>Return Policy</h4>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Returns are available by appointment only. You may return your
                  adopted pet for a full refund up to 30 days from the date of
                  adoption. If appropriate, we’d love the opportunity to help
                  you find a better match and apply the refunded fee toward a
                  different pet’s adoption.
                </p>
                <p>
                  After three months, pets must be re-evaluated by our team to
                  ensure they meet adoption criteria. If your pet is over 7
                  years old, a medical evaluation will also be necessary. A $100
                  surrender fee is applied towards the care of your pet while at
                  our center.
                </p>
                <p>
                  Please give us a call at (123) 456-7778 to make an appointment
                  to ensure appropriate space and housing before bringing your
                  pet back.
                </p>
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

export default AdoptionProcess;
