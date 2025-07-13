import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Arul from '../assets/players/Arul.png';
import Vasi from '../assets/players/vasi.png';
import Saravanan from '../assets/players/Sarav.jpg';
import Yudhan from '../assets/players/Yudhan.png';
import Haribabu from '../assets/players/Hari.png';
import Harikrishnan from '../assets/players/HK.png';
import Santhosh from '../assets/players/Santhosh.png';
import Sriram from '../assets/players/sriram.png';
import Bala from '../assets/players/Bala.png';
import Sabarish from '../assets/players/Sabarish.png';
import Munish from '../assets/players/Munish.png';
import Kathir from '../assets/players/Kathir.png';
import Balamurugan from '../assets/players/Balamurugan.png'

const player = [
  { name: "T Arul Gnanaprakasam", image: Arul },
  { name: "S Balamurugan", image: Balamurugan },
  { name: "S Saravana Kumar", image: Saravanan },
  { name: "M Yudhan Prakash", image: Yudhan },
  { name: "A Haribabu", image: Haribabu },
  { name: "M Vasishtan", image: Vasi },
  { name: "M Harikrishnan", image: Harikrishnan },
  { name: "M Santhosh", image: Santhosh },
  { name: "T Vetrivelan", image: Sriram },
  { name: "K Balamurugan", image: Bala },
  { name: "B Sabarish", image: Sabarish },
  { name: "R Kesava Munish", image: Munish },
  { name: "A E Kathirvelan", image: Kathir }
];


const ClubPage = () => {
  return (
    <motion.div
      className="bg-gray-100 min-h-screen text-gray-800 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center text-green-700 mb-6"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Our Players
        </motion.h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {player.map((playerr, index) => (
            <motion.div
              key={index}
              className="bg-green-50 p-4 rounded-lg flex flex-col items-center shadow-md text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <img
                src={playerr.image}
                alt={playerr.name}
                className="w-30 h-30 rounded-full object-cover border border-gray-300 mb-2"
              />
              <p className="text-green-900 font-semibold text-sm sm:text-base">{playerr.name}</p>
              
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Link
            to="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-300 mb-5"
          >
            ← Back
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ClubPage;
