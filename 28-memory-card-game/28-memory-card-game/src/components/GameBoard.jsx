import React from 'react';
import Card from './Card.jsx';

export default function GameBoard({ cards, onCardClick }) {
  return (
    <div className="board">
      {cards.map(card => (
        <Card
          key={card.id}
          id={card.id}
          image={card.image}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
}