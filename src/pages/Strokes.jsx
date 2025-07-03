import React from 'react';
import strokesImg from '../assets/training/Strokes.png';
import { Link } from 'react-router-dom';

const components = [
  {
    title: "1. Shadow Drills",
    description: "Practice stroke movements without a shuttle to improve technique, form, and footwork alignment.",
  },
  {
    title: "2. Multi-Shuttle Drills",
    description: "Use multiple shuttles fed in rapid succession to develop quick reaction, stroke repetition, and stamina.",
  },
  {
    title: "3. Net Play Drills",
    description: "Focus on net kills, lifts, and tight dribbles to improve your front-court control and precision.",
  },
  {
    title: "4. Smash & Clear Practice",
    description: "Alternate between powerful smashes and deep clears to develop timing, power, and arm endurance.",
  },
  {
    title: "5. Partner Rallies",
    description: "Rally with a partner to simulate real-game scenarios, improve consistency, and shot variation under pressure.",
  },
];

const Strokes = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-4xl md:text-5xl font-bold mb-12 underline decoration-blue-500">
          Strokes Training in Badminton
        </h1>

        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-14">
          <div className="md:w-1/2">
            <p className="text-gray-300 text-base leading-relaxed">
              Strokes training builds precision, power, and confidence for every shot type. Regular practice of net play, smashes, clears, and rallies helps players adapt their technique to different match situations and improve overall performance.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={strokesImg}
              alt="Strokes Training"
              className="rounded-2xl shadow-2xl w-[320px] h-[240px] object-cover border border-white/20"
            />
          </div>
        </div>

        {/* Training Components */}
        <div className="space-y-6">
          {components.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center gap-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-md hover:bg-white/15 transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-[300px] h-[200px] object-cover rounded-lg shadow-lg border border-white/20"
              />
              <div>
                <h2 className="text-xl font-semibold text-blue-400 mb-2">{item.title}</h2>
                <p className="text-sm text-gray-100">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-300"
          >
            ← Back to Training Program
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Strokes;
