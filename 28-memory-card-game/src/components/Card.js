import React from 'react';

export default function Card({ id, image, name, onClick }) {
  return (
    <div className="card" onClick={() => onClick(id)} role="button" tabIndex={0}>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}