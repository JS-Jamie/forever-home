import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Adoptables from './pages/adoptables/Adoptables';
import AboutUs from './pages/aboutUs/AboutUs';
import AdoptionProcess from './pages/adoptionProcess/AdoptionProcess';
import Donate from './pages/donate/Donate';
import Volunteer from './pages/volunteer/Volunteer';
import Foster from './pages/foster/Foster';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/adoptables' element={<Adoptables />} />
        <Route path='/adoptionprocess' element={<AdoptionProcess />} />
        <Route path='/volunteer' element={<Volunteer />} />
        <Route path='/foster' element={<Foster />} />
        <Route path='/donate' element={<Donate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
