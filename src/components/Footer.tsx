import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>FoodExpress</h3>
          <p>Delicious food delivered fast. Your favorite meals just a click away!</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/restaurants">Restaurants</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: support@foodexpress.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Food St, Flavor Town</p>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook" title="Facebook">📘</a>
            <a href="#" aria-label="Twitter" title="Twitter">🐦</a>
            <a href="#" aria-label="Instagram" title="Instagram">📸</a>
            <a href="#" aria-label="LinkedIn" title="LinkedIn">💼</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 FoodExpress. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
