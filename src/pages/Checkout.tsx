import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../AppContext';

const Checkout: React.FC = () => {
  const { cart, cartTotal, clearCart, username } = useAppContext();
  const navigate = useNavigate();
  const [isOrdered, setIsOrdered] = useState(false);

  useEffect(() => {
    if (!username) {
      navigate('/login');
    }
  }, [username, navigate]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });

  if (cart.length === 0 && !isOrdered) {
    return (
      <div className="checkout-empty">
        <h2>Your cart is empty</h2>
        <button className="btn" onClick={() => navigate('/menu')}>Go to Menu</button>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order processing
    setIsOrdered(true);
    clearCart();
  };

  if (isOrdered) {
    return (
      <div className="order-success">
        <div className="success-card">
          <span>✅</span>
          <h2>Order Placed Successfully!</h2>
          <p>Thank you for ordering with FoodExpress. Your food is being prepared.</p>
          <button className="btn" onClick={() => navigate('/')}>Back to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      
      <div className="checkout-container">
        <div className="checkout-form">
          <h3>Delivery Details</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                name="name" 
                required 
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                name="email" 
                required 
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input 
                type="tel" 
                name="phone" 
                required 
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 9876543210"
              />
            </div>
            <div className="form-group">
              <label>Delivery Address</label>
              <textarea 
                name="address" 
                required 
                rows={4}
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter your full address"
              ></textarea>
            </div>
            <button type="submit" className="place-order-btn">Place Order</button>
          </form>
        </div>

        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-items">
            {cart.map(item => (
              <div key={item.id} className="summary-item">
                <span>{item.name} x {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="summary-total">
            <span>Total Payable</span>
            <span>₹{cartTotal}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
