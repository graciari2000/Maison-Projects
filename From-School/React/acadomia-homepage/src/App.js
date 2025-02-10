import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Offers from './components/Offers/Offers';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Services />
      <Testimonials />
      <Offers />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;