import { useEffect, useState } from "react";
import API from "../api/productApi";
import ProductCard from "../../../Client/src/Components/ProductCard";
import SearchBar from "../../../Client/src/Components/SearchBar";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");
      setProducts(res.data);
    } catch (err) {
      console.error(err);
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