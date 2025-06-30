import { useState, useEffect } from 'react';

const ScoreBoard = ({ players, images, isDoubles, onMatchEnd }) => {
  const [scores, setScores] = useState([0, 0]);
  const [winner, setWinner] = useState(null);

  const handleScore = (index) => {
    if (winner !== null) return;

    const newScores = [...scores];
    newScores[index]++;

    const opponent = index === 0 ? 1 : 0;
    const diff = newScores[index] - newScores[opponent];

    if (
      newScores[index] >= 21 &&
      (diff >= 2 || newScores[index] === 30)
    ) {
      setWinner(index);
    }

    setScores(newScores);
  };

  useEffect(() => {
    if (winner !== null && onMatchEnd) {
      onMatchEnd(winner, scores);
    }
  }, [winner]);

  const getPlayerName = (index) => {
    return isDoubles
      ? `${players[index * 2]} & ${players[index * 2 + 1]}`
      : players[index];
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
      {[0, 1].map((i) => (
        <div
          key={i}
          onClick={() => handleScore(i)}
          className={`cursor-pointer transition-transform transform hover:scale-105 bg-white/20 border border-white/30 backdrop-blur-md rounded-xl p-6 text-center shadow-xl ${
            winner === i ? 'ring-4 ring-green-400' : ''
          }`}
        >
          <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-600 text-white text-3xl font-bold rounded-full shadow-md mb-4">
            {getPlayerName(i).charAt(0)}
          </div>
          <h2 className="text-xl font-semibold text-white">{getPlayerName(i)}</h2>
          <p className="text-5xl font-bold text-yellow-300 mt-2">{scores[i]}</p>
        </div>
      ))}
    </div>
  );
};

export default ScoreBoard;
