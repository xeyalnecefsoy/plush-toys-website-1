import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import Header from '@components/layout/Header';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, total, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Header 
          title="Shopping Cart" 
          subtitle="Your cart is currently empty" 
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <svg className="w-24 h-24 mx-auto text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </motion.div>
            <Link 
              to="/shop"
              className="inline-flex items-center px-6 py-3 text-base font-medium rounded-full text-white bg-pink-400 hover:bg-pink-500 transition-colors duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header 
        title="Shopping Cart" 
        subtitle="Review your items and checkout" 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {cart.map((item) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="py-6 flex"
                    >
                      <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="ml-4 flex-1 flex flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                            <h3>{item.name}</h3>
                            <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            {item.materials[0]}
                          </p>
                        </div>
                        <div className="flex-1 flex items-end justify-between text-sm">
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                            >
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                              </svg>
                            </button>
                            <span className="text-gray-700 dark:text-gray-300">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                            >
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            </button>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => removeFromCart(item.id)}
                            className="font-medium text-pink-400 hover:text-pink-500"
                          >
                            Remove
                          </motion.button>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={clearCart}
                  className="w-full px-4 py-2 text-sm font-medium text-pink-400 border border-pink-400 rounded-full hover:bg-pink-50 dark:hover:bg-pink-400/10 transition-colors duration-300"
                >
                  Clear Cart
                </motion.button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Order Summary</h2>
              <div className="flow-root">
                <dl className="space-y-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-600 dark:text-gray-400">Subtotal</dt>
                    <dd className="text-sm font-medium text-gray-900 dark:text-white">${total.toFixed(2)}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-600 dark:text-gray-400">Shipping</dt>
                    <dd className="text-sm font-medium text-gray-900 dark:text-white">Free</dd>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4 flex items-center justify-between">
                    <dt className="text-base font-medium text-gray-900 dark:text-white">Order total</dt>
                    <dd className="text-base font-medium text-pink-400">${total.toFixed(2)}</dd>
                  </div>
                </dl>
              </div>
              <div className="mt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 text-base font-medium rounded-full text-white bg-pink-400 hover:bg-pink-500 transition-colors duration-300 shadow-lg shadow-pink-400/30 hover:shadow-pink-500/40"
                >
                  Checkout
                </motion.button>
                <Link 
                  to="/shop"
                  className="block text-center mt-4 text-sm text-gray-600 dark:text-gray-400 hover:text-pink-400 dark:hover:text-pink-400 transition-colors duration-300"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 