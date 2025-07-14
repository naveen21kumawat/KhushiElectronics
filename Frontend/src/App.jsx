import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import AddressPage from "./components/AddressPage";
import AllProducts from "./components/AllProducts";
import ContactSupport from "./components/ContactSupport";
import FeaturedProduct from "./components/FeaturedProduct";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PrivacyPloicy from './components/PrivacyPolicy';
import ProductPage from "./components/ProductPage";
import ReviewPage from "./components/ReviewPage";
import ScrollToTop from "./components/ScrollToTop";
import TermsOfService from "./components/TermsOfService";
import WarrantyInfo from "./components/WarrantyInfo";
import Whychooseus from "./components/Whychooseus";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Router>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route className='' path="/" element={<Hero />} />
        </Routes>
        <Routes>
          <Route path="/" element={<FeaturedProduct />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/privacy-policy" element={<PrivacyPloicy/>}/>
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/warranty" element={<WarrantyInfo />} />
          <Route path="/contact-support" element={<ContactSupport />} />
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
    </div>
  );
}
