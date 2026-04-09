import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../AppContext';

const Header: React.FC = () => {
  const { isDarkMode, setIsDarkMode, cart, setIsCartOpen, username, setUsername, searchQuery, setSearchQuery } = useAppContext();
  const navigate = useNavigate();

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUsername(null);
    navigate('/');
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // If we are not on the menu page, we might want to navigate there to show results
    // but usually search should work on the current page if it has items.
    // For now, let's just update the query.
  };

  return (
    <header className="main-header">
      <div className="header-top">
        <div className="logo">
          🍔 <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><span>FoodExpress</span></Link>
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/restaurants">Restaurants</Link>
          {username ? (
            <a href="#" onClick={(e) => { e.preventDefault(); handleLogout(); }}>{username} (Logout)</a>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>

        <div className="header-icons">
          <button id="darkToggle" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          <div className="cart-icon" onClick={() => setIsCartOpen(true)}>
            🛒 <span id="cart-count">{cartCount}</span>
          </div>
        </div>
      </div>

      <div className="search-container">
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Search food, restaurant..." 
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button>🔍</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
