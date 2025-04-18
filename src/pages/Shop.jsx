import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@components/layout/Header';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import Toast from '@/components/shared/Toast';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCart();
  const { t } = useLanguage();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  
  const handleAddToCart = (product) => {
    addToCart(product);
    setToastMessage(`${product.name} ${t('addedToCart')}`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Hide after 3 seconds
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header 
        title={t('ourCollection')} 
        subtitle={t('collectionSubtitle')} 
      />
      
      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-pink-400 text-white shadow-lg shadow-pink-400/30'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-gray-700'
            }`}
          >
            All Products
          </button>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 ${
                selectedCategory === category.name
                  ? 'bg-pink-400 text-white shadow-lg shadow-pink-400/30'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.stock < 5 && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      {t('onlyLeft', { count: product.stock })}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-pink-400 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="text-gray-600 dark:text-gray-300 ml-1">{product.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-pink-400">${product.price}</span>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {product.materials[0]}
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg shadow-pink-400/30 hover:shadow-pink-500/40"
                >
                  {t('Add to Cart')}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Toast 
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
} 