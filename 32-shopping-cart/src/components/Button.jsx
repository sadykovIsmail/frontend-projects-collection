function handleSubmit(e) {
  e.preventDefault(); 
  alert("Button clicked - item added to cart");
}

const Button = ({ onClick, type }) => {
  return (
    <button onClick={onClick} type={type || "button"}>
      Add to cart
    </button>
  );
};

export default function App() {
  return <Button onClick={handleSubmit} type="submit" />;
}
