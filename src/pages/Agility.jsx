import React from 'react';
import { motion } from 'framer-motion';
import agilityImg from '../assets/training/Agility.png';
import { Link } from 'react-router-dom';
import cone from '../assets/agility/cone.png';
import ladder from '../assets/agility/ladder.png';
import rope from '../assets/agility/rope.png';
import split from '../assets/agility/split.png';
import sprint from '../assets/agility/sprint.png';

const components = [
  {
    title: "1. Ladder Drills",
    points: [
      "Enhances foot speed, coordination, and agility.",
      "Includes drills like high-knees, in-and-outs, and lateral steps.",
      "Helps with fast direction changes on court."
    ],
    image: ladder
  },
  {
    title: "2. Cone Drills",
    points: [
      "Improves body control and acceleration.",
      "Use zig-zag or T-patterns to simulate rally movement.",
      "Develops sharp directional reflexes."
    ],
    image: cone
  },
  {
    title: "3. Split-Step Practice",
    points: [
      "Sharpens reaction time and anticipation.",
      "Focuses on landing in a balanced stance before moving.",
      "Mimics opponent shuttle timing for better readiness."
    ],
    image: split
  },
  {
    title: "4. Jump Rope",
    points: [
      "Boosts endurance and foot rhythm.",
      "Develops ankle strength and agility.",
      "Includes double-unders, single-leg hops, and fast skips."
    ],
    image: rope
  },
  {
    title: "5. Court Sprint Intervals",
    points: [
      "Simulates in-game shuttle runs corner to corner.",
      "Increases match fitness and movement efficiency.",
      "Focus on quick recovery and explosive steps."
    ],
    image: sprint
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 }
  })
};

const Agility = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white py-12 px-4 sm:px-6 lg:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-center text-4xl md:text-5xl font-bold underline decoration-blue-500 mb-12"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          ⚡ Agility Training in Badminton
        </motion.h1>

        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-14">
          <motion.div
            className="md:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Agility is vital in badminton for sharp directional changes and quick recovery. These drills develop explosive court speed, reactive footwork, and dynamic balance for fast-paced matches.
            </p>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={agilityImg}
              alt="Agility Training"
              className="rounded-2xl shadow-2xl w-[320px] h-[240px] object-cover border border-white/20"
            />
          </motion.div>
        </div>

        {/* Training Components */}
        <div className="space-y-8">
          {components.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col md:flex-row gap-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-md hover:bg-white/15 transition"
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="md:w-[280px] flex-shrink-0">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[300px] object-cover rounded-lg border border-white/20 shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-blue-400 mb-3">{item.title}</h2>
                <ul className="list-disc list-inside text-left text-gray-100 space-y-1">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back Button */}
        <motion.div
          className="mt-12 text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/training"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-300"
          >
            ← Back to Training Program
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Agility;
