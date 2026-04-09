import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../AppContext';

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState('');
  const { setUsername } = useAppContext();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (usernameInput === 'root' && passwordInput === 'root') {
      localStorage.setItem('username', usernameInput);
      setUsername(usernameInput);
      navigate('/');
    } else {
      setError('Invalid username or password. Use root/root.');
    }
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLogin(true);
    setError('Signup successful! Please login.');
  };

  return (
    <div className="login-page-container">
      {/* Background Video */}
      <video autoPlay muted loop playsInline id="bgVideo" preload="auto">
        <source src="./food.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay"></div>

      <button className="login-back-button" onClick={() => navigate('/')}>← Back to home</button>

      <div className="auth-container">
        <div className="auth-box-glass">
          <h2>{isLogin ? 'Login' : 'Signup'}</h2>
          {error && <p className="auth-error">{error}</p>}

          {isLogin ? (
            <form onSubmit={handleLogin}>
              <input 
                type="text" 
                placeholder="Username " 
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                required
              />
              <input 
                type="password" 
                placeholder="Password " 
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                required
              />
              <button type="submit">Login</button>
              <p>
                Don't have an account? <span onClick={() => setIsLogin(false)}>Signup</span>
              </p>
            </form>
          ) : (
            <form onSubmit={handleSignup}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Signup</button>
              <p>
                Already have an account? <span onClick={() => setIsLogin(true)}>Login</span>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
