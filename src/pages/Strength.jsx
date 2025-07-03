import React from 'react';
import strengthImg from '../assets/training/Strength.png';
import { Link } from 'react-router-dom';

const Strength = () => {
  const components = [
    {
      title: "1. Lower Body Strength",
      description: "Squats, lunges, and step-ups enhance explosive power for court movements like lunging and jumping.",
    },
    {
      title: "2. Upper Body Strength",
      description: "Push-ups and pull-ups improve racket control and power for overhead shots like smashes and clears.",
    },
    {
      title: "3. Core Stability",
      description: "Core exercises like planks and twists develop balance and body control during fast-paced rallies.",
    },
    {
      title: "4. Shoulder Conditioning",
      description: "Resistance bands and light dumbbells protect shoulders and support endurance during repetitive strokes.",
    },
    {
      title: "5. Bodyweight Circuits",
      description: "Combining strength exercises in circuits builds stamina, mimicking match-like demands.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-4xl md:text-5xl font-bold underline decoration-blue-500 mb-12">
          Strength Training for Badminton
        </h1>

        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-14">
          <div className="md:w-1/2">
            <p className="text-gray-300 text-base leading-relaxed">
              Strength training improves your court agility, hitting power, and injury resistance. A strong foundation enhances every aspect of your badminton performance—from sharp lunges to explosive jumps and rapid recovery between strokes.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={strengthImg}
              alt="Strength Training"
              className="rounded-2xl shadow-2xl w-[320px] h-[250px] object-cover border border-white/20"
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

        {/* Back Button */}
        <div className="mt-14 text-center">
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

export default Strength;
