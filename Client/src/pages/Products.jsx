import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

function Products() {

    const [products, setProducts] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {

        api.get("/products")
            .then((res) => setProducts(res.data))
            .catch(console.error);

    }, []);

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container">

            <h2>Products</h2>

            <SearchBar search={search} setSearch={setSearch} />

            <div className="grid">
                {filtered.length > 0 ? (
                    filtered.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        />
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>

        </div>

    );
}

export default Products;