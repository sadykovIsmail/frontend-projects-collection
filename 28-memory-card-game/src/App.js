import React, { useState, useEffect } from 'react';
import Scoreboard from './components/Scoreboard';
import GameBoard from './components/GameBoard';
import Modal from './components/Modal';
import useFetchCards from './hooks/useFetchCards';
import { shuffleArray } from './utils/shuffleArray';
import './index.css';

const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=12';

function App() {
  const { cards: fetched, loading, error } = useFetchCards(API_URL);
  const [cards, setCards] = useState([]);
  const [seen, setSeen] = useState(new Set());
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(() => Number(localStorage.getItem('best') || 0));
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!loading && fetched.length) {
      const formatted = fetched.map(p => ({
        name: p.name,
        image: p.sprites?.front_default || p.url,
      }));
      setCards(shuffleArray(formatted));
    }
  }, [fetched, loading]);

  const handleClick = (id) => {
    if (seen.has(id)) {
      const newBest = Math.max(best, score);
      setBest(newBest);
      localStorage.setItem('best', newBest);
      setModalOpen(true);
      setScore(0);
      setSeen(new Set());
    } else {
      setSeen(prev => new Set(prev).add(id));
      setScore(prev => prev + 1);
    }
    setCards(prev => shuffleArray(prev));
  };

  const handleRetry = () => {
    setCards(prev => shuffleArray(prev));
    setSeen(new Set());
    setScore(0);
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