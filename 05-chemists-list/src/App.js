import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const filtered = people.filter(p => p.profession === 'chemist')
      const unfiltered = people.filter(p => p.profession !== 'chemist')

  
const listItems = filtered.map(person =>
  
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  const everyoneElse = unfiltered.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );

  
  return (
    <div>
       <article>
      <h1>Chemists</h1>
      <ul>{listItems}</ul>
    </article>
      <article>
      <h1>Everyone Else</h1>
      <ul>{everyoneElse}</ul>
    </article>
  </div>
   
  );
}
