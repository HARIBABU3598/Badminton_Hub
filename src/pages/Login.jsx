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

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5174/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const result = await response.json();

      if (response.ok) {
        // Save both userId and username to localStorage
        localStorage.setItem('userId', result.userId);
        localStorage.setItem('username', result.username || form.email);

        Swal.fire({
          title: 'Login Successful!',
          text: 'Welcome back!',
          icon: 'success',
          confirmButtonText: 'Go to Dashboard',
          confirmButtonColor: '#2563eb',
          background: '#1f2937',
          color: '#fff'
        }).then(() => {
          navigate('/dashboard');
        });
      } else {
        Swal.fire({
          title: 'Login Failed',
          text: result.message || 'Invalid credentials',
          icon: 'error',
          confirmButtonText: 'Try Again',
          confirmButtonColor: '#dc2626',
          background: '#1f2937',
          color: '#fff'
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: 'Error',
        text: 'Something went wrong!',
        icon: 'error',
        background: '#1f2937',
        color: '#fff'
      });
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
                <div>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white"
                    required
                  />
                </div>

                <div>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white"
                    required
                  />
                  <div className="flex justify-end mt-2">
                    <a href="/forgot-password" className="text-sm text-blue-300 hover:underline">
                      Forgot Password?
                    </a>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 mt-4"
                >
                  Sign In
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
