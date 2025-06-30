import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import FeaturedProduct from "./components/FeaturedProduct";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
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
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}
