import React from 'react';
import { motion } from 'framer-motion';
import warmDownImg from '../assets/training/WarmDown.png';
import { Link } from 'react-router-dom';
import deep from '../assets/warmdown/deep.png';
import foam from '../assets/warmdown/foam.png';
import hydration from '../assets/warmdown/hydration.png';
import jog from '../assets/warmdown/job.png';
import stretch from '../assets/warmdown/stretch.png';

const steps = [
  {
    title: "1. Light Jogging",
    points: [
      "Gradually reduces heart rate after intense play.",
      "Flushes out lactic acid from worked muscles.",
      "Supports safe transition to a resting state.",
      "Loosens tight muscles and prevents cramping."
    ],
    image: jog
  },
  {
    title: "2. Static Stretching",
    points: [
      "Hold each stretch for 20–30 seconds without bouncing.",
      "Target key muscles: hamstrings, quads, calves, shoulders, and back.",
      "Relieves post-game tension and promotes flexibility.",
      "Reduces the risk of soreness and stiffness the next day."
    ],
    image: stretch
  },
  {
    title: "3. Deep Breathing",
    points: [
      "Inhale deeply through the nose and exhale slowly through the mouth.",
      "Lowers stress and calms the nervous system.",
      "Helps regulate oxygen intake for better recovery.",
      "Promotes mental relaxation and mindfulness."
    ],
    image: deep
  },
  {
    title: "4. Foam Rolling or Massage",
    points: [
      "Use foam rollers on thighs, calves, and back for self-myofascial release.",
      "Alleviates muscle knots and tight fascia.",
      "Improves blood flow and speeds up muscle repair.",
      "Reduces delayed onset muscle soreness (DOMS)."
    ],
    image: foam
  },
  {
    title: "5. Hydration and Nutrition",
    points: [
      "Drink water or electrolyte-rich fluids to replenish lost minerals.",
      "Consume a protein + carbohydrate meal/snack within 30 minutes.",
      "Supports muscle repair and glycogen replenishment.",
      "Prepares the body for next-day training or performance."
    ],
    image: hydration
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

const WarmDown = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-950 to-slate-800 text-white py-12 px-6"
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
          🧘 Badminton Warm-Down Routine
        </motion.h1>

        {/* Intro Section */}
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
              A proper warm-down helps transition the body from high activity to rest. It aids in preventing soreness,
              improving recovery, and preparing muscles for the next session. This structured routine covers cardio cooldown,
              flexibility work, and recovery essentials.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={warmDownImg}
              alt="Warm-Down"
              className="rounded-2xl shadow-2xl w-[320px] h-[240px] object-cover border border-white/20"
            />
          </motion.div>
        </motion.div>

        {/* Steps Cards */}
        <div className="space-y-6">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col md:flex-row items-center gap-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-md hover:bg-white/15 transition"
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
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-blue-400 mb-3">{item.title}</h2>
                <ul className="list-disc list-inside text-gray-100 text-sm space-y-1 text-left">
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

export default WarmDown;
