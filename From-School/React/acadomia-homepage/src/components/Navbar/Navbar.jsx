import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Molière</div>
      <ul className="navLinks">
        <li>
          <Link to="banner" smooth={true} duration={500}>
            Accueil
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={500}>
            Services
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} duration={500}>
            Témoignages
          </Link>
        </li>
        <li>
          <Link to="offers" smooth={true} duration={500}>
            Offres
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;