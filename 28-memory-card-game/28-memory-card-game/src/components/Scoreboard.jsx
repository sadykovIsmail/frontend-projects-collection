import React from 'react';

export default function Scoreboard({ score, best }) {
  return (
    <div className="scoreboard">
      <div>Score: {score}</div>
      <div>Best: {best}</div>
    </div>
  );
}