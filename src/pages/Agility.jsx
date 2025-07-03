import React from 'react';
import agilityImg from '../assets/training/Agility.png';
import { Link } from 'react-router-dom';

const components = [
  {
    title: "1. Ladder Drills",
    description: "Improve foot speed and coordination with high-knee and lateral step patterns using an agility ladder.",
  },
  {
    title: "2. Cone Drills",
    description: "Practice sharp directional changes and acceleration with zig-zag or T-pattern cone setups.",
  },
  {
    title: "3. Split-Step Practice",
    description: "Reinforce explosive reactions by timing split-steps to simulated opponent movements.",
  },
  {
    title: "4. Jump Rope",
    description: "Enhance rhythm, endurance, and lower-body coordination through fast-paced skipping routines.",
  },
  {
    title: "5. Court Sprint Intervals",
    description: "Simulate rally movements with short bursts of sprints to each court corner, boosting match fitness.",
  },
];

const Agility = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-4xl md:text-5xl font-bold underline decoration-blue-500 mb-12">
          Agility Training in Badminton
        </h1>

        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-14">
          <div className="md:w-1/2">
            <p className="text-gray-300 text-base leading-relaxed">
              Agility is vital in badminton for sharp directional changes and quick recovery. These drills develop explosive court speed, reactive footwork, and dynamic balance for fast-paced matches.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={agilityImg}
              alt="Agility Training"
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

export default Agility;
