import React, { useState, useEffect } from 'react';

// Fetch 12 random dog images
export default function useFetchCards() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function fetchImages() {
      try {
        const res = await fetch('https://dog.ceo/api/breeds/image/random/12');
        const data = await res.json();
        if (isMounted) {
          const formatted = data.message.map((url, idx) => ({ id: idx, image: url }));
          setCards(formatted);
        }
      } catch (err) {
        if (isMounted) setError(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    fetchImages();
    return () => { isMounted = false; };
  }, []);

  return { cards, loading, error };
}