import React from 'react';
import warmDownImg from '../assets/training/WarmDown.png';
import { Link } from 'react-router-dom';

const steps = [
  {
    title: "1. Light Jogging",
    description: "Helps gradually reduce heart rate and flush out lactic acid from the muscles after intense activity.",
    
  },
  {
    title: "2. Static Stretching",
    description: "Focus on hamstrings, quads, calves, shoulders, and lower back to relieve tension and prevent stiffness.",
  },
  {
    title: "3. Deep Breathing",
    description: "Promotes relaxation, calms the nervous system, and helps restore oxygen levels for muscle recovery.",
  },
  {
    title: "4. Foam Rolling or Massage",
    description: "Reduces muscle tightness, boosts circulation, and accelerates recovery through soft tissue release.",
  },
  {
    title: "5. Hydration and Nutrition",
    description: "Drink fluids and eat a protein-carb combo to repair muscle fibers and restore energy levels.",
  },
];

const WarmDown = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-slate-800 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-4xl md:text-5xl font-bold mb-12 underline decoration-blue-500">
          Badminton Warm-Down Routine
        </h1>

        {/* Image and Description Section */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-14">
          <div className="md:w-1/2">
            <p className="text-gray-300 text-base leading-relaxed">
              A proper warm-down helps transition the body from high activity to rest. It aids in preventing soreness, 
              improving recovery, and preparing muscles for the next session. This structured routine covers cardio slowdown, 
              flexibility work, and recovery essentials.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={warmDownImg}
              alt="Warm-Down"
              className="rounded-2xl shadow-2xl w-[320px] h-[240px] object-cover border border-white/20"
            />
          </div>
        </div>

        {/* Steps Cards */}
        <div className="space-y-6">
          {steps.map((item, idx) => (
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

export default WarmDown;
