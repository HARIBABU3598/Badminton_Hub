import React from 'react';
import { motion } from 'framer-motion';
import strokesImg from '../assets/training/Strokes.png';
import { Link } from 'react-router-dom';

import multi from '../assets/strokes/multi.png';
import net from '../assets/strokes/net.png';
import partner from '../assets/strokes/partner.png';
import shadow from '../assets/strokes/shadow.png';
import smash from '../assets/strokes/smash.png';

const components = [
  {
    title: "1. Shadow Drills",
    image: shadow,
    points: [
      "Practice stroke movements without a shuttle.",
      "Focus on correct grip, swing path, and timing.",
      "Improves footwork alignment and body balance.",
      "Helps in building muscle memory and consistency."
    ]
  },
  {
    title: "2. Multi-Shuttle Drills",
    image: multi,
    points: [
      "Feed multiple shuttles in rapid succession.",
      "Trains fast recovery and reaction under pressure.",
      "Improves stroke repetition and accuracy.",
      "Builds aerobic endurance and concentration."
    ]
  },
  {
    title: "3. Net Play Drills",
    image: net,
    points: [
      "Emphasize net kills, net lifts, and tight dribbles.",
      "Enhances control and deception near the net.",
      "Develops soft hands and quick reactions.",
      "Boosts anticipation and front-court dominance."
    ]
  },
  {
    title: "4. Smash & Clear Practice",
    image: smash,
    points: [
      "Alternate between deep clears and powerful smashes.",
      "Improves arm strength and timing for explosive shots.",
      "Teaches shot variation for offensive transitions.",
      "Builds shot endurance and recovery speed."
    ]
  },
  {
    title: "5. Partner Rallies",
    image: partner,
    points: [
      "Rally with a partner to mimic match pace.",
      "Focus on consistency and shot placement.",
      "Improves rhythm, decision-making, and mental sharpness.",
      "Simulates pressure situations for better match prep."
    ]
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 }
  })
};

const Strokes = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white py-12 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-center text-4xl md:text-5xl font-bold mb-12 underline decoration-blue-500"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          🏸 Strokes Training in Badminton
        </motion.h1>

        {/* Hero Section */}
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center gap-10 mb-14"
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="md:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-300 text-base leading-relaxed">
              Strokes training builds precision, power, and confidence for every shot type. Regular practice of net play, smashes,
              clears, and rallies helps players adapt their technique to different match situations and improve overall performance.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={strokesImg}
              alt="Strokes Training"
              className="rounded-2xl shadow-2xl w-[320px] h-[240px] object-cover border border-white/20"
            />
          </motion.div>
        </motion.div>

        {/* Training Components */}
        <div className="space-y-6">
          {components.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col md:flex-row items-start gap-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-md hover:bg-white/15 transition"
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-[300px] h-[300px] object-cover rounded-lg shadow-lg border border-white/20"
              />
              <div>
                <h2 className="text-xl font-semibold text-blue-400 mb-2">{item.title}</h2>
                <ul className="list-disc list-inside text-sm text-gray-100 space-y-1 text-left">
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

export default Strokes;
