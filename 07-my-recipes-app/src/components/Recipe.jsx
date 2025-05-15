// src/components/Recipe.jsx
import React from 'react';

export default function Recipe({ name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map(ing => (
          <li key={ing}>{ing}</li>
        ))}
      </ul>
    </div>
  );
}
