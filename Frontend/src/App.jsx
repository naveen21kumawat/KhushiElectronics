import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RefurbishedLaptopShop from "./components/RefurbishedLaptopShop";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import FeaturedProduct from "./components/FeaturedProduct";
import ProductPage from "./components/ProductPage";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
        <Routes>
          <Route path="/" element={<FeaturedProduct />} />
          <Route path="/productpage" element={<ProductPage />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}
