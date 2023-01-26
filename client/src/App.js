import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
