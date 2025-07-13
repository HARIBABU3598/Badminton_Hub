import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bg from '../assets/bg.jpg';
import ancient from '../assets/icon/History/Ancient.png';
import nineteenth from '../assets/icon/History/19th.png';
import EST from '../assets/icon/History/1873.png';
import ENT from '../assets/icon/History/1893.png';
import NTF from '../assets/icon/History/1934.png';
import NNT from '../assets/icon/History/1992.png';
import present from '../assets/icon/History/Present.png';

const historyData = [
  { period: "Ancient Origins", image: ancient },
  { period: "Mid-19th Century", image: nineteenth },
  { period: "1873 – Official Birth in England", image: EST },
  { period: "1893 – Establishment of Badminton Association of England", image: ENT },
  { period: "1934 – Formation of International Body", image: NTF },
  { period: "1992 – Olympic Recognition", image: NNT },
  { period: "Present Day", image: present },
];

const History = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen overflow-y-auto"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="w-full min-h-screen bg-black/20 backdrop-blur-sm p-6">
        <center>
          <h1 className="text-white text-3xl font-bold bg-white/20 w-[40%] rounded p-2 mb-10">
            History
          </h1>
        </center>

        <div className="relative max-w-6xl mx-auto z-0">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/40 z-0"></div>

          {historyData.map((item, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });

            return (
              <motion.div
                ref={ref}
                key={index}
                className={`relative z-10 flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } my-10`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                {/* Image */}
                <div className="md:w-1/2 p-4 z-20">
                  <img
                    src={item.image}
                    alt={item.period}
                    className="w-full h-auto rounded-xl shadow-xl border"
                  />
                </div>

                {/* Center Dot and Label */}
                <div className="relative flex flex-col items-center md:mx-4 my-4 z-10">
                  <div className="text-white text-sm font-semibold bg-orange-600 px-3 py-1 rounded-full mb-2 whitespace-nowrap shadow-md">
                    {item.period}
                  </div>
                  <div className="w-4 h-4 bg-blue-500 border-4 border-white rounded-full shadow-md z-10"></div>
                </div>

                <div className="md:w-1/2 hidden md:block"></div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/dashboard"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-300"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default History;
