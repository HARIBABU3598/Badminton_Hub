import React from 'react';
import strengthImg from '../assets/training/Strength.png';
import { Link } from 'react-router-dom';
import body from '../assets/strength/body.png';
import core from '../assets/strength/core.png';
import lower from '../assets/strength/lower.png';
import shoulder from '../assets/strength/shoulder.png';
import upper from '../assets/strength/upper.png';

const components = [
  {
    title: "1. Lower Body Strength",
    points: [
      "Includes exercises like squats, lunges, and step-ups.",
      "Improves explosive power for lunges, jumps, and directional changes.",
      "Enhances stability during low stances and defensive movements.",
      "Builds endurance in legs for longer rallies and tournaments."
    ],
    image: lower
  },
  {
    title: "2. Upper Body Strength",
    points: [
      "Focus on push-ups, pull-ups, and dumbbell presses.",
      "Increases power in overhead strokes like smashes and clears.",
      "Improves racket control and stability during shots.",
      "Supports shoulder, chest, and back endurance in long games."
    ],
    image: upper
  },
  {
    title: "3. Core Stability",
    points: [
      "Exercises include planks, Russian twists, and mountain climbers.",
      "Improves body control during high-speed rallies.",
      "Enhances posture and reduces lower back strain.",
      "Supports efficient transfer of energy from legs to arms in shots."
    ],
    image: core
  },
  {
    title: "4. Shoulder Conditioning",
    points: [
      "Use resistance bands, light dumbbells, and internal/external rotations.",
      "Strengthens rotator cuff and shoulder joint stability.",
      "Prevents overuse injuries from repetitive smashing.",
      "Increases range of motion and shot accuracy."
    ],
    image: shoulder
  },
  {
    title: "5. Bodyweight Circuits",
    points: [
      "Combine squats, push-ups, burpees, and lunges in a timed circuit.",
      "Boosts muscular and cardiovascular endurance.",
      "Mimics the intensity and pace of badminton rallies.",
      "Develops all-around strength and mental resilience under fatigue."
    ],
    image: body
  }
];

const Strength = () => {
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

        {/* Training Sections */}
        <div className="space-y-6">
          {components.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center gap-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-md hover:bg-white/15 transition"
            >
              {/* Image Section */}
              <img
                src={item.image}
                alt={item.title}
                className="w-[300px] h-[300px] object-cover rounded-lg shadow-lg border border-white/20"
              />

              {/* Text Section */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-blue-400 mb-3">{item.title}</h2>
                <ul className="list-disc list-inside text-gray-100 space-y-1 text-sm text-left">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-14 text-center">
          <Link
            to="/training"
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
