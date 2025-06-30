import React from 'react';
import bg from '../assets/bg.jpg';
import ABC from '../assets/icon/ABC.png';
import KBC from '../assets/icon/KBC.png';
import KaBC from '../assets/icon/KaBC.png';
import EBC from '../assets/icon/EBC.png';

const courts = [
  {
    name: 'Arul Badminton Club',
    location: 'Annamalai Nagar, Chidambaram',
    number: '+91 98765 43210',
    image: ABC
  },
  {
    name: 'Kavikanna Badminton Club',
    location: 'B.Mutlur, Bhuvanagiri',
    number: '+91 79471 17951',
    image: KBC
  },
  {
    name: 'Kathiravan Badminton Club',
    location: 'Vandigate, Chidambaram',
    number: '+91 91234 56789',
    image: KaBC
  },
  {
    name: 'Elite Badminton Club',
    location: 'NLC Officers Nagar, Vadalur',
    number: '+91 99408 63145',
    image: EBC
  }
];

const Cuddalore = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen bg-black overflow-y-auto"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full h-full backdrop-blur-2xl bg-black/40">
        <div className="text-center py-6">
          <h1 className="text-white text-4xl font-bold bg-white/20 inline-block px-6 py-2 rounded-full shadow-md">
            🏸 Cuddalore District Clubs
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

export default Cuddalore;
