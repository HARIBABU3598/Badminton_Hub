import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import bg from '../assets/bg.jpg';
import shuttle from '../assets/shuttle.png';

const Home = () => {
  return (
    <motion.div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <motion.header
          className="bg-gradient-to-r from-purple-800 via-indigo-900 to-blue-900 bg-opacity-90 text-white px-6 py-4 flex flex-col md:flex-row justify-between items-center shadow-md"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3 md:mb-0">
            <img src={shuttle} alt="Shuttle" className="w-12 h-12" />
            <h1 className="text-2xl sm:text-3xl font-bold font-serif">Badminton Hub</h1>
          </div>

          <nav className="flex gap-3 text-sm sm:text-base">
            <Link to="/about">
              <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 font-semibold transition-all">About</button>
            </Link>
            <Link to="/contact">
              <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 font-semibold transition-all">Contact</button>
            </Link>
            <Link to="/club">
              <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 font-semibold transition-all">Our Players</button>
            </Link>
          </nav>
        </motion.header>

        {/* Main Section */}
        <motion.main
          className="flex flex-1 items-center justify-center px-6 py-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-full max-w-4xl bg-white/10 border border-white/20 backdrop-blur-lg p-8 rounded-xl shadow-xl text-center text-white">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">Smash Your Limits</h2>
            <p className="text-base sm:text-lg text-gray-300 mb-6">
              Discover tournaments, connect with clubs, and level up your badminton journey.
            </p>
            <Link to="/dashboard">
              <button className="px-6 py-3 text-lg font-bold rounded bg-teal-500 hover:bg-teal-400 transition-all">
                Get Started
              </button>
            </Link>
          </div>
        </motion.main>

        {/* Footer */}
        <motion.footer
          className="text-center text-sm text-gray-400 py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          © {new Date().getFullYear()} Badminton Hub. All rights reserved.
        </motion.footer>
      </div>
    </motion.div>
  );
};

export default Home;
