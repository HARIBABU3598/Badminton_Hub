import React from 'react';
import bg from '../assets/bg.jpg';

const instructions = {
  services: {
    title: "Services",
    shots: [
      {
        name: "Forehand Low Serve",
        points: [
          "Hold shuttle by feathers for better grip.",
          "Racket leg behind, body side-on to net.",
          "Use a gentle push just above net height.",
          "Keep wrist relaxed and controlled.",
          "Effective for short returns in doubles."
        ]
      },
      {
        name: "Forehand High Serve",
        points: [
          "Stand sideways with weight on rear foot.",
          "Swing with full arm and follow through.",
          "Contact shuttle below waist.",
          "Aim for opponent's backcourt.",
          "Used primarily in singles."
        ]
      },
      {
        name: "Backhand Low Serve",
        points: [
          "Use thumb grip for precision.",
          "Keep shuttle in front of body.",
          "Wrist push instead of arm swing.",
          "Shuttle should skim just over the net.",
          "Common in fast-paced doubles."
        ]
      },
      {
        name: "Backhand High Serve",
        points: [
          "Rare but strategic in some cases.",
          "Use strong wrist flick and follow through.",
          "Hit shuttle upward with power.",
          "Aim toward rear boundary of opponent.",
          "Surprise element in certain rallies."
        ]
      }
    ]
  },
  smashes: {
    title: "Smashes",
    shots: [
      {
        name: "Smash",
        points: [
          "Jump or stand with racket ready.",
          "Hit shuttle steeply downward.",
          "Contact at highest point above head.",
          "Use wrist snap for power.",
          "Forceful and fast to end rally."
        ]
      },
      {
        name: "Jump Smash",
        points: [
          "Jump into air for higher contact point.",
          "Body rotation generates more power.",
          "Smash at steep downward angle.",
          "Requires good timing and leg strength.",
          "Hard to defend, aggressive shot."
        ]
      },
      {
        name: "Stick Smash",
        points: [
          "Minimal backswing with sudden hit.",
          "Compact stroke using mostly wrist.",
          "Quick and deceptive.",
          "Effective in midcourt exchanges.",
          "Surprise element vs expecting drops."
        ]
      }
    ]
  },
  drops: {
    title: "Drop Shots",
    shots: [
      {
        name: "Normal Drop",
        points: [
          "Use overhead motion like clear or smash.",
          "Contact shuttle softly.",
          "Aim just over net.",
          "Slow speed disrupts rhythm.",
          "Good follow-up with net kill."
        ]
      },
      {
        name: "Slice Drop",
        points: [
          "Hit with angled racket face.",
          "Shuttle spins and falls quickly.",
          "Adds deception to shot.",
          "Looks like clear or smash at first.",
          "Great for controlling rallies."
        ]
      }
    ]
  },
  drivesClears: {
    title: "Drives & Clears",
    shots: [
      {
        name: "Drive",
        points: [
          "Flat, fast horizontal shot.",
          "Used in midcourt rallies.",
          "Keep shuttle low to net.",
          "Use quick wrist flick.",
          "Best in doubles fast exchanges."
        ]
      },
      {
        name: "Clear",
        points: [
          "Hit shuttle high and deep.",
          "Moves opponent to backcourt.",
          "Use full arm swing.",
          "Can be offensive or defensive.",
          "Creates time to recover position."
        ]
      },
      {
        name: "Toss",
        points: [
          "Same as clear, but often underarm.",
          "Useful when under pressure.",
          "Lift shuttle to backcourt.",
          "Reset rally tempo.",
          "Not very aggressive."
        ]
      },
      {
        name: "Lift",
        points: [
          "Underhand shot from net area.",
          "Hit upward toward opponent’s rear.",
          "Used to counter net shots.",
          "Gives time to reposition.",
          "Can be defensive or attacking."
        ]
      }
    ]
  },
  netPlay: {
    title: "Net Play",
    shots: [
      {
        name: "Net Kill",
        points: [
          "Kill loose net shots aggressively.",
          "Very fast wrist motion.",
          "Close to net contact.",
          "Aim downward sharply.",
          "Often ends rally instantly."
        ]
      },
      {
        name: "Dribble",
        points: [
          "Soft push near the net.",
          "Used after opponent’s net shot.",
          "Keep shuttle tight to net.",
          "Deceptive and safe.",
          "Forces opponent to lift."
        ]
      }
    ]
  },
  defense: {
    title: "Defensive Shots",
    shots: [
      {
        name: "Defense Shot",
        points: [
          "Block or lift smash returns.",
          "Use soft wrist action.",
          "Redirect shuttle away from opponent.",
          "Stay low and balanced.",
          "Focus on returning into play."
        ]
      }
    ]
  }
};

const Shots = () => {
  return (
    <div
      className="fixed inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}
    >
      <div className="w-full h-full overflow-y-scroll px-4 py-8 md:px-6 md:py-10" style={{ backdropFilter: 'blur(12px)', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="flex justify-center mb-8">
          <h1 className="text-white text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-3 md:px-10 md:py-4 rounded-full shadow-xl text-center">
            Badminton Shots Guide
          </h1>
        </div>

        {Object.values(instructions).map((section, idx) => (
          <div key={idx} className="mb-12">
            <h2 className="text-white text-2xl md:text-4xl font-semibold mb-6 border-l-8 border-blue-500 pl-4">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.shots.map((shot, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
                >
                  {/* Video Placeholder */}
                  <div className="w-full h-40 bg-white/30 flex items-center justify-center text-white italic rounded-xl border border-white/30 shadow-inner mb-4">
                    Video Placeholder
                  </div>
                  {/* Shot Title & Points */}
                  <div>
                    <h3 className="text-left text-white text-xl font-bold mb-2 underline decoration-pink-400">
                      {shot.name}
                    </h3>
                    <ul className="list-disc list-inside text-white text-left space-y-2 text-sm">
                      {shot.points.map((point, idx2) => (
                        <li key={idx2}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shots;
