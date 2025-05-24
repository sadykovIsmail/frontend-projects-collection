import React from 'react';

export default function Modal({ onClose, onRetry }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Game Over</h2>
        <button onClick={() => { onRetry(); onClose(); }}>Try Again</button>
      </div>
    </div>
  );
}