import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check credentials against localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const user = registeredUsers.find(
      (u) => u.email.trim().toLowerCase() === email.trim().toLowerCase() && u.password === password
    );
    if (user) {
      setError('');
      navigate('/');
    } else {
      setError('Incorrect email or password.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-section">
        <div className="login-content">
          <h2>Welcome Back <span role="img" aria-label="wave">👋</span></h2>
          <p className="login-desc">Please fill out the form below to secure your child's spot at our 2025 Summer Camp. Limited seats available!</p>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                placeholder="example@email.com" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                placeholder="At least 6 characters" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                required 
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <div className="login-actions">
              <button type="submit" className="login-btn">Sign In</button>
              <Link to="/" className="forgot-link">Forgot Password?</Link>
            </div>
          </form>
          <div className="login-or">OR</div>
          <div className="login-socials">
            <a
              className="social-btn google"
              href="https://accounts.google.com/signin"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign in with Google
            </a>
            <button className="social-btn facebook">Sign in with Facebook</button>
          </div>
          <div className="login-signup-link">
            Don't yet have an account? <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </div>
      <div className="login-image-section">
        <img 
          src={process.env.PUBLIC_URL + '/loginPhoto.jpg'} 
          alt="Login Here" 
          className="login-img" 
        />
      </div>
    </div>
  );
};

export default LoginPage; 