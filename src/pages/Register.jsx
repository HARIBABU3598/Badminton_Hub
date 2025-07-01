import React, { useState } from 'react';
import bg from '../assets/bg.jpg';
import register from '../assets/Register.png';

const Register = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5174/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, password: form.password })
      });

      const result = await response.text();

      if (response.ok) {
        alert('Registered successfully: ' + result);
        setForm({ email: '', password: '', confirmPassword: '' });
      } else {
        alert('Registration failed: ' + result);
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred during registration.');
    }
  };

  return (
    <div
      className="bg-cover bg-center h-screen bg-black flex items-center justify-end"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div 
        className="h-[100%] w-[98%] mr-[1%] rounded border border-white/30"
        style={{
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(0, 0, 0, 0.6)"
        }}
      >
        <div className="flex flex-col items-center pt-8">
          <h1 className="text-white text-4xl font-semibold mb-5 bg-white/10 px-8 py-1 rounded backdrop-blur-sm">
            Create Account
          </h1>

          <div className="flex h-[80%] w-[60%] ml-[25%] bg-white/5 rounded-lg border border-white/20 backdrop-blur-sm mr-[25%]">
            <div className="h-[100%] w-[61%] rounded p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
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
                    minLength="8"
                  />
                </div>

                <div>
                  <input 
                    type="password" 
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 mt-6"
                >
                  Register Now
                </button>
              </form>

              <p className="text-white/70 text-sm mt-4 text-center">
                Already have an account?{' '}
                <a href="/login" className="text-blue-300 hover:underline">
                  Sign In
                </a>
              </p>
            </div>

            <div className="h-[100%] w-[39%] overflow-hidden rounded-r-lg">
              <img 
                src={register} 
                alt="Registration illustration" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
