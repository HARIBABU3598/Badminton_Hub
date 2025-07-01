import React from 'react';
import faultsImg from '../assets/rules/faults.png'; 
import Serve from '../assets/faults/serve.png'
import Rally from '../assets/faults/rally.png'
import Net from '../assets/faults/net.png'
import Conduct from '../assets/faults/conduct.png'

const faultCategories = [
  {
    title: "Service Faults",
    image:Serve,
    points: [
      "Shuttle is struck above the server’s waist.",
      "Racket head is not pointing downward during serve.",
      "Feet of server or receiver not in correct service court.",
      "Server or receiver lifts feet off ground during serve.",
      "Shuttle is missed completely while attempting to serve.",
      "Shuttle lands outside correct diagonal service box.",
      "Server delays or feints excessively before serving."
    ]
  },
  {
    title: "Rally Faults",
    image:Rally,
    points: [
      "Shuttle lands outside boundaries or fails to cross the net.",
      "Shuttle touches ceiling, walls, or player’s clothing.",
      "Player strikes shuttle before it crosses to their side.",
      "Shuttle is hit twice by same team (double hit).",
      "Shuttle is caught and held on racket (sling shot).",
      "Player invades opponent’s court under the net.",
      "Player hits shuttle with anything other than racket."
    ]
  },
  {
    title: "Net and Racket Faults",
    image:Net,
    points: [
      "Player touches the net with racket, body, or clothing.",
      "Player or racket invades opponent’s side over the net during play.",
      "Player obstructs or distracts opponent intentionally.",
      "Player reaches over the net before shuttle passes."
    ]
  },
  {
    title: "Conduct Faults",
    image:Conduct,
    points: [
      "Deliberate delay in play or repeated time-wasting.",
      "Verbal abuse, gestures, or unsporting behavior.",
      "Repeated infringements after being warned.",
      "Receiving coaching during rally (except allowed breaks)."
    ]
  }
];

const Faults = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-4 py-10 md:px-20">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 underline decoration-blue-500">
        Badminton Faults
      </h1>

      {faultCategories.map((section, index) => (
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

export default Faults;
