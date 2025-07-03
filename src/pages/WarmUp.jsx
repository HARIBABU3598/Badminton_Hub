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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-4xl md:text-5xl font-bold mb-12 underline decoration-blue-500">
          Badminton Warm-Up Routine
        </h1>

        {/* Intro Section */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-14">
          <div className="md:w-1/2">
            <p className="text-gray-300 text-base leading-relaxed">
              A well-designed warm-up boosts blood flow, prepares joints, and activates muscles for explosive rallies.
              This routine enhances readiness and reduces the risk of injuries by targeting the body’s most used systems in badminton.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={warmUpMain}
              alt="Warm-Up"
              className="rounded-2xl shadow-2xl w-[320px] h-[240px] object-cover border border-white/20"
            />
          </div>
        </div>

        {/* Component Cards */}
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

export default WarmUp;
