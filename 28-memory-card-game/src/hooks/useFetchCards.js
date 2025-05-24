// src/hooks/useFetchCards.js
import React, { useState, useEffect } from 'react';
import { shuffleArray } from '../utils/shuffleArray';

export default function useFetchCards() {
  const [cards, setCards]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function fetchCats() {
      try {
        // 1) Fetch 12 distinct cat images
        const res  = await fetch(
          'https://api.thecatapi.com/v1/images/search?limit=12'
        );
        const data = await res.json();

        if (isMounted) {
          // 2) Map directly to your card shape
          const formatted = data.map(cat => ({
            id:    cat.id,
            image: cat.url
          }));
          // 3) Shuffle once
          setCards(shuffleArray(formatted));
        }
      } catch (err) {
        if (isMounted) setError(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    fetchCats();
    return () => { isMounted = false; };
  }, []);

  return { cards, loading, error };
}
