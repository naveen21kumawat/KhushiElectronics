import React from "react";
import "./RefurbishedShop.css";

const laptops = [
  {
    id: 1,
    name: "Dell Latitude 5400",
    config: "Intel Core i5 8th Gen, 8GB RAM, 256GB SSD",
    price: "₹24,999",
    image: "https://via.placeholder.com/300x200?text=Dell+5400",
  },
  {
    id: 2,
    name: "HP EliteBook 840 G5",
    config: "Intel Core i7 8th Gen, 16GB RAM, 512GB SSD",
    price: "₹34,499",
    image: "https://via.placeholder.com/300x200?text=HP+EliteBook",
  },
  {
    id: 3,
    name: "Lenovo ThinkPad X1 Carbon",
    config: "Intel Core i5 7th Gen, 8GB RAM, 256GB SSD",
    price: "₹28,999",
    image: "https://via.placeholder.com/300x200?text=ThinkPad+X1",
  },
];

const RefurbishedShop = () => {
  return (
    <div className="page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-brand">KhusiLaptop</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <h1>Refurbished Laptops</h1>
        <div className="laptop-grid">
          {laptops.map((laptop) => (
            <div className="laptop-card" key={laptop.id}>
              <img src={laptop.image} alt={laptop.name} />
              <h2>{laptop.name}</h2>
              <p>{laptop.config}</p>
              <p className="price">{laptop.price}</p>
              <button>Buy Now</button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 RefurbZone. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RefurbishedShop;
