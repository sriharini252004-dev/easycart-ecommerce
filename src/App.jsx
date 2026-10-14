
import { useState } from "react";
import "./App.css";

const products = [
  { id: 1, name: "Women's T-Shirt", category: "Women", price: 499, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500" },
  { id: 2, name: "Men's Hoodie", category: "Men", price: 999, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500" },
  { id: 3, name: "Running Shoes", category: "Shoes", price: 1299, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" },
  { id: 4, name: "Backpack", category: "Bags", price: 899, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500" },
];

function App() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  const categories = ["All", "Women", "Men", "Shoes", "Bags"];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || product.category === category)
  );

  function addToCart(product) {
    setCart((current) => [...current, product]);
  }

  return (
    <div className="app">
      <header className="navbar">
        <h1 className="logo">🛍️ Easy<span>Cart</span></h1>

        <input
          className="search"
          placeholder="Search for products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="cart-button">
          🛒 Cart ({cart.length})
        </button>
      </header>

      <section className="hero">
        <div>
          <p className="welcome">Welcome to EasyCart</p>
          <h2>Shop Your<br /><span>Favorite Products</span></h2>
          <p>Best quality. Affordable prices. Happy shopping!</p>
          <a href="#products" className="shop-button">Shop Now →</a>
        </div>
        <div className="hero-icon">🛍️</div>
      </section>

      <section className="categories">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "category active" : "category"}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </section>

      <section className="products-section" id="products">
        <h2>Our Products</h2>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <p className="product-category">{product.category}</p>
              <h3>{product.name}</h3>
              <p className="price">₹{product.price.toLocaleString("en-IN")}</p>
              <button
                className="add-button"
                onClick={() => addToCart(product)}
              >
                + Add to Cart
              </button>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="empty-message">No products found.</p>
        )}
      </section>

      <footer>EasyCart © 2026 · Simple shopping, happy living.</footer>
    </div>
  );
}

export default App;
