import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch(console.error);
  }, [id]);

  if (!product) return <h2>Loading...</h2>;
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart!");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <img
        src={product.image}
        alt={product.name}
        width="300"
      />

      <h1>{product.name}</h1>

      <h2>₹ {product.price}</h2>

      <p>{product.description}</p>

      <h3>Category: {product.category}</h3>

      <h3>Stock: {product.stock}</h3>
      <button onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;