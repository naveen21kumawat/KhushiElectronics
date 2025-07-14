import { Eye, Filter, Grid, Heart, List, Search, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

const URL = import.meta.env.VITE_API_URL;

function AllProducts() {
  const [laptops, setLaptops] = useState([]);
  const [filteredLaptops, setFilteredLaptops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [selectedBrands, setSelectedBrands] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterAndSortProducts();
  }, [laptops, searchTerm, sortBy, priceRange, selectedBrands]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${URL}/products`);
      const data = await response.json();
      console.log('Fetched laptops:', data);
      setLaptops(data);
      setFilteredLaptops(data);
    } catch (error) {
      console.error('Error fetching laptops:', error);
      setLaptops([]);
      setFilteredLaptops([]);
    } finally {
      setLoading(false);
    }
  };

  const filterAndSortProducts = () => {
    let filtered = [...laptops];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(laptop =>
        laptop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        laptop.specs?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        laptop.processor?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Price range filter
    if (priceRange.min || priceRange.max) {
      filtered = filtered.filter(laptop => {
        const price = parseInt(laptop.price.replace(/[^\d]/g, ''));
        const min = priceRange.min ? parseInt(priceRange.min) : 0;
        const max = priceRange.max ? parseInt(priceRange.max) : Infinity;
        return price >= min && price <= max;
      });
    }

    // Brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(laptop =>
        selectedBrands.some(brand => 
          laptop.name.toLowerCase().includes(brand.toLowerCase())
        )
      );
    }

    // Sort
    // filtered.sort((a, b) => {
    //   switch (sortBy) {
    //     case 'name':
    //       return a.name.localeCompare(b.name);
    //     case 'price-low':
    //       return parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, ''));
    //     case 'price-high':
    //       return parseInt(b.price.replace(/[^\d]/g, '')) - parseInt(a.price.replace(/[^\d]/g, ''));
    //     case 'newest':
    //       return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
    //     default:
    //       return 0;
    //   }
    // });

    setFilteredLaptops(filtered);
  };

  const getBrands = () => {
    const brands = new Set();
    laptops.forEach(laptop => {
      const brand = laptop.name.split(' ')[0];
      if (brand) brands.add(brand);
    });
    return Array.from(brands);
  };

  const toggleBrand = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setPriceRange({ min: '', max: '' });
    setSelectedBrands([]);
    setSortBy('name');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            All Products
          </h1>
          <p className="text-gray-600 text-lg">
            Explore our complete collection of premium refurbished laptops
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-blue-100">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Sort */}
            {/* <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
            </div> */}

            {/* Price Range */}
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min Price"
                value={priceRange.min}
                onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="number"
                placeholder="Max Price"
                value={priceRange.max}
                onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* View Mode */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Brand Filters */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Filter by Brand</h3>
            <div className="flex flex-wrap gap-2">
              {getBrands().map(brand => (
                <button
                  key={brand}
                  onClick={() => toggleBrand(brand)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedBrands.includes(brand)
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          {(searchTerm || priceRange.min || priceRange.max || selectedBrands.length > 0) && (
            <div className="mt-4">
              <button
                onClick={clearFilters}
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                Clear All Filters
              </button>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {filteredLaptops.length} of {laptops.length} products
          </p>
        </div>

        {/* Products Grid/List */}
        {filteredLaptops.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className={
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'space-y-4'
          }>
            {filteredLaptops.map((laptop, idx) => (
              <ProductCard 
                key={laptop._id || idx} 
                laptop={laptop} 
                viewMode={viewMode}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Product Card Component
function ProductCard({ laptop, viewMode }) {
  const [isLiked, setIsLiked] = useState(false);

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
        <div className="flex">
          <div className="w-48 h-32 flex-shrink-0">
            <img
              src={laptop.image}
              alt={laptop.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-gray-800 line-clamp-2">{laptop.name}</h3>
              {/* <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-full transition-colors ${
                  isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              </button> */}
            </div>
            <p className="text-2xl font-bold text-blue-600 mb-2">₹{laptop.price}</p>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {laptop.specs || laptop.processor || "Specs not available"}
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => window.location.href = `/product/${encodeURIComponent(laptop._id || idx)}`}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Eye className="w-4 h-4" />
                View Details
              </button>
              <div className="flex items-center gap-1 text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm text-gray-600">4.5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid view
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
      <div className="relative">
        <img
          src={laptop.image}
          alt={laptop.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${
            isLiked ? 'text-red-500 bg-white' : 'text-gray-400 bg-white/80 hover:text-red-500'
          }`}
        >
          <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
        </button>
        <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
          Refurbished
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {laptop.name}
        </h3>
        <p className="text-2xl font-bold text-blue-600 mb-2">₹{laptop.price}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {laptop.specs || laptop.processor || "Specs not available"}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm text-gray-600">4.5</span>
          </div>
          <button
            onClick={() => window.location.href = `/product/${encodeURIComponent(laptop._id || idx)}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default AllProducts; 