import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import bg from '../assets/bg.jpg';
import loginImage from '../assets/Login.jpg';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.email || !form.password) {
      Swal.fire({
        title: 'Validation Error',
        text: 'Please fill in all fields',
        icon: 'error',
        confirmButtonColor: '#dc2626',
        background: '#1f2937',
        color: '#fff'
      });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5174/login', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Login failed');
      }

      const text = await response.text(); // Expecting "Login successful"
      console.log('Login response:', text);

      Swal.fire({
        title: 'Login Successful!',
        text: `Welcome back, ${form.email.split('@')[0]}!`,
        icon: 'success',
        confirmButtonText: 'Continue',
        confirmButtonColor: '#2563eb',
        background: '#1f2937',
        color: '#fff',
        timer: 2000,
        timerProgressBar: true
      }).then(() => {
        navigate('/dashboard');
      });

    } catch (err) {
      console.error('Login error:', err);
      Swal.fire({
        title: 'Login Failed',
        text: err.message || 'Invalid email or password',
        icon: 'error',
        confirmButtonText: 'Try Again',
        confirmButtonColor: '#dc2626',
        background: '#1f2937',
        color: '#fff'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="bg-cover bg-center h-screen bg-black flex items-center justify-end"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className="h-[100%] w-[98%] mr-[1%] rounded border border-white/30 overflow-hidden"
        style={{
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(0, 0, 0, 0.6)"
        }}
      >
        <div className="flex flex-col items-center pt-3 h-full">
          <h1 className="text-white text-4xl font-semibold mb-3 bg-white/10 px-8 py-1 rounded backdrop-blur-sm">
            Welcome Back
          </h1>

          <div className="flex flex-col md:flex-row h-[79%] w-[60%] max-w-4xl bg-white/5 rounded-lg border border-white/20 backdrop-blur-sm overflow-hidden">
            <div className="w-full md:w-[60%] p-8 flex flex-col justify-center">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white"
                  required
                  autoComplete="username"
                />
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white pr-10"
                    required
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full ${loading ? 'bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white font-medium py-3 px-4 rounded-lg transition duration-200 mt-4 flex items-center justify-center`}
                >
                  {loading ? 'Signing In...' : 'Sign In'}
                </button>
              </form>

              <p className="text-white/70 text-sm mt-6 text-center">
                Don't have an account?{' '}
                <a href="/register" className="text-blue-300 hover:underline">
                  Register
                </a>
              </p>
            </div>

            <div className="hidden md:block md:w-[40%] h-full overflow-hidden">
              <img
                src={loginImage}
                alt="Login illustration"
                className="h-[100%] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
