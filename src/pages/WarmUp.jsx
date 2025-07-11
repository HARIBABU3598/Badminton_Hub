import React from 'react';
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
    description: "5–10 minutes of light jogging, skipping, or shuttle runs to elevate heart rate and warm up muscles.",
    image: cardioImg,
  },
  {
    title: "2. Dynamic Stretching",
    description: "Controlled stretches like leg swings, arm circles, lunges, and hip rotations activate joints and major muscle groups.",
    image: stretchImg,
  },
  {
    title: "3. Mobility Drills",
    description: "Improve joint range with ankle bounces, shoulder rolls, and wrist rotations, enhancing flexibility.",
    image: mobilityImg,
  },
  {
    title: "4. Footwork Activation",
    description: "Simulate match movement using ladder drills, quick shuffles, and split steps to prep for court play.",
    image: footworkImg,
  },
  {
    title: "5. Shadow Practice",
    description: "Mimic strokes like clears, drops, and smashes without a shuttle to engage movement patterns and refine form.",
    image: shadowImg,
  },
];

const WarmUp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 text-white py-12 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 text-transparent bg-clip-text animate-pulse">
          🏸 Badminton Warm-Up Routine
        </h1>

        {/* Intro Section */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-16">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-gray-300 text-lg leading-relaxed">
              A well-designed warm-up boosts blood flow, prepares joints, and activates muscles for explosive rallies.
              This routine enhances readiness and reduces injury risks by targeting the body’s most used systems in badminton.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={warmUpMain}
              alt="Warm-Up"
              className="rounded-3xl shadow-2xl w-[320px] h-[240px] object-cover border border-white/20 hover:scale-105 transition duration-500 ease-in-out"
            />
          </div>
        </div>

        {/* Component Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {components.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg transition hover:shadow-cyan-500/30 transform hover:scale-[1.02]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[180px] object-cover rounded-lg shadow-md mb-4 transition duration-300 hover:shadow-lg hover:shadow-blue-500/40"
              />
              <h2 className="text-xl font-bold text-cyan-400 mb-2">{item.title}</h2>
              <p className="text-sm text-gray-100">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-16 text-center">
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 text-lg font-semibold"
          >
            ← Back to Training Program
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WarmUp;
