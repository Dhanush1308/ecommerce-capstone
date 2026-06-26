import { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(items);
  }, []);

  const removeItem = (index) => {
    const updated = [...cart];

    updated.splice(index, 1);

    setCart(updated);

    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <h3>Cart is Empty</h3>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px"
              }}
            >
              <img
                src={item.image}
                width="120"
                alt={item.name}
              />

              <h3>{item.name}</h3>

              <p>₹ {item.price}</p>

              <button onClick={() => removeItem(index)}>
                Remove
              </button>
            </div>
          ))}

          <h2>Total: ₹ {total}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;