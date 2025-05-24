import React from 'react';

export default function Card({ id, image, onClick }) {
  return (
    <div className="card" onClick={() => onClick(id)} role="button" tabIndex={0}>
      <img src={image} alt="memory-card" />
    </div>
  );
}