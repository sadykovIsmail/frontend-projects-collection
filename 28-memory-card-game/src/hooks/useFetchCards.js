import { useState, useEffect } from 'react';

export default function useFetchCards(apiUrl) {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setCards(data.results || []);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [apiUrl]);

  return { cards, loading, error };
}