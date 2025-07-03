// HomePage.jsx
import { useState, useEffect, useRef } from 'react';
import ScoreBoard from './ScoreBoard';
import html2pdf from 'html2pdf.js';


const HomePage = () => {
  const matchHistoryRef = useRef(null);
  const [matchStarted, setMatchStarted] = useState(false);
  const [isDoubles, setIsDoubles] = useState(false);
  const [winnerName, setWinnerName] = useState('');
  const [formData, setFormData] = useState([]);
  const [images, setImages] = useState([]);
  const [matchHistory, setMatchHistory] = useState([]);
  const scoreBoardRef = useRef();

  const cheerSound = new Audio('/sounds/cheer.mp3');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('matchHistory'));
    if (saved) setMatchHistory(saved);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!matchStarted || !scoreBoardRef.current) return;

      if (e.key === 'ArrowLeft') {
        scoreBoardRef.current.addPointToPlayer(0);
      } else if (e.key === 'ArrowRight') {
        scoreBoardRef.current.addPointToPlayer(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [matchStarted]);


const downloadMatchHistoryPDF = () => {
  if (!matchHistoryRef.current) return;

  const opt = {
    margin: 0.5,
    filename: 'match_history.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(matchHistoryRef.current).save();
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
  localStorage.setItem('matchHistory', JSON.stringify(newHistory));

  // Save to Spring Boot
  fetch('http://localhost:8080/api/matches/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId: parseInt(userId), // from login
      ...newEntry
    })
  })
    .then(res => {
      if (!res.ok) throw new Error('Failed to save match');
      console.log('Match saved to DB');
    })
    .catch(err => console.error(err));
};


  const handleChange = (e, index) => {
    const updated = [...formData];
    updated[index] = e.target.value;
    setFormData(updated);
  };

  const handleStartMatch = () => {
    if (formData.some((n) => !n || n.trim() === '')) {
      alert('Please fill all player names');
      return;
    }
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
    cheerSound.play();
  };

  const handleReset = () => {
    setMatchStarted(false);
    setWinnerName('');
    setFormData([]);
    setImages([]);
  };

  const handleDeleteHistory = () => {
    localStorage.removeItem('matchHistory');
    setMatchHistory([]);
  };

  const getPlayerName = (index) => {
    return isDoubles
      ? `${formData[index * 2]} & ${formData[index * 2 + 1]}`
      : formData[index];
  };

  const playerCount = isDoubles ? 4 : 2;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white p-6">
      <div className="max-w-4xl mx-auto space-y-12">
        {!matchStarted ? (
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-md text-center space-y-6">
            <h2 className="text-3xl font-bold">Score Card</h2>
            <button
              onClick={toggleMatchType}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded transition"
            >
              Switch to {isDoubles ? 'Singles' : 'Doubles'}
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[...Array(playerCount)].map((_, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={`Player ${i + 1} Name`}
                  value={formData[i] || ''}
                  onChange={(e) => handleChange(e, i)}
                  className="bg-white/80 text-black px-4 py-3 rounded-md w-full"
                />
              ))}
            </div>
            <button
              onClick={handleStartMatch}
              className="mt-4 bg-green-600 hover:bg-green-700 px-6 py-3 text-white font-semibold rounded-md transition"
            >
              Start Match
            </button>
          </div>
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
          <div className="text-center">
            <div className="bg-green-600/90 rounded-lg py-4 px-8 text-xl font-semibold inline-block shadow-md">
               <span className="text-white">{winnerName}</span> wins the match!
            </div>
          </div>
        )}

        {matchHistory.length > 0 && (
  <div
    className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md"
    ref={matchHistoryRef}
  >
            <h3 className="text-2xl font-semibold mb-4"> Match History</h3>
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
                    <tr key={idx} className="bg-white/10 rounded">
                      <td className="p-2">{idx + 1}</td>
                      <td className="p-2">{entry.winner}</td>
                      <td className="p-2">{entry.loser}</td>
                      <td className="p-2">{entry.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-4">
  <button
    onClick={downloadMatchHistoryPDF}
    className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md text-white font-medium mr-2"
  >
    ⬇️ Download Match History
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
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
