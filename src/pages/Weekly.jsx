import React from 'react';
import weeklyImg from '../assets/training/Weekly.png';
import { Link } from 'react-router-dom';
import monday from '../assets/weekly/monday.png'
import tuesday from '../assets/weekly/tuesday.png'
import wednesday from '../assets/weekly/wednesday.png'
import thursday from '../assets/weekly/thursday.png'
import friday from '../assets/weekly/friday.png'
import saturday from '../assets/weekly/saturday.png'
import sunday from '../assets/weekly/sunday.png'

const schedule = [
  {
    day: "Monday",
    image: monday,
    routine: [
      "5-min warm-up jog and dynamic stretches.",
      "Lower body strength: squats, lunges, and step-ups.",
      "Plyometric jumps to build explosive leg power.",
      "Technical stroke practice: clears, drops, smashes.",
      "Cool-down with walking and light stretching.",
    ],
  },
  {
    day: "Tuesday",
    image: tuesday,
    routine: [
      "Agility ladder drills for fast footwork coordination.",
      "Cone zig-zag sprints to train directional reflexes.",
      "Split-step and lunge drills across court lines.",
      "2 vs 1 match simulation focusing on court coverage.",
      "Hydration and 5-minute breathing recovery session.",
    ],
  },
  {
    day: "Wednesday",
    image: wednesday,
    routine: [
      "Full-body static stretching: hold for 30 secs per muscle group.",
      "Yoga for flexibility and joint opening.",
      "Balance-focused poses like Warrior III and Tree.",
      "Foam rolling to release tension and aid muscle recovery.",
      "Guided deep breathing for relaxation.",
    ],
  },
  {
    day: "Thursday",
    image: thursday,
    routine: [
      "Warm-up with shuttle jogs and mobility drills.",
      "Strength + agility supersets (e.g., lunges + cone runs).",
      "Reactive stroking drills with movement: drop–lift–smash.",
      "Partner rally work: sustain long exchanges.",
      "Cooldown: hamstring and hip-flexor stretches.",
    ],
  },
  {
    day: "Friday",
    image: friday,
    routine: [
      "Shadow drills: clear–drop–net–smash pattern sequences.",
      "Game situation drills: net kills, defensive lifts, drive battles.",
      "Practice set play: best of 3 matches with scoring.",
      "Focus on tactical decision-making and shot variation.",
      "Light jogging and hydration cooldown.",
    ],
  },
  {
    day: "Saturday",
    image: saturday,
    routine: [
      "Tournament-style match play: full scoring format.",
      "Evaluate strategy and mental endurance.",
      "Video recording and review if available.",
      "Post-match cool-down and foam rolling.",
      "Tactical discussion and feedback session.",
    ],
  },
  {
    day: "Sunday",
    image: sunday,
    routine: [
      "Light warm-down jog or nature walk.",
      "Gentle mobility and yoga flow.",
      "Foam rolling or massage therapy.",
      "Optional active recovery: swimming or cycling.",
      "Mindfulness meditation or breathing practice.",
    ],
  },
];

const Weekly = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-4xl md:text-5xl font-bold mb-12 underline decoration-blue-500">
          Weekly Badminton Training Schedule
        </h1>

        {/* Overview Section */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-14">
          <div className="md:w-1/2">
            <p className="text-gray-300 text-base leading-relaxed">
              A smart weekly training plan cycles through all critical areas: strength, technique, agility, and recovery.
              This structure prevents overtraining while helping you stay consistent and improve across all badminton skills.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={weeklyImg}
              alt="Weekly Schedule"
              className="rounded-2xl shadow-2xl w-[320px] h-[240px] object-cover border border-white/20"
            />
          </div>
        </div>

        {/* Weekly Schedule Cards */}
        <div className="space-y-6">
          {schedule.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-start gap-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-md hover:bg-white/15 transition"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.day}
                  className="w-[300px] h-[300px] object-cover rounded-lg shadow-lg border border-white/20"
                />
              )}
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-blue-400 mb-3">{item.day}</h2>
                <ul className="list-disc list-inside text-sm text-gray-100 space-y-1 text-left">
                  {item.routine.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
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

export default Weekly;
