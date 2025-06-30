import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/bg.jpg';

const districts = [
  {
    name: 'Cuddalore',
    path: '/cuddalore',
    courts: ['Chidambaram', 'Bhuvanagiri', 'Cuddalore', 'Vadalur']
  },
  {
    name: 'Chengalpattu',
    path: '/chengalpattu',
    courts: ['Yonex Arena', 'Shuttle Spot', 'Smash Fitness Hub']
  },
  {
    name: 'Thanjavur',
    path: '/thanjavur',
    courts: ['Madurai Sports Complex', 'Birdie Court', 'Power Smash']
  },
  {
    name: 'Tiruchirappalli',
    path: '/tiruchirapalli',
    courts: ['Trichy Indoor Arena', 'SmashPoint', 'Sky Court']
  },
  {
    name: 'Salem',
    path: '/salem',
    courts: ['Salem Smashers Club', 'Indoor Shuttle Zone', 'Rapid Racquets']
  },
  {
    name: 'Madurai',
    path: '/madurai',
    courts: ['Madurai Sports Complex', 'Birdie Court', 'Power Smash']
  }
];

const CourtLocation = () => {
  return (
    <div
      className="bg-cover bg-center h-screen bg-black overflow-y-auto"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full h-full" style={{ backdropFilter: 'blur(20px)' }}>
        <center>
          <h1 className="text-white text-3xl font-bold bg-white/20 rounded p-2 w-[40%] mt-4">
            District wise Badminton Courts
          </h1>
        </center>
        <div className="mt-2 w-full h-[1px] bg-white"></div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {districts.map((district, index) => (
            <Link
              to={district.path}
              key={index}
              className="bg-white p-4 rounded shadow text-black hover:bg-gray-100 transition cursor-pointer"
            >
              <h2 className="text-xl font-semibold mb-2">{district.name}</h2>
              <div className="w-full h-[2px] bg-black mb-2"></div>
              <ul className="text-left list-disc list-inside">
                {district.courts.map((court, i) => (
                  <li key={i}>{court}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourtLocation;
