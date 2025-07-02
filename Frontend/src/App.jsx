import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import FeaturedProduct from "./components/FeaturedProduct";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import ReviewPage from "./components/ReviewPage";
import About from "./components/About";
import AddressPage from "./components/AddressPage";
import Whychooseus from "./components/Whychooseus";
import AnimatedLaptops from "./components/AnimateLaptop";
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
          <Route path="/review" element={<ReviewPage />} />
        </Routes>
        <div className="mt-3">
          <Routes>
            <Route path="/shop" element={<FeaturedProduct />} />
            <Route path="/" element={<Whychooseus />} />

            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/location" element={<AddressPage />} />
          </Routes>
        <Routes>
          <Route path="/" element={<AnimatedLaptops/>} />
        </Routes>
        </div>

        <Footer />
      </Router>
    </>
  );
}
