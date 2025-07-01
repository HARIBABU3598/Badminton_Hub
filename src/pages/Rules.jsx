import React from 'react';

// Importing images for each rule section
import scoringImg from '../assets/rules/scoring.png';
import servingImg from '../assets/rules/serving.png';
import faultsImg from '../assets/rules/faults.png';
import letsImg from '../assets/rules/lets.png';
import intervalsImg from '../assets/rules/intervals.png';
import courtImg from '../assets/rules/court.png';
import equipmentImg from '../assets/rules/equipment.png';
import singlesVsDoublesImg from '../assets/rules/singles_vs_doubles.png';

const Rules = () => {
  const ruleSections = [
    {
      title: "Scoring Rules",
      image: scoringImg,
      points: [
        "Matches are best of 3 games to 21 points.",
        "Every serve scores a point (rally scoring).",
        "If the score reaches 20-20, the side that gains a 2-point lead first wins.",
        "If it reaches 29-29, the side that scores the 30th point wins the game.",
        "Winning a game earns 1 point; first to 2 games wins the match."
      ]
    },
    {
      title: "Serving Rules",
      image: servingImg,
      points: [
        "Serve must be hit below the server’s waist height.",
        "The racket must move in an upward direction during serve.",
        "In singles: serve from right if score is even, left if odd.",
        "In doubles: each side has one serve per turn.",
        "The shuttle must land in the diagonal opposite service box."
      ]
    },
    {
      title: "Faults",
      image: faultsImg,
      points: [
        "Shuttle lands outside boundaries or doesn't clear the net.",
        "Shuttle is hit twice by the same team.",
        "Player touches net with body or racket.",
        "Shuttle is hit before crossing net to your side.",
        "Deliberate distractions or misconduct."
      ]
    },
    {
      title: "Lets",
      image: letsImg,
      points: [
        "A let is called for unforeseen interruptions.",
        "If the server serves before the receiver is ready.",
        "If shuttle gets stuck in the net after crossing.",
        "If both players fault at the same time.",
        "Point is replayed in such cases."
      ]
    },
    {
      title: "Intervals and Ends",
      image: intervalsImg,
      points: [
        "Players get a 60-second interval at 11 points.",
        "2-minute break between games.",
        "Players change ends after each game.",
        "In 3rd game, change ends when a side scores 11."
      ]
    },
    {
      title: "Court & Positioning",
      image: courtImg,
      points: [
        "Singles court is long and narrow; doubles is short and wide.",
        "In doubles, both players rotate after gaining serve.",
        "Serve from right when even score, left when odd.",
        "Must stay within boundaries until shuttle is hit.",
        "Overstepping lines or wrong service court results in a fault."
      ]
    },
    {
      title: "Equipment & Conduct",
      image: equipmentImg,
      points: [
        "Rackets must conform to standard size and string tension.",
        "Shuttles should be feather or synthetic, tested before match.",
        "Unsporting behavior (shouting, stalling) may cause penalties.",
        "Umpires can give warnings, yellow or red cards.",
        "Delays between rallies are regulated."
      ]
    },
    {
      title: "Singles vs Doubles Court Rules",
      image: singlesVsDoublesImg,
      points: [
        "Singles court uses the inner side lines and full back boundary lines.",
        "Doubles court uses the outer side lines and short back boundary line for serving.",
        "In singles, players serve and receive from alternate service boxes based on their score.",
        "In doubles, partners take turns serving and receiving, and rotate positions accordingly.",
        "Service areas differ: singles service area is long and narrow, doubles service area is short and wide."
      ]
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen px-4 py-10 md:px-20">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 underline decoration-blue-500">
        Badminton Rules
      </h1>

      {ruleSections.map((section, index) => (
        <div key={index} className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Image Section - Square & Responsive */}
            <div className="w-full md:w-1/3 aspect-square rounded-lg overflow-hidden border border-white/20 bg-white/10 flex items-center justify-center">
              <img
                src={section.image}
                alt={`${section.title} illustration`}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-400">
                {section.title}
              </h2>
              <ul className="list-disc list-inside text-left space-y-2 text-white/90">
                {section.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <div className="w-[100%] h-[2px] bg-white mt-4"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rules;
