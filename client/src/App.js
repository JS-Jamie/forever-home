import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Adoptables from './pages/adoptables/Adoptables';

function App() {
  return (
    // <Container>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/adoptables' element={<Adoptables />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
