import React from 'react';
import bg from '../assets/bg.jpg';
import Gopichand from '../assets/icon/Gopichand.png';
import Kumar from '../assets/icon/Kumar.png';
import Rajavel from '../assets/icon/Rajavel.png';
import Tuvin from '../assets/icon/Tuvin.png';

const salemCourts = [
  {
    name: "Pullela Gopichand Badminton Academy",
    number: "98428 33885",
    location: "KPN petrol bank, Salem",
    image: Gopichand
  },
  {
    name: "Kumar Badminton Academy Salem",
    number: "97919 08606",
    location: "Kannankurichi, Salem",
    image: Kumar
  },
  {
    name: "Rajavel Badminton Acadamy",
    number: "94437 00010",
    location: "Sankar Nagar, Salem",
    image: Rajavel
  },
  {
    name: "Tuvin Badminton Academy",
    number: "99941 16323",
    location: "Indian oil petrol bunk, Salem",
    image: Tuvin
  }
];

const Salem = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen bg-black overflow-y-auto"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full h-full backdrop-blur-2xl bg-black/40">
        <div className="text-center py-6">
          <h1 className="text-white text-4xl font-bold bg-white/20 inline-block px-6 py-2 rounded-full shadow-md">
            🏈 Salem District Clubs
          </h1>
        </div>
        <div className="h-[2px] w-[80%] mx-auto bg-white mb-6"></div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-8 pb-10">
          {salemCourts.map((court, index) => (
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

export default Salem;
