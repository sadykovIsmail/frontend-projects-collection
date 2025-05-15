// src/components/RecipeList.jsx
import React from 'react';
import { recipes } from '../data.js';
import Recipe from './Recipe.jsx';

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(r => (
        <Recipe key={r.id} {...r} />
      ))}
    </div>
  );
}
