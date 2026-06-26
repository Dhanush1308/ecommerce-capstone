import { useEffect, useState } from "react";
import API from "../services/api";
import ProductCard from "../Components/ProductCard";
import SearchBar from "../Components/SearchBar";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      console.log("Fetching products...");

      const res = await API.get("/products");

      console.log("Response:", res.data);

      setProducts(res.data);
    } catch (err) {
      console.error("API Error:", err);
    }
  };

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Welcome to ShopEasy</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="grid">
        {filtered.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;