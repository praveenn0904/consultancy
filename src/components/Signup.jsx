import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';

function Signup() {
  const [form, setForm] = useState({email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await fetch('https://backend-8kv3.onrender.com/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Signup successful!');
        navigate('/');
      } else {
        alert(data.message || 'Signup failed');
      }
    } catch (err) {
      console.error('Signup error:', err);
      alert('Server error. Please try again.');
    }
  };

  return (
    <div className="main-container">
      <div className="left-panel" />
      <div className="right-panel">
        <div className="brand-name">Sre Amman Pharma Agency</div>
        <div className="tagline">Create Your Account</div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
           
          />
          <button type="submit">Sign Up</button>
        </form>

        <p>Already have an account? <Link to="/">Login here</Link></p>
      </div>
    </div>
  );
}

export default Signup;
