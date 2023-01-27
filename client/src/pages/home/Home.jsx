import React from 'react';
import AboutUs from '../../components/aboutUs/AboutUs';
import Adoptables from '../../components/adoptables/Adoptables';
import Footer from '../../components/footer/Footer';
import Info from '../../components/info/Info';
import NavbarInHeader from '../../components/navbar/Navbar';
import SpecialAdoption from '../../components/specialAdoption/SpecialAdoption';
import VolunteerAndFoster from '../../components/volunteerAndFoster/VolunteerAndFoster';

const Home = () => {
  return (
    <div>
      <NavbarInHeader />
      <SpecialAdoption />
      <AboutUs />
      <Adoptables />
      <VolunteerAndFoster />
      <Info />
      <Footer />
    </div>
  );
};

export default Home;
