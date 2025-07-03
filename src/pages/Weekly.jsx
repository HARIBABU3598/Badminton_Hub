import React from 'react';
import weeklyImg from '../assets/training/Weekly.png';
import { Link } from 'react-router-dom';


const schedule = [
  {
    day: "Monday",
    image: weeklyImg,
    routine: [
      "5-min warm-up jog and dynamic stretches",
      "Lower body strength (squats, lunges, step-ups)",
      "Technical strokes practice: clears, drops, smashes",
    ],
  },
  {
    day: "Tuesday",
    routine: [
      "Agility ladder drills and cone sprints",
      "Split-step footwork circuits",
      "2 vs 1 match simulation",
    ],
  },
  {
    day: "Wednesday",
    image: weeklyImg,
    routine: [
      "Full-body static stretching session",
      "Yoga poses focusing on flexibility",
      "Foam rolling for muscle recovery",
    ],
  },
  {
    day: "Thursday",
    image: weeklyImg,
    routine: [
      "Warm-up cardio and mobility work",
      "Strength + agility superset drills",
      "Stroking with movement (shuttle rallies)",
    ],
  },
  {
    day: "Friday",
    image: weeklyImg,
    routine: [
      "Shadow drills with strokes sequence",
      "Game situation drills (net kills, lifts)",
      "Practice match sets with scoring",
    ],
  },
  {
    day: "Saturday",
    image: weeklyImg,
    routine: [
      "Tournament-style full match play",
      "Strategy review and feedback session",
      "Cool-down stretches",
    ],
  },
  {
    day: "Sunday",
    image: weeklyImg,
    routine: [
      "Light warm-down jog or walk",
      "Foam rolling or mobility drills",
      "Optional: swimming or deep breathing exercises",
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

        {/* Image + Overview Text */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-14">
          <div className="md:w-1/2">
            <p className="text-gray-300 text-base leading-relaxed">
              A smart weekly training plan cycles through all critical areas: strength, technique, agility, and recovery. This structure prevents overtraining while helping you stay consistent and improve across all badminton skills.
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

        {/* Schedule Grid */}
        <div className="space-y-6">
  {schedule.map((item, idx) => (
    <div
      key={idx}
      className="flex flex-col md:flex-row items-center gap-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-md hover:bg-white/15 transition"
    >
      <img
        src={item.image}
        alt={item.day}
        className="w-[300px] h-[200px] object-cover rounded-lg shadow-lg border border-white/20"
      />
      <div>
        <h2 className="text-xl font-semibold text-blue-400 mb-2">{item.day}</h2>
        <p className="text-sm text-gray-100">{item.routine}</p>
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

export default Weekly;
