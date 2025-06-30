import React from 'react';
import bg from '../assets/bg.jpg';
import DC from '../assets/icon/DC.png';
import Vijay from '../assets/icon/Vijay.png';
import JoJerry from '../assets/icon/JoJerry.png';
import RP22 from '../assets/icon/RP22.png';

const courts = [
  {
    name: 'Dc Sports Academy',
    location: 'Santhoshpuram, Chennai-600073',
    number: '+91 79426 96429',
    image: DC
  },
  {
    name: 'Vijay Sports Academy',
    location: 'Santhoshpuram, Chennai-600073',
    number: '+91 72999 86350',
    image: Vijay
  },
  {
    name: 'Jo & Jerry',
    location: 'Vengavasal, Chennai, Tamil Nadu 600126',
    number: '+91 98401 08637',
    image: JoJerry
  },
  {
    name: 'RP22 Badminton Academy',
    location: 'Akshayam Roheline, Gandhi Nagar Road, Noothencheri, Vengavasal',
    number: '+91 81222 09225',
    image: RP22
  }
];

const Chengalpattu = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen bg-black overflow-y-auto"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full h-full backdrop-blur-2xl bg-black/40">
        <div className="text-center py-6">
          <h1 className="text-white text-4xl font-bold bg-white/20 inline-block px-6 py-2 rounded-full shadow-md">
            🏸 Chengalpattu District Clubs
          </h1>
        </div>
        <div className="h-[2px] w-[80%] mx-auto bg-white mb-6"></div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-8 pb-10">
          {courts.map((court, index) => (
            <div
              key={index}
              className="bg-white/90 rounded-xl shadow-xl backdrop-blur-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={court.image}
                alt={court.name}
                className="w-full h-36 object-cover"
              />
              <div className="text-left p-5 text-gray-800">
                <h2 className="text-xl font-bold">{court.name}</h2>
                <h6 className="mt-1 text-sm">📍 {court.location}</h6>
                <p className="mt-1 text-sm">📞 {court.number}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chengalpattu;
