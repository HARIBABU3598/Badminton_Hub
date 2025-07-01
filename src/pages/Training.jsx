import React from 'react';
import bg from '../assets/bg.jpg';

const sections = [
  {
    title: "Warm-Up",
    points: [
      "Light jogging or skipping for 5-10 minutes.",
      "Dynamic stretches: arm circles, leg swings, torso twists.",
      "Footwork drills to prepare for court movement.",
      "Shadow practice mimicking badminton shots."
    ]
  },
  {
    title: "Strength Training",
    points: [
      "Bodyweight squats and lunges for leg strength.",
      "Push-ups and pull-ups to build upper body strength.",
      "Core exercises: planks, Russian twists, leg raises.",
      "Resistance band training for shoulder stability."
    ]
  },
  {
    title: "Agility Training",
    points: [
      "Ladder drills to improve quick steps and coordination.",
      "Cone drills for change of direction speed.",
      "Jump rope for overall foot speed and endurance.",
      "Court sprint intervals for match intensity simulation."
    ]
  },
  {
    title: "Strokes Training",
    points: [
      "Shadow drills focusing on correct stroke technique.",
      "Multi-shuttle drills for smashes, clears, drops, and lifts.",
      "Net play drills: net kills, net lifts, and dribbles.",
      "Partner rallies emphasizing stroke consistency and control."
    ]
  },
  {
    title: "Weekly Schedule",
    points: [
      "Mon: Warm-up + Strength + Strokes",
      "Tue: Agility + Match practice",
      "Wed: Light workout + Recovery",
      "Thu: Warm-up + Strength + Agility",
      "Fri: Strokes + Match drills",
      "Sat: Full match simulation",
      "Sun: Rest or light warm-down"
    ]
  },
  {
    title: "Warm-Down",
    points: [
      "Slow jogging for 5 minutes to bring down heart rate.",
      "Static stretching for hamstrings, quads, shoulders.",
      "Deep breathing to relax muscles.",
      "Hydrate and refuel with proper nutrition."
    ]
  }
];

const Training = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-10 px-4 md:px-10"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backdropFilter: 'blur(10px)'
      }}
    >
      <div className="w-[100%] mx-auto bg-black/60 backdrop-blur-md rounded-lg shadow-xl p-6 md:p-10">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-10 text-center underline decoration-blue-400">
          Badminton Training Program
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white/10 p-6 rounded-lg shadow-md border border-white/20 hover:scale-[1.02] transition-transform"
            >
              <h2 className="text-xl text-white font-semibold mb-4 border-b border-white/30 pb-2">
                {section.title}
              </h2>
              <ul className="list-disc list-inside text-white text-sm space-y-2">
                {section.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Training;
