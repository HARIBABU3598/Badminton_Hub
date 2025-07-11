// Knockout.jsx
import React, { useEffect, useState } from 'react';

const generateKnockoutRounds = (teams = []) => {
  if (!Array.isArray(teams) || teams.length < 2) return [];

  const bracketSize = Math.pow(2, Math.ceil(Math.log2(teams.length)));
  const bracketTeams = [...teams];

  while (bracketTeams.length < bracketSize) {
    bracketTeams.push(null);
  }

  const nonByeTeams = bracketTeams.filter(t => t !== null);
  const shuffledTeams = [...nonByeTeams].sort(() => Math.random() - 0.5);
  const byes = bracketSize - nonByeTeams.length;
  for (let i = 0; i < byes; i++) {
    shuffledTeams.push(null);
  }

  const rounds = [];
  let currentRound = shuffledTeams;
  let roundNumber = 1;

  while (currentRound.length > 1) {
    const nextRound = [];
    const roundMatches = [];

    for (let i = 0; i < currentRound.length; i += 2) {
      const teamA = currentRound[i];
      const teamB = currentRound[i + 1];
      const matchId = `R${roundNumber}-M${i / 2}`;

      if (!teamA || !teamB) {
        const winner = teamA || teamB;
        roundMatches.push({
          id: matchId,
          name: `Round ${roundNumber}`,
          teamA,
          teamB,
          result: winner ? `${winner} advances (Bye)` : 'Bye (No winner)',
          started: false,
          completed: true,
          winner: winner || null
        });
        if (winner) nextRound.push(winner);
        continue;
      }

      roundMatches.push({
        id: matchId,
        name: `Round ${roundNumber}`,
        teamA,
        teamB,
        result: null,
        started: false,
        completed: false,
        winner: null
      });
      nextRound.push(null);
    }

    rounds.push(roundMatches);
    currentRound = nextRound;
    roundNumber++;
  }

  return rounds;
};

const Knockout = ({ teams }) => {
  const [rounds, setRounds] = useState([]);
  const [currentMatch, setCurrentMatch] = useState(null);

  useEffect(() => {
    if (teams && Array.isArray(teams) && teams.length >= 2) {
      const initialRounds = generateKnockoutRounds(teams);
      setRounds(initialRounds);
    }
  }, [teams]);

  const handleStartMatch = (match) => {
    setCurrentMatch(match);
  };

  const handleMatchComplete = (match, winner) => {
    setRounds(prevRounds => {
      const newRounds = prevRounds.map(round =>
        round.map(m =>
          m.id === match.id
            ? { ...m, result: `${winner} wins`, completed: true, started: true, winner }
            : m
        )
      );

      // propagate winner
      for (let i = 0; i < newRounds.length - 1; i++) {
        const current = newRounds[i];
        const next = newRounds[i + 1];
        const index = current.findIndex(m => m.id === match.id);
        if (index !== -1 && next[Math.floor(index / 2)]) {
          const nextMatch = next[Math.floor(index / 2)];
          if (index % 2 === 0) nextMatch.teamA = winner;
          else nextMatch.teamB = winner;
        }
      }

      return [...newRounds];
    });
    setCurrentMatch(null);
  };

  return (
    <div className="p-6 text-white bg-gradient-to-br from-black via-gray-900 to-slate-800 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">🏸 Knockout Tournament</h1>
      {rounds.map((round, rIndex) => (
        <div key={rIndex} className="mb-10">
          <h2 className="text-2xl mb-4 font-semibold">Round {rIndex + 1}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {round.map((match, mIndex) => (
              <div
                key={match.id}
                className="bg-white/10 p-4 rounded-lg shadow backdrop-blur-md"
              >
                <h3 className="font-semibold mb-2">{match.name}</h3>
                <p>
                  {match.teamA || 'TBD'} vs {match.teamB || 'TBD'}
                </p>
                {match.completed ? (
                  <p className="text-green-400 mt-2">{match.result}</p>
                ) : match.teamA && match.teamB ? (
                  <button
                    onClick={() => handleStartMatch(match)}
                    className="mt-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded"
                  >
                    Start Match
                  </button>
                ) : (
                  <p className="text-gray-400 mt-2">Waiting for opponent</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {currentMatch && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white/10 p-6 rounded-lg text-white w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">{currentMatch.teamA} vs {currentMatch.teamB}</h2>
            <div className="flex justify-around mb-4">
              <button
                onClick={() => handleMatchComplete(currentMatch, currentMatch.teamA)}
                className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
              >
                {currentMatch.teamA} Wins
              </button>
              <button
                onClick={() => handleMatchComplete(currentMatch, currentMatch.teamB)}
                className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
              >
                {currentMatch.teamB} Wins
              </button>
            </div>
            <button
              onClick={() => setCurrentMatch(null)}
              className="text-sm underline text-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Knockout;
