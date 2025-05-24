import React from 'react';
import Card from './Card';

export default function GameBoard({ cards, onCardClick }) {
  return (
    <div className="board">
      {cards.map(card => (
        <Card
          key={card.name}
          id={card.name}
          image={card.image}
          name={card.name}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
}