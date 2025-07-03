import React, { useEffect } from 'react';
import bg from '../assets/bg.jpg';
import shuttle from '../assets/shuttle.png';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    // Fetch user data after login (example endpoint)
    fetch('http://localhost:8080/api/user/me', {
      method: 'GET',
      credentials: 'include', // If using cookies/session-based auth
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.userId) {
          localStorage.setItem('userId', data.userId);
        }
      })
      .catch((err) => console.error('Error fetching user info:', err));
  }, []);

  return (
    <div
      className="bg-cover bg-center h-screen bg-black"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center space-x-4">
          <img src={shuttle} alt="Shuttlecock" className="w-16 h-auto" />
          <h1 className="text-4xl font-bold text-white font-serif">Badminton Hub</h1>
        </div>

        <div className="flex space-x-4">
          <Link to="/about">
            <button className="bg-white px-4 py-2 font-bold rounded font-mono hover:bg-gray-200">
              About Us
            </button>
          </Link>
          <Link to="/contact">
            <button className="bg-white px-4 py-2 font-bold rounded font-mono hover:bg-gray-200">
              Contact
            </button>
          </Link>
          <button className="bg-yellow-500 px-4 py-2 font-bold rounded font-mono hover:bg-yellow-300">
            Our Club
          </button>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="flex justify-end pr-16 pt-24">
        <div
          className="max-w-xl p-6 rounded text-left backdrop-blur-md"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <p className="text-white text-5xl font-bold">Smash your limits</p>
          <p className="mt-4 text-white text-2xl font-bold">
            Your ultimate destination for badminton news, gear,
          </p>
          <p className="text-white text-2xl font-bold">
            training, and tournaments.
          </p>
          <Link to="/tournament">
            <button className="mt-6 px-6 py-2 bg-green-500 text-white text-xl font-bold rounded font-mono hover:bg-green-400">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
