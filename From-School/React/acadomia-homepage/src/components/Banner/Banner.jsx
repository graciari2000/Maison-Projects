import React from 'react';
import './Banner.css';
import bannerImage from '../../assets/pexels-zyuliansyah-573130.jpg'; // Ensure you have an image in src/assets/

const Banner = () => {
  return (
    <section id="banner" className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="overlay">
        <h1 className="title">Bienvenue chez Molière</h1>
        <p className="subtitle">Votre succès éducatif commence ici</p>
        <div className="buttons">
          <button className="primaryBtn">Nos Services</button>
          <button className="secondaryBtn">Contactez-nous</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;