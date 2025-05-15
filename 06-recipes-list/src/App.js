import { recipes } from './data.js';
export default function RecipeList() {
  const items = recipes.map(p => (
    <li key={p.id}>
      <h2>{p.name}</h2>
      <p>{p.ingredients}</p>
    </li>
  ));

  return (
    <div>
      <h1>Recipes</h1>
      <ul>{items}</ul>
    </div>
  );
}

