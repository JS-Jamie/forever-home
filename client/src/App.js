import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Adoptables from './pages/adoptables/Adoptables';
import AboutUs from './pages/aboutUs/AboutUs';
import AdoptionProcess from './pages/adoptionProcess/AdoptionProcess';
import DonateItems from './pages/donateItems/DonateItems';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/adoptables' element={<Adoptables />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/adoptionprocess' element={<AdoptionProcess />} />
        <Route path='/donateitems' element={<DonateItems />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
