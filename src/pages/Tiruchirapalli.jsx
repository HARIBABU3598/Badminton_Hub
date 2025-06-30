import React from 'react';
import bg from '../assets/bg.jpg';
import Drona from '../assets/icon/Drona.png';
import Ocean from '../assets/icon/Ocean.png';
import SN from '../assets/icon/SN.png';
import Nethaji from '../assets/icon/Nethaji.png';

const courts = [
  {
    name: "Drona Badminton Academy",
    location: "Edamalaipatti Pudur, Trichy",
    number: "+91 99014 31007",
    image: Drona
  },
  {
    name: "Ocean Badminton Academy",
    location: "Shanmuga Nagar, Tiruchirappalli",
    number: "+91 94444 47008",
    image: Ocean
  },
  {
    name: "SN Badminton Academy",
    location: "Karumandapam, Tiruchirappalli",
    number: "+91 88384 00248",
    image: SN
  },
  {
    name: "Nethaji Badminton Academy",
    location: "Woraiyur, Tiruchirappalli",
    number: "+91 81228 66914",
    image: Nethaji
  }
];

const Trichy = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen bg-black overflow-y-auto"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full h-full backdrop-blur-2xl bg-black/40">
        <div className="text-center py-6">
          <h1 className="text-white text-4xl font-bold bg-white/20 inline-block px-6 py-2 rounded-full shadow-md">
            🏸 Trichy District Clubs
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

export default Trichy;
