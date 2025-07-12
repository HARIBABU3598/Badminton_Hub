import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5174/login', form);
      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        confirmButtonColor: '#3085d6'
      }).then(() => {
        setForm({ email: '', password: '' });
        navigate('/dashboard'); // redirect to dashboard
      });
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: err.response?.data || 'Invalid credentials!',
        confirmButtonColor: '#d33'
      });
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>
        <form onSubmit={handleLogin} style={styles.form} autoComplete="off">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
            required
            autoComplete="off"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            style={styles.input}
            required
            autoComplete="new-password"
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>
        <p style={styles.registerText}>
          Don't have an account? <Link to="/register" style={styles.registerLink}>Register</Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    height: '100vh',
    background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Segoe UI, sans-serif',
  },
  card: {
    background: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '40px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
    textAlign: 'center',
    width: '100%',
    maxWidth: '400px',
    color: '#ffffff',
  },
  title: {
    marginBottom: '24px',
    fontSize: '28px',
    fontWeight: '600',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1px solid #444',
    backgroundColor: '#222',
    color: '#fff',
    fontSize: '16px',
    outline: 'none',
  },
  button: {
    padding: '14px',
    background: 'linear-gradient(90deg, #00b4db, #0083b0)',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out',
  },
  registerText: {
    marginTop: '16px',
    fontSize: '14px',
    color: '#ccc',
  },
  registerLink: {
    color: '#00d2ff',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
};

export default Login;
