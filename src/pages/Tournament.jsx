import React, { useState, useEffect } from 'react';


// Match generation function
const generateLeagueMatches = (teams) => {
  return teams.flatMap((teamA, i) => 
    teams.slice(i + 1).map(teamB => ({
      id: `${teamA}-vs-${teamB}-${Date.now()}`,
      teamA,
      teamB,
      result: null,
      started: false,
      completed: false,
      score: [0, 0] // Track scores for display
    }))
  );
};
const generateKnockoutRounds = (teams) => {
  const rounds = [];
  let currentRound = [...teams];
  let roundIndex = 1;

  while (currentRound.length > 1) {
    const nextRound = [];
    const roundMatches = [];

    // Shuffle current round to randomize byes
const shuffled = [...currentRound].sort(() => Math.random() - 0.5);

for (let i = 0; i < shuffled.length; i += 2) {
  const teamA = shuffled[i];
  const teamB = shuffled[i + 1] ?? null;

  let result = null;
  let completed = false;

  // If teamB is null (bye), auto-advance teamA
  if (!teamB) {
    result = `${teamA} advances (Bye)`;
    completed = true;
    nextRound.push(teamA);
  } else {
    nextRound.push(null); // placeholder to be filled with actual winner
  }

  roundMatches.push({
    id: `R${roundIndex}-M${Math.floor(i / 2)}`,
    name: `Round ${roundIndex}`,
    teamA,
    teamB,
    result,
    started: !!teamB,
    completed,
  });
}



    rounds.push(roundMatches);
    currentRound = nextRound;
    roundIndex++;
  }

  return rounds;
};
const KnockoutScheduler = ({ teams, onBack }) => {
  const [rounds, setRounds] = useState(generateKnockoutRounds(teams));
  const [currentMatch, setCurrentMatch] = useState(null);
  const [champion, setChampion] = useState(null);

  const handleStartMatch = (match) => {
    setCurrentMatch(match);
  };

  const handleMatchComplete = (updatedMatch) => {
    setRounds((prevRounds) => {
      const newRounds = [...prevRounds];
      for (let r = 0; r < newRounds.length; r++) {
        newRounds[r] = newRounds[r].map(m => 
          m.id === updatedMatch.id ? updatedMatch : m
        );
      }

      const matchIndex = parseInt(updatedMatch.id.split('-M')[1]);
      const roundIndex = parseInt(updatedMatch.id.split('-M')[0].substring(1)) - 1;

      const winner = updatedMatch.result.includes(updatedMatch.teamA)
        ? updatedMatch.teamA
        : updatedMatch.teamB;

      if (newRounds[roundIndex + 1]) {
        newRounds[roundIndex + 1][Math.floor(matchIndex / 2)] = {
          ...newRounds[roundIndex + 1][Math.floor(matchIndex / 2)],
          [matchIndex % 2 === 0 ? 'teamA' : 'teamB']: winner
        };
      } else {
        setChampion(winner);
      }

      return newRounds;
    });

    setCurrentMatch(null);
  };

  if (currentMatch) {
    return (
      <MatchScorePage
        match={currentMatch}
        onMatchComplete={handleMatchComplete}
        onCancel={() => setCurrentMatch(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-800 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={onBack}
          className="mb-6 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded flex items-center gap-2"
        >
          ← Back to Setup
        </button>

        <h1 className="text-3xl font-bold text-center mb-8 text-cyan-400">
          🏆 Knockout Bracket
        </h1>

        {champion ? (
          <div className="text-center">
            <div className="bg-yellow-600 p-6 rounded-xl mb-6">
              <h2 className="text-4xl font-bold mb-2">🏆 Champion 🏆</h2>
              <p className="text-5xl font-bold">{champion}</p>
            </div>
            <button
              onClick={onBack}
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-lg font-semibold"
            >
              Return to Setup
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rounds.map((round, roundIndex) => (
              <div key={roundIndex} className="bg-white/10 p-4 rounded">
                <h2 className="text-xl font-semibold text-center mb-4">
                  Round {roundIndex + 1}
                </h2>
                {round.map((match) => (
                  <div key={match.id} className="mb-4">
                    <div className="bg-black/20 rounded p-3 flex justify-between items-center mb-2">
                      <span>{match.teamA || 'TBD'}</span>
                      <span>vs</span>
                      <span>{match.teamB || 'TBD'}</span>
                    </div>

                    {match.completed ? (
                      <div className="text-green-400 text-center">
                        {match.result}
                      </div>
                    ) : match.teamA && match.teamB ? (
                      <button
                        onClick={() => handleStartMatch(match)}
                        className="w-full bg-cyan-600 hover:bg-cyan-700 py-2 rounded"
                      >
                        Start Match
                      </button>
                    ) : (
                      <div className="text-center text-sm text-gray-400">
                        Waiting for previous match
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const PlayoffBracket = ({ teams, standings, onBack }) => {
  const [matches, setMatches] = useState([]);
  const [currentMatch, setCurrentMatch] = useState(null);
  const [champion, setChampion] = useState(null);
  
  // Initialize playoff matches
  useEffect(() => {
    const top4Teams = standings.slice(0, 4).map(t => t.team);
    
    const playoffMatches = [
      {
        id: 'qualifier1',
        name: 'Qualifier 1 (1st vs 2nd)',
        teamA: top4Teams[0],
        teamB: top4Teams[1],
        result: null,
        started: false,
        completed: false,
        nextMatch: 'final'
      },
      {
        id: 'eliminator',
        name: 'Eliminator (3rd vs 4th)',
        teamA: top4Teams[2],
        teamB: top4Teams[3],
        result: null,
        started: false,
        completed: false,
        nextMatch: 'qualifier2'
      },
      {
        id: 'qualifier2',
        name: 'Qualifier 2 (Loser Q1 vs Winner Elim)',
        teamA: null, // Loser of Qualifier 1
        teamB: null, // Winner of Eliminator
        result: null,
        started: false,
        completed: false,
        nextMatch: 'final'
      },
      {
        id: 'final',
        name: 'Final (Winner Q1 vs Winner Q2)',
        teamA: null, // Winner of Qualifier 1
        teamB: null, // Winner of Qualifier 2
        result: null,
        started: false,
        completed: false
      }
    ];
    
    setMatches(playoffMatches);
  }, []);

  const updatePlayoffMatches = (completedMatch) => {
    setMatches(prev => {
      const updated = prev.map(m => m.id === completedMatch.id ? completedMatch : m);
      
      // Update subsequent matches based on completed results
      if (completedMatch.id === 'qualifier1') {
        const winner = completedMatch.result.includes(completedMatch.teamA) ? 
          completedMatch.teamA : completedMatch.teamB;
        const loser = winner === completedMatch.teamA ? 
          completedMatch.teamB : completedMatch.teamA;
        
        // Set winner to final (teamA)
        const final = updated.find(m => m.id === 'final');
        if (final) final.teamA = winner;
        
        // Set loser to qualifier2 (teamA)
        const qualifier2 = updated.find(m => m.id === 'qualifier2');
        if (qualifier2) qualifier2.teamA = loser;
      }
      else if (completedMatch.id === 'eliminator') {
        const winner = completedMatch.result.includes(completedMatch.teamA) ? 
          completedMatch.teamA : completedMatch.teamB;
        
        // Set winner to qualifier2 (teamB)
        const qualifier2 = updated.find(m => m.id === 'qualifier2');
        if (qualifier2) qualifier2.teamB = winner;
      }
      else if (completedMatch.id === 'qualifier2') {
        const winner = completedMatch.result.includes(completedMatch.teamA) ? 
          completedMatch.teamA : completedMatch.teamB;
        
        // Set winner to final (teamB)
        const final = updated.find(m => m.id === 'final');
        if (final) final.teamB = winner;
      }
      else if (completedMatch.id === 'final') {
        setChampion(
          completedMatch.result.includes(completedMatch.teamA) ? 
          completedMatch.teamA : completedMatch.teamB
        );
      }
      
      return [...updated];
    });
  };
  const downloadPlayoffChart = () => {
  const lines = matches.map(m =>
    `${m.name}: ${m.teamA || 'TBD'} vs ${m.teamB || 'TBD'} → ${m.result || 'Pending'}`
  );
  const text = lines.join('\n');
  const blob = new Blob([text], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'playoff_chart.txt';
  link.click();
};


  const handleStartMatch = (match) => {
    setCurrentMatch(match);
  };

  const handleMatchComplete = (updatedMatch) => {
    updatePlayoffMatches(updatedMatch);
    setCurrentMatch(null);
  };

  if (currentMatch) {
    return (
      <MatchScorePage
        match={currentMatch}
        onMatchComplete={handleMatchComplete}
        onCancel={() => setCurrentMatch(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-800 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-6 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded flex items-center gap-2"
        >
          ← Back to League
        </button>
        
        <h1 className="text-3xl font-bold text-center mb-8 text-cyan-400">
          🏆 Playoff Stage
        </h1>

        {champion ? (
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 p-8 rounded-xl mb-8">
              <h2 className="text-4xl font-bold mb-4">🏆 CHAMPIONS 🏆</h2>
              <p className="text-5xl font-bold">{champion}</p>
            </div>
            <button
              onClick={onBack}
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-lg font-semibold"
            >
              Return to League
            </button>
            <button
  onClick={downloadPlayoffChart}
  className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold"
>
  ⬇️ Download Playoff Chart
</button>

          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Qualifier 1 and Eliminator */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-center border-b border-white/20 pb-2">
                  Qualifier 1
                </h3>
                <p className="text-sm text-center text-gray-400 mb-4">1st vs 2nd - Winner advances to Final</p>
                {renderPlayoffMatch(matches.find(m => m.id === 'qualifier1'), handleStartMatch)}
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-center border-b border-white/20 pb-2">
                  Eliminator
                </h3>
                <p className="text-sm text-center text-gray-400 mb-4">3rd vs 4th - Winner advances to Qualifier 2</p>
                {renderPlayoffMatch(matches.find(m => m.id === 'eliminator'), handleStartMatch)}
              </div>
            </div>

            {/* Right Column - Qualifier 2 and Final */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-center border-b border-white/20 pb-2">
                  Qualifier 2
                </h3>
                <p className="text-sm text-center text-gray-400 mb-4">Loser Q1 vs Winner Elim - Winner advances to Final</p>
                {renderPlayoffMatch(matches.find(m => m.id === 'qualifier2'), handleStartMatch)}
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-center border-b border-white/20 pb-2">
                  Final
                </h3>
                <p className="text-sm text-center text-gray-400 mb-4">Winner Q1 vs Winner Q2</p>
                {renderPlayoffMatch(matches.find(m => m.id === 'final'), handleStartMatch)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const renderPlayoffMatch = (match, onStart) => {
  if (!match) return null;
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center bg-black/20 p-3 rounded">
        <span className={`font-medium ${!match.teamA ? 'text-gray-500' : ''}`}>
          {match.teamA || 'TBD'}
        </span>
        <span className="mx-2">vs</span>
        <span className={`font-medium ${!match.teamB ? 'text-gray-500' : ''}`}>
          {match.teamB || 'TBD'}
        </span>
      </div>
      
      {match.completed ? (
        <div className="text-center py-2 bg-green-600/20 rounded">
          <p className="font-medium">{match.result}</p>
        </div>
      ) : match.teamA && match.teamB ? (
        <button
          onClick={() => onStart(match)}
          className="w-full py-2 bg-cyan-600 hover:bg-cyan-700 rounded font-medium"
        >
          Start Match
        </button>
      ) : (
        <div className="text-center py-2 bg-gray-600/20 rounded text-sm">
          Waiting for previous matches to complete
        </div>
      )}
    </div>
  );
};



// Scoring page component
const MatchScorePage = ({ match, onMatchComplete, onCancel }) => {
  const [scores, setScores] = useState([0, 0]);
  const [winner, setWinner] = useState(null);
  const [gameHistory, setGameHistory] = useState([]);
  const [showKnockout, setShowKnockout] = useState(false);


  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handleScore(0);
      if (e.key === 'ArrowRight') handleScore(1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [scores, winner]);

  const handleScore = (index) => {
    if (winner !== null) return;

    const newScores = [...scores];
    newScores[index]++;
    setScores(newScores);

    const opponent = index === 0 ? 1 : 0;
    const diff = newScores[index] - newScores[opponent];

    // Badminton rules: win by 2 after 21, max 30 points
    if ((newScores[index] >= 21 && diff >= 2) || newScores[index] === 30) {
      setWinner(index);
      setGameHistory([...gameHistory, [...newScores]]);
    }
  };

  const handleUndo = () => {
    if (gameHistory.length > 0) {
      setScores(gameHistory[gameHistory.length - 1]);
      setGameHistory(gameHistory.slice(0, -1));
      setWinner(null);
    }
  };

  const handleComplete = () => {
    const result = winner === 0
      ? `${match.teamA} won ${scores[0]}-${scores[1]}`
      : `${match.teamB} won ${scores[1]}-${scores[0]}`;
    
    onMatchComplete({
      ...match,
      result,
      score: [...scores],
      started: true,
      completed: true
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-800 text-white p-6">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onCancel}
          className="mb-6 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded flex items-center"
        >
          ← Back to Schedule
        </button>

        <div className="bg-white/10 rounded-xl p-6 mb-8">
          <h1 className="text-3xl font-bold text-center mb-2 text-cyan-400">
            {match.teamA} vs {match.teamB}
          </h1>
          <p className="text-center text-gray-300 mb-4">
            Use mouse clicks or keyboard arrows (← →) to score
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[0, 1].map((i) => (
            <div
              key={i}
              onClick={() => handleScore(i)}
              className={`cursor-pointer transition-all p-6 rounded-xl text-center shadow-lg ${
                winner === i 
                  ? 'bg-green-600/80 ring-4 ring-green-400'
                  : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              <h2 className="text-2xl font-semibold mb-4">
                {i === 0 ? match.teamA : match.teamB}
              </h2>
              <p className="text-6xl font-bold text-yellow-300">{scores[i]}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={handleUndo}
            disabled={gameHistory.length === 0}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded disabled:opacity-50"
          >
            Undo Last Point
          </button>
        </div>

        {winner !== null && (
          <div className="text-center">
            <div className="bg-green-600/90 rounded-lg py-4 px-8 text-xl font-semibold inline-block shadow-md mb-6">
              🏆 {winner === 0 ? match.teamA : match.teamB} wins!
            </div>
            <button
              onClick={handleComplete}
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-lg font-semibold"
            >
              Finalize Match Result
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// League scheduler component
const LeagueScheduler = ({ teams, initialMatches, onBack }) => {
  const [matches, setMatches] = useState(initialMatches);
  const [currentMatch, setCurrentMatch] = useState(null);
  const [standings, setStandings] = useState([]);
  const [showStandings, setShowStandings] = useState(false);
  const [showPlayoffs, setShowPlayoffs] = useState(false);
  const [completedMatchesCount, setCompletedMatchesCount] = useState(0);
  

  // Calculate standings and check match completion status
  useEffect(() => {
    const calculateStandings = () => {
      const teamStats = {};
      
      teams.forEach(team => {
        teamStats[team] = {
          wins: 0,
          losses: 0,
          pointsFor: 0,
          pointsAgainst: 0,
          points: 0
        };
      });

      let completedCount = 0;

      matches.forEach(match => {
        if (match.completed) {
          completedCount++;
          const [scoreA, scoreB] = match.score;
          const winner = match.result.includes(match.teamA) ? match.teamA : match.teamB;
          const loser = winner === match.teamA ? match.teamB : match.teamA;

          teamStats[winner].wins++;
          teamStats[winner].points += 2;
          teamStats[loser].losses++;
          
          // For net run rate calculation (cricket-style)
          teamStats[match.teamA].pointsFor += scoreA;
          teamStats[match.teamA].pointsAgainst += scoreB;
          teamStats[match.teamB].pointsFor += scoreB;
          teamStats[match.teamB].pointsAgainst += scoreA;
        }
      });

      setCompletedMatchesCount(completedCount);

      return Object.entries(teamStats)
        .map(([team, stats]) => ({
          team,
          ...stats,
          netRunRate: stats.pointsFor / (stats.pointsAgainst || 1) // Simple NRR calculation
        }))
        .sort((a, b) => 
          b.points - a.points || 
          b.netRunRate - a.netRunRate ||
          b.wins - a.wins
        );
    };

    setStandings(calculateStandings());
  }, [matches, teams]);

  const allMatchesCompleted = completedMatchesCount === matches.length;

const downloadStandings = () => {
  const csvContent = [
    ['Rank', 'Team', 'Played', 'Wins', 'Losses', 'Points', 'NRR'],
    ...standings.map((team, index) => [
      index + 1,
      team.team,
      team.wins + team.losses,
      team.wins,
      team.losses,
      team.points,
      team.netRunRate.toFixed(3)
    ])
  ].map(e => e.join(',')).join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'league_standings.csv';
  link.click();
};


  const handleStartMatch = (match) => {
    setCurrentMatch(match);
  };

  const handleMatchComplete = (updatedMatch) => {
    setMatches(prev => 
      prev.map(m => m.id === updatedMatch.id ? updatedMatch : m)
    );
    setCurrentMatch(null);
  };

  if (currentMatch) {
    return (
      <MatchScorePage
        match={currentMatch}
        onMatchComplete={handleMatchComplete}
        onCancel={() => setCurrentMatch(null)}
      />
    );
  }

  if (showPlayoffs) {
    return (
      <PlayoffBracket
        teams={teams}
        standings={standings}
        onBack={() => setShowPlayoffs(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-800 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <button 
            onClick={onBack}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded flex items-center gap-2"
          >
            ← Back to Setup
          </button>
          
          <div className="flex gap-2">
            <button
              onClick={() => setShowStandings(!showStandings)}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded"
            >
              {showStandings ? 'Hide Standings' : 'Show Standings'}
            </button>
            
            <button
              onClick={() => setShowPlayoffs(true)}
              disabled={!allMatchesCompleted}
              className={`px-4 py-2 rounded flex items-center gap-1 ${
                allMatchesCompleted 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-gray-600 cursor-not-allowed'
              }`}
            >
              🏆 Start Playoffs
              {!allMatchesCompleted && (
                <span className="text-xs">({completedMatchesCount}/{matches.length} matches done)</span>
              )}
            </button>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-center mb-6 text-cyan-400">
          League Schedule
        </h1>

        {showStandings && (
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">Current Standings</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4">#</th>
                    <th className="text-left py-3 px-4">Team</th>
                    <th className="py-3 px-4">Pld</th>
                    <th className="py-3 px-4">W</th>
                    <th className="py-3 px-4">L</th>
                    <th className="py-3 px-4">Pts</th>
                    <th className="py-3 px-4">NRR</th>
                  </tr>
                </thead>
                <tbody>
                  {standings.map((team, index) => (
                    <tr 
                      key={team.team} 
                      className={`border-b border-white/10 last:border-0 hover:bg-white/5 ${
                        index < 4 ? 'bg-green-900/20' : ''
                      }`}
                    >
                      <td className="py-3 px-4 font-medium">{index + 1}</td>
                      <td className="py-3 px-4 font-medium">{team.team}</td>
                      <td className="py-3 px-4 text-center">{team.wins + team.losses}</td>
                      <td className="py-3 px-4 text-center">{team.wins}</td>
                      <td className="py-3 px-4 text-center">{team.losses}</td>
                      <td className="py-3 px-4 text-center font-bold">{team.points}</td>
                      <td className={`py-3 px-4 text-center ${
                        team.netRunRate > 1 ? 'text-green-400' : 
                        team.netRunRate < 1 ? 'text-red-400' : ''
                      }`}>
                        {team.netRunRate.toFixed(3)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {allMatchesCompleted && (
  <div className="text-right mt-4">
    <button 
      onClick={downloadStandings}
      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm"
    >
      ⬇️ Download Standings
    </button>
  </div>
)}

              {standings.length > 0 && (
                <div className="mt-4 text-sm text-gray-300">
                  * Top 4 teams qualify for playoffs
                </div>
              )}
            </div>
          </div>
        )}

        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Matches</h2>
            <div className="text-sm bg-cyan-900/50 px-3 py-1 rounded">
              {completedMatchesCount}/{matches.length} completed
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-cyan-900/50">
                <tr>
                  <th className="px-4 py-3 text-left">Match</th>
                  <th className="px-4 py-3">Teams</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {matches.map((match) => (
                  <tr key={match.id} className="border-b border-white/10 hover:bg-white/5">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-gray-400">#{match.id.slice(-4)}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{match.teamA}</span>
                        <span className="mx-2 text-gray-400">vs</span>
                        <span className="font-medium">{match.teamB}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      {!match.started ? (
                        <span className="px-2 py-1 bg-gray-600 rounded text-sm">Pending</span>
                      ) : match.completed ? (
                        <div className="flex flex-col items-center">
                          <span className="px-2 py-1 bg-green-600 rounded text-sm mb-1">Completed</span>
                          <span className="text-xs">{match.result}</span>
                        </div>
                      ) : (
                        <span className="px-2 py-1 bg-yellow-600 rounded text-sm">In Progress</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      {!match.started ? (
                        <button
                          onClick={() => handleStartMatch(match)}
                          className="px-3 py-1 bg-cyan-600 hover:bg-cyan-700 rounded text-sm"
                        >
                          Start Match
                        </button>
                      ) : match.completed ? (
                        <button
                          onClick={() => handleStartMatch(match)}
                          className="px-3 py-1 bg-gray-600 hover:bg-gray-700 rounded text-sm"
                        >
                          View Details
                        </button>
                      ) : (
                        <button
                          onClick={() => handleStartMatch(match)}
                          className="px-3 py-1 bg-yellow-600 hover:bg-yellow-700 rounded text-sm"
                        >
                          Continue
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main tournament setup component
const TournamentSetup = () => {
  const [format, setFormat] = useState('');
  const [teams, setTeams] = useState(['', '']);
  const [showScheduler, setShowScheduler] = useState(false);
  const [matches, setMatches] = useState([]);
  const [showKnockout, setShowKnockout] = useState(false);

  const handleTeamChange = (index, value) => {
    const updated = [...teams];
    updated[index] = value;
    setTeams(updated);
  };

  const addTeam = () => {
    if (teams.length < 8) {
      setTeams([...teams, '']);
    }
  };

  const removeTeam = (index) => {
    if (teams.length > 2) {
      const updated = teams.filter((_, i) => i !== index);
      setTeams(updated);
    }
  };

  const handleSubmit = () => {
  const validTeams = teams.filter(t => t.trim() !== '');
  if (!format) {
    alert('Please select a tournament format');
    return;
  }
  if (validTeams.length < 2) {
    alert('Please enter at least 2 team names');
    return;
  }

  if (format === 'league') {
    const generatedMatches = generateLeagueMatches(validTeams);
    setMatches(generatedMatches);
    setShowScheduler(true);
  } else if (format === 'knockout') {
    setShowKnockout(true);
  }
};


  if (showKnockout && format === 'knockout') {
  return (
    <KnockoutScheduler
      teams={teams.filter(t => t.trim() !== '')}
      onBack={() => setShowKnockout(false)}
    />
  );
}


  if (showScheduler && format === 'league') {
    return (
      <LeagueScheduler
        teams={teams.filter(t => t.trim() !== '')}
        initialMatches={matches}
        onBack={() => setShowScheduler(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-800 text-white p-6">
      <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-cyan-400">
          🏆 Create Tournament
        </h1>

        <div className="mb-6">
          <label className="block mb-2 font-semibold">Tournament Format:</label>
          <select
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            className="w-full px-4 py-2 bg-black/30 border border-cyan-500 rounded"
          >
            <option value="">-- Select Format --</option>
            <option value="league">League (Round Robin)</option>
            <option value="knockout" >Knockout</option>
          </select>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="font-semibold">Teams ({teams.length}):</label>
            <button
              onClick={addTeam}
              disabled={teams.length >= 8}
              className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-sm disabled:opacity-50"
            >
              Add Team
            </button>
          </div>
          
          {teams.map((team, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={team}
                onChange={(e) => handleTeamChange(index, e.target.value)}
                className="w-full px-3 py-2 rounded bg-white/20 border border-cyan-300"
                placeholder={`Team ${index + 1}`}
              />
              <button
                onClick={() => removeTeam(index)}
                disabled={teams.length <= 2}
                className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded disabled:opacity-50"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          disabled={!format || teams.filter(t => t.trim() !== '').length < 2}
          className="w-full bg-cyan-600 hover:bg-cyan-700 py-3 rounded-lg text-lg font-semibold transition disabled:opacity-50"
        >
          Create Tournament
        </button>
      </div>
    </div>
  );
};

export default TournamentSetup;