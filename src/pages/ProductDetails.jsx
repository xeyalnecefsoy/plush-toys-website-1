import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { products } from '@/data/products';

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            {t('productNotFound')}
          </h2>
          <Link
            to="/shop"
            className="text-pink-400 hover:text-pink-500 font-medium"
          >
            {t('backToShop')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-square rounded-2xl overflow-hidden bg-white dark:bg-gray-800"
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden ${
                    selectedImage === index
                      ? 'ring-2 ring-pink-400'
                      : 'ring-1 ring-gray-200 dark:ring-gray-700'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                {product.name}
              </h1>
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-gray-600 dark:text-gray-300">
                  {product.rating} / 5.0
                </span>
              </div>
            </div>

            <p className="text-2xl font-bold text-pink-400">
              ${product.price.toFixed(2)}
            </p>

            <div className="prose dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300">
                {product.description}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                {t('materials')}
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                {product.materials.map((material, index) => (
                  <li key={index}>{material}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-gray-700 dark:text-gray-300">
                  {t('quantity')}:
                </label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-gray-800 dark:text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => addToCart(product, quantity)}
                className="w-full bg-pink-400 text-white py-3 px-8 rounded-full hover:bg-pink-500 transition-colors duration-300 shadow-lg shadow-pink-400/30 hover:shadow-pink-500/40"
              >
                {t('Add to Cart')}
              </motion.button>
            </div>

            {/* Reviews Section */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                {t('Customer Reviews')}
              </h3>
              {product.reviews.length > 0 ? (
                <div className="space-y-4">
                  {product.reviews.map((review) => (
                    <div
                      key={review.id}
                      className="bg-white dark:bg-gray-800 p-4 rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-800 dark:text-white">
                          {review.user}
                        </span>
                        <div className="flex text-yellow-400">
                          {[...Array(review.rating)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 dark:text-gray-300">
                  {t('No reviews yet')}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 