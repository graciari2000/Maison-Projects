import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contactez-nous</h2>
      <div className="contactInfo">
        <div className="infoItem">
          <h3>Adresse</h3>
          <p>123 Rue de l'Éducation, 75000 Paris, France</p>
        </div>
        <div className="infoItem">
          <h3>Téléphone</h3>
          <p>+33 1 23 45 67 89</p>
        </div>
        <div className="infoItem">
          <h3>Email</h3>
          <p>contact@Molière.fr</p>
        </div>
      </div>
      <button className="contactBtn">Envoyer un Message</button>
    </section>
  );
};

export default Contact;