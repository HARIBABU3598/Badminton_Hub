import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import bg from '../assets/bg.jpg';

import agilityImg from '../assets/training/Agility.png';
import strokes from '../assets/training/Strokes.png';
import strength from '../assets/training/Strength.png';
import warmUp from '../assets/training/WarmUp.png';
import warmDown from '../assets/training/WarmDown.png';
import weekly from '../assets/training/Weekly.png';

const sections = [
  {
    title: "Warm-Up",
    image: warmUp,
    link: "/warmup",
    points: [
      "Light exercises done before intense activity.",
      "Increases heart rate and blood flow to muscles.",
      "Improves flexibility and joint mobility.",
      "Reduces injury risk by preparing the body.",
      "Includes jogging, dynamic stretches, and shadow practice."
    ]
  },
  {
    title: "Strength Training",
    image: strength,
    link: "/strength",
    points: [
      "Builds muscle power and endurance.",
      "Improves balance, shot power, and control.",
      "Protects joints and prevents injuries.",
      "Includes squats, lunges, push-ups, and planks.",
      "Resistance bands used for shoulder stability."
    ]
  },
  {
    title: "Agility Training",
    image: agilityImg,
    link: "/agility",
    points: [
      "Enhances quick directional movements.",
      "Boosts reaction time and coordination.",
      "Improves foot speed for court coverage.",
      "Includes ladder and cone drills, jump rope.",
      "Mimics real match conditions with sprints."
    ]
  },
  {
    title: "Strokes Training",
    image: strokes,
    link: "/strokes",
    points: [
      "Improves technique for all shot types.",
      "Enhances consistency and accuracy.",
      "Includes shadow drills and multi-shuttle practice.",
      "Net play drills cover kills, lifts, and dribbles.",
      "Partner rallies simulate real gameplay."
    ]
  },
  {
    title: "Weekly Schedule",
    image: weekly,
    link: "/weekly",
    points: [
      "Mon: Warm-up, Strength, Strokes.",
      "Tue: Agility and Match practice.",
      "Wed: Light recovery workouts.",
      "Thu: Warm-up, Strength, Agility.",
      "Fri–Sun: Strokes, simulation, and rest."
    ]
  },
  {
    title: "Warm-Down",
    image: warmDown,
    link: "/warmdown",
    points: [
      "Light jogging helps lower heart rate.",
      "Static stretches improve recovery.",
      "Deep breathing relaxes muscles.",
      "Prevents soreness and stiffness.",
      "Hydration and nutrition are essential after training."
    ]
  },
];

const Training = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-cover bg-center py-10 px-4 md:px-10"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backdropFilter: 'blur(10px)'
      }}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full mx-auto bg-black/60 backdrop-blur-md rounded-lg shadow-xl p-6 md:p-10"
      >
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white text-4xl md:text-5xl font-bold mb-10 text-center underline decoration-blue-400"
        >
          Badminton Training Program
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {sections.map((section, index) => (
            <Link to={section.link} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col md:flex-row bg-white/10 p-6 rounded-lg shadow-md border border-white/20 cursor-pointer"
              >
                <div className="md:w-1/2 w-full flex justify-center items-center mb-2">
                  <motion.img
                    src={section.image}
                    alt={section.title}
                    className="rounded-lg w-[300px] h-[250px] object-cover shadow-md"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="md:w-1/2 w-full">
                  <h2 className="text-xl text-white font-semibold mb-4 border-b border-white/30 pb-2">
                    {section.title}
                  </h2>
                  <ul className="list-disc list-inside text-left text-white text-sm space-y-2">
                    {section.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/dashboard"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-300"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Training;
