import React, { useState, useEffect } from 'react';
import Scoreboard from './components/Scoreboard.jsx';
import GameBoard from './components/GameBoard.jsx';
import Modal from './components/Modal.jsx';
import useFetchCards from './hooks/useFetchCards.jsx';
import { shuffleArray } from './utils/shuffleArray.jsx';
import './index.css';

function App() {
  const { cards: fetched, loading, error } = useFetchCards();
  const [cards, setCards] = useState([]);
  const [seen, setSeen] = useState(new Set());
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(() => Number(localStorage.getItem('best') || 0));
  const [modalOpen, setModalOpen] = useState(false);
  // initialize & reshuffle on fetch
  useEffect(() => {
    if (!loading && fetched.length) {
      setCards(shuffleArray(fetched));
    }
  }, [fetched, loading]);

  const handleClick = (id) => {
    if (seen.has(id)) {
      const newBest = Math.max(best, score);
      setBest(newBest);
      localStorage.setItem('best', newBest);
      setModalOpen(true);
    } else {
      setSeen(prev => new Set(prev).add(id));
      setScore(prev => prev + 1);
    }
    setCards(prev => shuffleArray(prev));
  };

  const handleRetry = () => {
    setScore(0);
    setSeen(new Set());
    setCards(shuffleArray(fetched));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading cards.</p>;

  return (
    <div className="app">
      <h1>Memory Game</h1>
      <Scoreboard score={score} best={best} />
      <GameBoard cards={cards} onCardClick={handleClick} />
      {modalOpen && <Modal onClose={() => setModalOpen(false)} onRetry={handleRetry} />}
    </div>
  );
}

export default App;
