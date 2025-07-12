import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import AddressPage from "./components/AddressPage";
import AllProducts from "./components/AllProducts";
import FeaturedProduct from "./components/FeaturedProduct";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import ReviewPage from "./components/ReviewPage";
import Whychooseus from "./components/Whychooseus";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route className='' path="/" element={<Hero />} />
        </Routes>
        <Routes>
          <Route path="/" element={<FeaturedProduct />} />
          <Route path="/review" element={<ReviewPage />} />
        </Routes>
        <div className="mt-3">
          <Routes>
            <Route path="/shop" element={<AllProducts />} />
            <Route path="/" element={<Whychooseus />} />

            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/location" element={<AddressPage />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </>
  );
}
