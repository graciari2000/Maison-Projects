import React from 'react';
import './Offers.css';

const Offers = () => {
  return (
    <section id="offers" className="offers">
      <h2>Offres Spéciales</h2>
      <div className="offerCard">
        <h3>Inscription Anticipée</h3>
        <p>Inscrivez-vous avant la fin du mois et bénéficiez de 20% de réduction sur vos cours.</p>
        <button className="btn">Profitez-en</button>
      </div>
      {/* Add more offers as needed */}
    </section>
  );
};

export default Offers;