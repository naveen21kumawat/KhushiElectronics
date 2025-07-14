import {
  ArrowLeft,
  Battery,
  CheckCircle,
  Clock,
  Cpu,
  Database,
  Eye,
  HardDrive,
  Heart,
  Info,
  Monitor,
  Share2,
  Shield,
  ShoppingCart,
  Star,
  Truck,
  Zap
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const URL = import.meta.env.VITE_API_URL;

function ProductPage() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (!id) return;
    fetchProductDetails();
    fetchRelatedProducts();
  }, [id]);

  const fetchProductDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${URL}/products/${id}`);
      if (!response.ok) throw new Error('Product not found');
      const data = await response.json();
      console.log('Fetched product details:', data);
      setProductDetails(data.laptop);
    } catch (error) {
      console.error('Error fetching product:', error);
      setProductDetails(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedProducts = async () => {
    try {
      const response = await fetch(`${URL}/products`);
      const data = await response.json();
      // Get 4 random products excluding current one
      const filtered = data.filter(product => product._id !== id);
      const shuffled = filtered.sort(() => 0.5 - Math.random());
      setRelatedProducts(shuffled.slice(0, 4));
    } catch (error) {
      console.error('Error fetching related products:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!productDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Link 
            to="/shop" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  // Use all images from the backend (array)
  const productImages = Array.isArray(productDetails.image) && productDetails.image.length > 0
    ? productDetails.image
    : ["https://via.placeholder.com/600x400"];

  // Expanded specs from backend model
  const specs = [
    { icon: Cpu, label: "Processor", value: productDetails.processor },
    { icon: Database, label: "RAM", value: `${productDetails.ram} GB` },
    { icon: HardDrive, label: "Storage", value: productDetails.storage },
    { icon: Monitor, label: "Screen Size", value: productDetails.ScreenSize },
    { icon: Zap, label: "Graphics", value: productDetails.graphics },
    { icon: Info, label: "Model", value: productDetails.model },
    { icon: Info, label: "Brand", value: productDetails.brand },
    { icon: Info, label: "OS", value: productDetails.os },
    { icon: Info, label: "Generation", value: productDetails.generation },
    { icon: Battery, label: "Battery", value: productDetails.battery },
    { icon: Shield, label: "Warranty", value: productDetails.warranty },
    { icon: Info, label: "Availability", value: productDetails.availability ? "In Stock" : "Out of Stock" },
    { icon: Info, label: "Release Date", value: productDetails.releaseDate ? new Date(productDetails.releaseDate).toLocaleDateString() : "-" },
    { icon: Info, label: "Added Date", value: productDetails.addedDate ? new Date(productDetails.addedDate).toLocaleDateString() : "-" },
    { icon: Info, label: "Discount", value: productDetails.discount ? `${productDetails.discount}%` : "0%" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-blue-600 transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{productDetails.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Product Header */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative group">
                <img
                  src={productImages[selectedImage]}
                  alt={productDetails.name}
                  className="w-full h-96 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`p-3 rounded-full transition-colors ${
                      isLiked ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-600 hover:text-red-500'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                  </button>
                  <button className="p-3 rounded-full bg-white/80 text-gray-600 hover:text-blue-600 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Refurbished
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="flex gap-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index 
                        ? 'border-blue-600 scale-105' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${productDetails.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {productDetails.name}
                </h1>
                {/* <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">(4.8/5)</span>
                  </div>
                  <span className="text-sm text-gray-500">• 127 reviews</span>
                </div> */}
                <p className="text-gray-600 text-lg">
                  Premium refurbished laptop with guaranteed quality and performance
                </p>
              </div>

              {/* Price */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-blue-600">₹{productDetails.price}</span>
                  <span className="text-lg text-gray-500 line-through">₹{productDetails.originalPrice}</span>
                  {productDetails.discount > 0 && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                      Save {productDetails.discount}%
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mt-2">Inclusive of all taxes</p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">Quality Tested</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium">{productDetails.warranty || "Warranty info not available"}</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Truck className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium">Free Delivery</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium">24/7 Support</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Contact for Purchase
                </button>
                <button className="px-6 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specs.map((spec, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="p-2 bg-blue-100 rounded-lg">
                  {spec.icon ? <spec.icon className="w-6 h-6 text-blue-600" /> : null}
                </div>
                <div>
                  <p className="text-sm text-gray-600">{spec.label}</p>
                  <p className="font-semibold text-gray-900">{spec.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Description</h2>
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              {productDetails.description || 
                "This premium refurbished laptop offers exceptional performance and reliability. Each unit undergoes rigorous testing to ensure it meets our high quality standards. Perfect for business professionals, students, and anyone who demands both performance and value."
              }
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What's Included:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Laptop with charger
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Quality assurance certificate
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Warranty documentation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Setup assistance
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Refurbishment Process:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Complete hardware inspection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Performance optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Cosmetic restoration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Quality testing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product, index) => (
                <Link
                  key={product._id || index}
                  to={`/product/${product._id}`}
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Refurbished
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-lg font-bold text-blue-600 mb-2">₹{product.price}</p>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {product.specs || product.processor || "Specs not available"}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
