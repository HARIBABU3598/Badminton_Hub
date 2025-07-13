import React from 'react';
import { motion } from 'framer-motion';
import warmUpMain from '../assets/training/WarmUp.png';
import cardioImg from '../assets/training/cardio.png';
import stretchImg from '../assets/training/stretch.png';
import mobilityImg from '../assets/training/mobility.png';
import footworkImg from '../assets/training/footwork.png';
import shadowImg from '../assets/training/shadow.png';
import { Link } from 'react-router-dom';

const components = [
  {
    title: "1. Light Cardio",
    points: [
      "Perform 5–10 minutes of light jogging, skipping, or shuttle runs.",
      "Elevates heart rate and increases blood circulation.",
      "Warms up muscles to prevent injury and prepare for intense play.",
      "Incorporate direction changes to simulate court movement."
    ],
    image: cardioImg,
  },
  {
    title: "2. Dynamic Stretching",
    points: [
      "Use controlled movements like leg swings, arm circles, and lunges.",
      "Activates joints and major muscle groups before explosive actions.",
      "Improves flexibility while keeping muscles warm.",
      "Prepares the body dynamically without static holding."
    ],
    image: stretchImg,
  },
  {
    title: "3. Mobility Drills",
    points: [
      "Do ankle bounces, shoulder rolls, and wrist circles.",
      "Increases range of motion and reduces stiffness.",
      "Promotes fluid movement and injury prevention.",
      "Improves balance, posture, and flexibility for fast footwork."
    ],
    image: mobilityImg,
  },
  {
    title: "4. Footwork Activation",
    points: [
      "Engage in ladder drills, quick shuffles, and split-steps.",
      "Stimulates lower-body explosiveness and muscle memory.",
      "Improves lateral and diagonal movement control.",
      "Prepares the legs for rapid directional changes in play."
    ],
    image: footworkImg,
  },
  {
    title: "5. Shadow Practice",
    points: [
      "Mimic clears, drops, net shots, and smashes without a shuttle.",
      "Activates the full body with badminton-specific movements.",
      "Improves stroke timing, balance, and positioning.",
      "Mentally prepares for match conditions with fluid form."
    ],
    image: shadowImg,
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

const WarmUp = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 text-white py-12 px-6 font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-center text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 text-transparent bg-clip-text animate-pulse"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          🏸 Badminton Warm-Up Routine
        </motion.h1>

        {/* Intro Section */}
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center gap-10 mb-16"
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              A well-designed warm-up boosts blood flow, prepares joints, and activates muscles for explosive rallies.
              This routine enhances readiness and reduces injury risks by targeting the body’s most used systems in badminton.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={warmUpMain}
              alt="Warm-Up"
              className="rounded-3xl shadow-2xl w-[320px] h-[240px] object-cover border border-white/20 hover:scale-105 transition duration-500 ease-in-out"
            />
          </motion.div>
        </motion.div>

        {/* Component Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {components.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg transition hover:shadow-cyan-500/30 transform hover:scale-[1.02]"
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[300px] object-cover rounded-lg shadow-md mb-4 transition duration-300 hover:shadow-lg hover:shadow-blue-500/40"
              />
              <h2 className="text-xl font-bold text-cyan-400 mb-3">{item.title}</h2>
              <ul className="list-disc list-inside text-gray-100 text-sm space-y-1 text-left">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Back Button */}
        <motion.div
          className="mt-16 text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/training"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 text-lg font-semibold"
          >
            ← Back to Training Program
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WarmUp;
