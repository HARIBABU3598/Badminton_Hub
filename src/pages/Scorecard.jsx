import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ScoreBoard from './ScoreBoard';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const matchHistoryRef = useRef(null);
  const [matchStarted, setMatchStarted] = useState(false);
  const [isDoubles, setIsDoubles] = useState(false);
  const [winnerName, setWinnerName] = useState('');
  const [formData, setFormData] = useState([]);
  const [images, setImages] = useState([]);
  const [matchHistory, setMatchHistory] = useState([]);
  const scoreBoardRef = useRef();
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    setMatchHistory([]);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!matchStarted || !scoreBoardRef.current) return;
      if (e.key === 'ArrowLeft') scoreBoardRef.current.addPointToPlayer(0);
      else if (e.key === 'ArrowRight') scoreBoardRef.current.addPointToPlayer(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [matchStarted]);

  const downloadMatchHistoryCSV = () => {
    if (matchHistory.length === 0) return alert('No match history to download');
    let csv = 'S.No,Winner,Loser,Score,Date\n';
    matchHistory.forEach((match, index) => {
      csv += `${index + 1},${match.winner},${match.loser},${match.score},${match.date}\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `badminton_matches_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const saveToHistory = (winnerIndex, scores) => {
    const loserIndex = winnerIndex === 0 ? 1 : 0;
    const winner = getPlayerName(winnerIndex);
    const loser = getPlayerName(loserIndex);
    const score = `${scores[winnerIndex]} - ${scores[loserIndex]}`;
    const date = new Date().toLocaleString();
    const newEntry = { winner, loser, score, date };
    const newHistory = [...matchHistory, newEntry];
    setMatchHistory(newHistory);
    if (userId) {
      fetch('http://localhost:8080/api/matches/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: parseInt(userId), ...newEntry })
      }).catch(console.error);
    }
  };

  const handleChange = (e, index) => {
    const updated = [...formData];
    updated[index] = e.target.value;
    setFormData(updated);
  };

  const handleStartMatch = () => {
    if (formData.some((n) => !n || n.trim() === '')) return alert('Please fill all player names');
    setMatchStarted(true);
    setWinnerName('');
  };

  const toggleMatchType = () => {
    const count = isDoubles ? 2 : 4;
    setIsDoubles(!isDoubles);
    setFormData(Array(count).fill(''));
    setImages(Array(count).fill(''));
  };

  const handleMatchEnd = (winnerIndex, scores) => {
    const winner = getPlayerName(winnerIndex);
    setWinnerName(winner);
    saveToHistory(winnerIndex, scores);
  };

  const handleReset = () => {
    setMatchStarted(false);
    setWinnerName('');
    setFormData([]);
    setImages([]);
  };

  const handleDeleteHistory = () => setMatchHistory([]);

  const getPlayerName = (index) => isDoubles
    ? `${formData[index * 2]} & ${formData[index * 2 + 1]}`
    : formData[index];

  const playerCount = isDoubles ? 4 : 2;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white p-6">
      <div className="max-w-4xl mx-auto space-y-12">
        {!matchStarted ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-md text-center space-y-6"
          >
            <h2 className="text-3xl font-bold">Score Card</h2>
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              onClick={toggleMatchType}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded transition"
            >
              Switch to {isDoubles ? 'Singles' : 'Doubles'}
            </motion.button>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[...Array(playerCount)].map((_, i) => (
                <motion.input
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  type="text"
                  placeholder={`Player ${i + 1} Name`}
                  value={formData[i] || ''}
                  onChange={(e) => handleChange(e, i)}
                  className="bg-white/80 text-black px-4 py-3 rounded-md w-full"
                />
              ))}
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              onClick={handleStartMatch}
              className="mt-4 bg-green-600 hover:bg-green-700 px-6 py-3 text-white font-semibold rounded-md transition"
            >
              Start Match
            </motion.button>
          </motion.div>
        ) : (
          <>
            <ScoreBoard
              ref={scoreBoardRef}
              players={formData}
              images={images}
              isDoubles={isDoubles}
              onMatchEnd={handleMatchEnd}
            />
            <div className="text-center">
              <button
                onClick={handleReset}
                className="mt-4 bg-red-600 hover:bg-red-700 px-6 py-3 text-white font-medium rounded-md"
              >
                Reset Match
              </button>
            </div>
          </>
        )}

        {winnerName && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="bg-green-600/90 rounded-lg py-4 px-8 text-xl font-semibold inline-block shadow-md">
              <span className="text-white">{winnerName}</span> wins the match!
            </div>
          </motion.div>
        )}

        {matchHistory.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="match-history-pdf bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md"
            ref={matchHistoryRef}
          >
            <h3 className="text-2xl font-semibold mb-4">Match History</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-white text-center border-separate border-spacing-y-2">
                <thead>
                  <tr className="bg-white/20">
                    <th className="p-2">S.No</th>
                    <th className="p-2">Winner</th>
                    <th className="p-2">Loser</th>
                    <th className="p-2">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {matchHistory.map((entry, idx) => (
                    <motion.tr
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white/10 rounded"
                    >
                      <td className="p-2">{idx + 1}</td>
                      <td className="p-2">{entry.winner}</td>
                      <td className="p-2">{entry.loser}</td>
                      <td className="p-2">{entry.score}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center mt-4">
              <button
                onClick={downloadMatchHistoryCSV}
                className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-md text-white font-medium"
              >
                ⬇️ Download Excel (CSV)
              </button>
            </div>

            <div className="text-center mt-4">
              <button
                onClick={handleDeleteHistory}
                className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-md text-white font-medium"
              >
                Delete Match History
              </button>
            </div>
          </motion.div>
        )}

        <div className="mt-12 text-center">
          <Link
            to="/dashboard"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-300"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
