import React,{useState,useRef} from 'react';
import bg from '../assets/bg.jpg';
import backhandHigh from '../assets/videos/Backhand_high.mp4';
import forehandHigh from '../assets/videos/Forehand_high.mp4';
import forehandLow from '../assets/videos/Forehand_low.mp4';
import Defence from '../assets/videos/Defence.mp4'
import Dribble from '../assets/videos/Dribble.mp4'
import NetKill from '../assets/videos/NetKill.mp4'
import JumpSmash from '../assets/videos/Jump_Smash.mp4'
import SliceDrop from '../assets/videos/Slice_Drop.mp4'
import Drop from '../assets/videos/Drop.mp4'
import Smash from '../assets/videos/Smash.mp4'
import BackhandLow from '../assets/videos/Backhand_low.mp4'
import DiveDefense from '../assets/videos/Dive_defence.mp4'
import Lift from '../assets/videos/Lift.mp4'
import Drive from '../assets/videos/Drive.mp4'
import Clear from '../assets/videos/Clear.mp4'

const getVideoForShot = (name) => {
  if (name.includes('Backhand High')) return backhandHigh;
  if (name.includes('Forehand High')) return forehandHigh;
  if (name.includes('Forehand Low')) return forehandLow;
  if (name.includes('Jump Smash')) return JumpSmash;
  if (name.includes('Dribble')) return Dribble;
  if (name.includes('Slice Drop')) return SliceDrop;
  if (name.includes('Normal Drop')) return Drop;
  if (name.includes('Net Kill')) return NetKill;
  if (name.includes('Doubles Defense')) return Defence;
  if (name.includes('Smash')) return Smash;
  if (name.includes('Backhand Low')) return BackhandLow;
  if (name.includes('Singles Defense')) return DiveDefense;
  if (name.includes('Lift')) return Lift;
  if (name.includes('Drive')) return Drive;
  if (name.includes('Clear')) return Clear;
  return null;
};

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
        name: "Doubles Defense",
        points: [
          "Block or lift smash returns.",
          "Use soft wrist action.",
          "Redirect shuttle away from opponent.",
          "Stay low and balanced.",
          "Focus on returning into play."
        ]
      },
      {
        name: "Singles Defense",
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


const VideoCard = ({ title, points, videoSrc }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div className="flex flex-col bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300">
      <div
        className="relative w-full h-40 rounded-xl overflow-hidden border border-white/30 shadow-inner mb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {videoSrc ? (
          <>
            <video
              ref={videoRef}
              src={videoSrc}
              className="w-full h-full object-cover"
              muted
              playsInline
            />
            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition"
              >
                <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            )}
            {isPlaying && isHovered && (
              <button
                onClick={handlePause}
                className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 p-2 rounded-full"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              </button>
            )}
          </>
        ) : (
          <div className="flex items-center justify-center w-full h-full text-white italic">
            Video Not Available
          </div>
        )}
      </div>

      <div>
        <h3 className="text-left text-white text-xl font-bold mb-2 underline decoration-pink-400">
          {title}
        </h3>
        <ul className="list-disc list-inside text-white text-left space-y-2 text-sm">
          {points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Shots = () => {
  return (
    <div
      className="fixed inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}
    >
      <div
        className="w-full h-full overflow-y-scroll px-4 py-8 md:px-6 md:py-10"
        style={{ backdropFilter: 'blur(12px)', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {section.shots.map((shot, index) => (
                <VideoCard
                  key={index}
                  title={shot.name}
                  points={shot.points}
                  videoSrc={getVideoForShot(shot.name)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shots;