import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './RegisterPage.css';

const RegisterPage = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store registration data in localStorage
    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const newUser = { name: form.name, email: form.email, password: form.password };
    localStorage.setItem('registeredUsers', JSON.stringify([...existingUsers, newUser]));
    
    emailjs.send(
      'service_whkayfg', // Service ID
      'template_ug8b2su', // Template ID
      {
        user_name: form.name,
        to_email: form.email,
        from_name: 'Summer Camp Team',
      },
      'LxBDsoWPApKmiVm1_' // Public Key
    ).then(
      (result) => {
        setMessage('Registration successful! Confirmation email sent.');
        setForm({ name: '', email: '', password: '' });
      },
      (error) => {
        setMessage('Failed to send email. Please try again.');
      }
    );
  };

  return (
    <div className="register-container">
      <div className="register-form-section">
        <h2>Register for Camp <span role="img" aria-label="party">🎉</span></h2>
        <p className="register-desc">Sign up to secure your child's spot at our 2025 Summer Camp!</p>
        <form className="register-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input name="name" type="text" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <label>Email</label>
          <input name="email" type="email" placeholder="example@email.com" value={form.email} onChange={handleChange} required />
          <label>Password</label>
          <input name="password" type="password" placeholder="At least 6 characters" value={form.password} onChange={handleChange} required />
          <button type="submit" className="register-btn">Register</button>
        </form>
        {message && <div className="register-message">{message}</div>}
        <div className="register-login-link">
          Already have an account? <Link to="/login">Sign in</Link>
        </div>
      </div>
      <div className="register-image-section">
        <img src="https://img.freepik.com/free-vector/kids-camping-forest_1308-32484.jpg?w=826&t=st=1718030000~exp=1718030600~hmac=sample" alt="Register Here" className="register-img" />
        <div className="register-img-text">Register Here</div>
      </div>
    </div>
  );
};

export default RegisterPage; 