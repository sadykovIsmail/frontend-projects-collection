// pages/CartPage.jsx
export default function CartPage({ cart }) {
  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div key={item.id}>
            <p>{item.title} x {item.quantity}</p>
            <p>Total: ${item.price * item.quantity}</p>
          </div>
        ))
      )}
    </div>
  );
}
