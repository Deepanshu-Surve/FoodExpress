import React from 'react';
import { Link } from 'react-router-dom';

const MobileNav: React.FC = () => {
  return (
    <div className="mobile-nav">
      <Link to="/">
        <span>🏠</span>
        <p>Home</p>
      </Link>

      <Link to="/menu">
        <span>🍔</span>
        <p>Menu</p>
      </Link>

      <Link to="/restaurants">
        <span>🍽️</span>
        <p>Restaurants</p>
      </Link>

      <Link to="/login">
        <span>👤</span>
        <p>Account</p>
      </Link>
    </div>
  );
};

export default MobileNav;
