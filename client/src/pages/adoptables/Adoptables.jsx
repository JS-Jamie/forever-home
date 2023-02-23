import React, { useState, useEffect } from 'react';
import './adoptables.css';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';
import Card from 'react-bootstrap/Card';
import NavbarInHeader from '../../components/navbar/Navbar';
import axios from 'axios';
import Info from '../../components/info/Info';
import Footer from '../../components/footer/Footer';
import { useNavigate, useParams } from 'react-router-dom';

const Adoptables = () => {
  //Filter animals
  const [animalsList, setAnimalsList] = useState([]);
  const [speciesValue, setSpeciesValue] = useState('Any');
  const [sexValue, setSexValue] = useState('Any');
  const [ageValue, setAgeValue] = useState('Any');
  const [notFoundText, setNotFoundText] = useState('');

  //Pagination
  const [active, setActive] = useState(1);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);

  const params = useParams();
  const navigate = useNavigate();

  const fetchAnimals = async () => {
    setAnimalsList([]);
    const res = await axios.get(`/api/animals?pageNumber=${params.pageNumber}`);
    // setAnimalsList(res.data.animals);
    // if (speciesValue !== 'Any' || sexValue !== 'Any' || ageValue !== 'Any') {
    const animalsListCopy = [...res.data.animals];
    const filteredResult = handleFilter(
      animalsListCopy,
      speciesValue,
      sexValue,
      ageValue
    );

    setAnimalsList(filteredResult);
    // } else {
    //   setAnimalsList(res.data.animals);
    // }

    setPage(res.data.page);
    setPages(res.data.pages);
    setActive(res.data.page);
  };

  const filterBySpecies =
    speciesValue === 'Any'
      ? (animalObj) => {
          return animalObj;
        }
      : (animalObj) => {
          return animalObj.species === speciesValue;
        };

  const filterBySex =
    sexValue === 'Any'
      ? (animalObj) => {
          return animalObj;
        }
      : (animalObj) => {
          return animalObj.sex === sexValue;
        };

  const filterByAge =
    ageValue === 'Any'
      ? (animalObj) => {
          return animalObj;
        }
      : (animalObj) => {
          return animalObj.age === ageValue;
        };

  const handleFilter = (arr, fBySpecies, fBySex, fByAge) => {
    if (fBySpecies === 'Any' && fBySex === 'Any' && fByAge === 'Any') {
      return arr;
    } else {
      const result = arr
        .filter(filterBySpecies)
        .filter(filterBySex)
        .filter(filterByAge);
      return result;
    }
  };

  useEffect(() => {
    fetchAnimals();
  }, [speciesValue, sexValue, ageValue, page]);

  useEffect(() => {
    if (animalsList.length === 0) {
      setNotFoundText('No results match your search criteria.');
    } else {
      setNotFoundText('');
    }
  }, [animalsList.length]);

  const handlePagination = (e) => {
    setActive(Number(e.target.innerText));
    setPage(e.target.innerText);
    navigate(`/adoptables/page/${e.target.innerText}`);
  };

  let items = [];

  for (let i = 1; i <= pages; i++) {
    items.push(
      <Pagination.Item onClick={handlePagination} key={i} active={i === active}>
        {i}
      </Pagination.Item>
    );
  }

  const paginationBasic = (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );

  const handleClickSpecies = (e) => {
    setSpeciesValue(e.target.value);
  };

  const handleClickSex = (e) => {
    setSexValue(e.target.value);
  };

  const handleClickAge = (e) => {
    setAgeValue(e.target.value);
  };

  return (
    <>
      <NavbarInHeader />
      <Container className='adoptablesContainer'>
        <div className='titleSection'>
          <h1>Adoptable Animals</h1>
          <p>
            Animals available for adoption are on this page which is updated
            every 30 minutes.
          </p>
          <p>
            Learn more about our{' '}
            <a href='/adoptionprocess'>adoption process.</a>
          </p>
        </div>
        <div className='animalListSection'>
          <div className='filterTools'>
            <Row>
              <Col>
                <h3>Species</h3>
                <Form.Select aria-label='Species' onChange={handleClickSpecies}>
                  <option value='Any'>Any</option>
                  <option value='Dog'>Dog</option>
                  <option value='Cat'>Cat</option>
                  <option value='Other'>Other</option>
                </Form.Select>
              </Col>
              <Col>
                <h3>Sex</h3>
                <Form.Select aria-label='Sex' onChange={handleClickSex}>
                  <option value='Any'>Any</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                </Form.Select>
              </Col>
              <Col>
                <h3>Age</h3>
                <Form.Select aria-label='Age' onChange={handleClickAge}>
                  <option value='Any'>Any</option>
                  <option value='Senior'>Senior</option>
                  <option value='Adult'>Adult</option>
                  <option value='Young'>Young</option>
                </Form.Select>
              </Col>
            </Row>
          </div>
          {paginationBasic}
          {notFoundText ? notFoundText : ''}
          <div className='photoCards'>
            <Row xs={1} sm={2} md={3} lg={4} className='g-4'>
              {animalsList?.map((animal) => (
                <Col key={animal.name}>
                  <Card
                    onClick={() => {
                      navigate(`/profile/${animal._id}`);
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    <Card.Img variant='top' src={animal.image} />
                    <Card.Body>
                      <Card.Title>{animal.name}</Card.Title>
                      <Card.Text>{animal.sex}</Card.Text>
                      <Card.Text>{animal.age}</Card.Text>
                      <Card.Text>{animal.species}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
          {paginationBasic}
        </div>
      </Container>
      <Info />
      <Footer />
    </>
  );
};

export default Adoptables;
