import React from 'react';
import './Services.css';
import { FaBook, FaChalkboardTeacher, FaLaptopCode } from 'react-icons/fa';

const services = [
  {
    icon: <FaBook size={40} />,
    title: 'Cours en Ligne',
    description: 'Des cours interactifs pour tous les niveaux.',
  },
  {
    icon: <FaChalkboardTeacher size={40} />,
    title: 'Tutorat Personnalisé',
    description: 'Un accompagnement adapté à vos besoins.',
  },
  {
    icon: <FaLaptopCode size={40} />,
    title: 'Préparation aux Examens',
    description: 'Optimisez vos chances de réussite.',
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Nos Services</h2>
      <div className="serviceList">
        {services.map((service, index) => (
          <div key={index} className="serviceCard">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;