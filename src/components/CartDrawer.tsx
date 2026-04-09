import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../AppContext';

const CartDrawer: React.FC = () => {
  const { isCartOpen, setIsCartOpen, cart, removeFromCart, cartTotal } = useAppContext();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <div className={`cart-drawer ${isCartOpen ? 'active' : ''}`} id="cartDrawer">
      <div className="cart-header">
        <h3>Your Cart</h3>
        <button onClick={() => setIsCartOpen(false)}>✖</button>
      </div>

      <div id="cartItems" className="cart-items-list">
        {cart.length === 0 ? (
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <p>Your cart is empty</p>
          </div>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} referrerPolicy="no-referrer" />
              <div className="item-details">
                <h4>{item.name}</h4>
                <p>₹{item.price} x {item.quantity}</p>
              </div>
              <button className="remove-item" onClick={() => removeFromCart(item.id)}>🗑️</button>
            </div>
          ))
        )}
      </div>

      <div className="cart-footer">
        <div className="cart-total">
          <span>Total:</span>
          <span>₹{cartTotal}</span>
        </div>
        <button 
          className="checkout-btn" 
          disabled={cart.length === 0}
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;
