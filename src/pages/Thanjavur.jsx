import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import bg from '../assets/bg.jpg';
import Dhrona from '../assets/icon/Dhrona.png';
import AYA from '../assets/icon/AYA.png';
import VelTam from '../assets/icon/VelTam.png';
import Balaji from '../assets/icon/Balaji.png';

const thanjavurCourts = [
  {
    name: "DHRONA'S ACADEMY",
    number: "95979 99979",
    location: "Evergreen Nagar, Thanjavur",
    image: Dhrona,
    mapLink: "https://maps.app.goo.gl/gZPAxxayjivgzL8WA"
  },
  {
    name: "A.Y.A Sports and Family Club",
    number: "95006 86829",
    location: "Aavin Milk Depot, Thanjavur",
    image: AYA,
    mapLink: "https://maps.app.goo.gl/pCiAmgpNza7qcnYK9"
  },
  {
    name: "VelTam",
    number: "94865 79376",
    location: "Indira Nagar, Thanjavur",
    image: VelTam,
    mapLink: "https://maps.app.goo.gl/DLvcfXHccapghXDp7"
  },
  {
    name: "Balaji Sports Academy",
    number: "73970 80403",
    location: "AVP Azhagammal Nagar, Thanjavur",
    image: Balaji,
    mapLink: "https://maps.app.goo.gl/DHWNnCf43Ztz3Xns8"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Thanjavur = () => {
  return (
    <motion.div
      className="bg-cover bg-center min-h-screen bg-black overflow-y-auto"
      style={{ backgroundImage: `url(${bg})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full h-full backdrop-blur-2xl bg-black/40">
        <div className="text-center py-6">
          <motion.h1
            className="text-white text-4xl font-bold bg-white/20 inline-block px-6 py-2 rounded-full shadow-md"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            🏸 Thanjavur District Clubs
          </motion.h1>
        </div>

        <div className="h-[2px] w-[80%] mx-auto bg-white mb-6" />

        <motion.div
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-8 pb-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {thanjavurCourts.map((court, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white/90 rounded-xl shadow-xl backdrop-blur-md overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300"
            >
              <img
                src={court.image}
                alt={court.name}
                className="w-full h-36 object-cover"
              />
              <div className="text-left p-5 text-gray-800">
                <h2 className="text-xl font-bold">{court.name}</h2>
                <h6 className="mt-1 text-sm">📍 {court.location}</h6>
                <p className="mt-1 text-sm">
                  📞 {court.number}
                  <br />
                  <a
                    href={court.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 text-sm bg-cyan-600 text-white px-3 py-1.5 rounded-full hover:bg-cyan-700 transition duration-200 shadow"
                  >
                    📍 View on Map
                  </a>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center pb-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link
              to="/location"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-300"
            >
              ← Back
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Thanjavur;
