import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import CartDrawer from './components/CartDrawer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Restaurants from './pages/Restaurants';
import Login from './pages/Login';
import Checkout from './pages/Checkout';

const AppContent: React.FC = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/login';

  return (
    <div className="app-container">
      {!hideHeaderFooter && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      {!hideHeaderFooter && <Footer />}
      <MobileNav />
      <CartDrawer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </AppProvider>
  );
};

export default App;
