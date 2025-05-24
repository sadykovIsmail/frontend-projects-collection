export default function useFetchCards() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch('https://dog.ceo/api/breeds/image/random/12');
        const data = await res.json();
        // data.message is array of image URLs
        const formatted = data.message.map((url, idx) => ({ id: idx, image: url }));
        setCards(formatted);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  return { cards, loading, error };
}
