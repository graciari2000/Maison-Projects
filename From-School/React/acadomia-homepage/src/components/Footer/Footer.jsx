import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="links">
        <a href="/privacy">Politique de Confidentialité</a>
        <a href="/legal">Mentions Légales</a>
      </div>
      <div className="social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Molière. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;