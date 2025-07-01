import React, { useState } from 'react';
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
    courts: ['Santhoshpuram', 'Vengaivasal', 'Noothancheri','Gowrivakkam']
  },
  {
    name: 'Thanjavur',
    path: '/thanjavur',
    courts: ['Evergreen nagar', 'Indhra nagar', 'Azhagammal nagar','Avin milk Depo']
  },
  {
    name: 'Tiruchirappalli',
    path: '/tiruchirapalli',
    courts: ['Shanmuga nagar', 'Karumandapam', 'Edamalaipatti','Woraiyur']
  },
  {
    name: 'Salem',
    path: '/salem',
    courts: ['Kannankurichi', 'Sankar nagar', 'KPN petrol bunk','Indian oil petrol bunk']
  },
  {
    name: 'Madurai',
    path: '/madurai',
    courts: ['Utchaparamedu', 'Narimedu', 'Gomathipuram','Namachivaya nagar']
  }
];

const CourtLocation = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDistricts = districts.filter((district) =>
    district.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="bg-cover bg-center min-h-screen overflow-y-auto"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full h-full min-h-screen backdrop-blur-md bg-black/50 py-10 px-4 transition duration-300">
        <h1 className="text-center text-4xl md:text-5xl font-extrabold text-cyan-400 drop-shadow-lg tracking-wide mb-10 animate-fade-in">
          🏸 Badminton Courts in District
        </h1>

        <div className="max-w-lg mx-auto mb-12">
          <input
            type="text"
            placeholder="Search for a district..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-3 rounded-xl shadow-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white/20 transition"
          />
        </div>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
          {filteredDistricts.map((district, index) => (
            <Link
              to={district.path}
              key={index}
              className="bg-gradient-to-br from-slate-900 via-gray-800 to-cyan-900/30 backdrop-blur-lg border border-cyan-500/20 p-6 rounded-3xl shadow-lg hover:shadow-cyan-400/50 hover:-translate-y-1 transform transition duration-300 text-white hover:bg-cyan-900/20"
            >
              <h2 className="text-2xl font-bold mb-3 text-cyan-300 border-b border-cyan-500 pb-2">
                {district.name}
              </h2>
              <ul className="list-disc list-inside text-white/90 space-y-1 text-sm pl-2 text-left">
                {district.courts.map((court, i) => (
                  <li key={i}>{court}</li>
                ))}
              </ul>
            </Link>
          ))}
          {filteredDistricts.length === 0 && (
            <div className="col-span-full text-center text-white/70 text-lg">
              No districts match your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourtLocation;
