import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/bg.jpg';
import shuttle from '../assets/shuttle.png'
import { Search } from 'lucide-react';
import Login from '../assets/icon/Courts.png'
import Rules from '../assets/icon/Rules.png'
import History from '../assets/icon/History.png'
import Faults from '../assets/icon/Faults.png'
import Score from '../assets/icon/Score.png'
import Training from '../assets/icon/Training.png'
import Equip from '../assets/icon/Equip.png'
import Shots from '../assets/icon/Shots.png'
import Shop from '../assets/icon/Shop.png'

const sections = [
  { title: 'History', icon: History, path: '/history' },
  { title: 'Rules and Regulations', icon: Rules, path: '/rules' },
  { title: 'Faults', icon: Faults, path: '/faults' },
  { title: 'Shots', icon: Shots, path: '/shots' },
  { title: 'Match Scorecard', icon: Score, path: '/score' },
  { title: 'Training and Workouts', icon: Training, path: '/training' },
  { title: 'Courts Location', icon: Login, path: '/location' },
  { title: 'Nearby Sport Shops', icon: Shop, path: '/shop' },
  { title: 'Materials', icon: Equip, path: '/materials' },
];



const Dashboard = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen bg-black"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="min-h-screen w-full px-8 py-4" style={{ backdropFilter: 'blur(20px)' }}>
        <div className="flex items-center justify-between flex-wrap gap-4 bg-white/20 backdrop-blur-md p-4 rounded-lg shadow-md">
  {/* Logo & Title */}
  <div className="flex items-center space-x-4">
    <img src={shuttle} alt="Shuttlecock" className="w-16 h-auto" />
    <h1 className="text-3xl sm:text-4xl font-bold text-white font-serif">Dashboard</h1>
  </div>

  {/* Search Bar */}
  <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md w-full sm:w-[50%]">
    <Search className="w-5 h-5 text-gray-500 mr-2" />
    <input
      type="text"
      placeholder="Search your needs"
      className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500"
    />
  </div>
</div>

        <div className="w-[100%] h-[2px] bg-white mb-8"></div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map(({ title, icon, path }, index) => (
  <Link to={path} key={index}>
    <div className="bg-white text-black rounded-lg px-4 py-4 shadow-lg hover:bg-white/30 hover:text-white transition border">
      <div className="flex items-center space-x-3 mb-2">
        <h2 className="text-2xl font-bold text-center">{title}</h2>
      </div>
      <div className="w-full h-[2px] bg-black"></div>
      <img src={icon} alt={title} className="mt-[2%] w-full h-80 object-cover rounded" />
    </div>
  </Link>
))}



        </div>
      </div>
    </div>
  );
};

export default Dashboard;
