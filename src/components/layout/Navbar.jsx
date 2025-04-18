import { Link } from 'react-router-dom';
import { useState } from 'react';
import ThemeToggle from '@/components/shared/ThemeToggle';
import LanguageToggle from '@/components/shared/LanguageToggle';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  const { t } = useLanguage();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm fixed w-full z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-pink-400">
              <motion.span whileHover={{ scale: 1.05 }}>Luma Plushies</motion.span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-pink-400 dark:hover:text-pink-400">{t('home')}</Link>
            <Link to="/shop" className="text-gray-600 dark:text-gray-300 hover:text-pink-400 dark:hover:text-pink-400">{t('shop')}</Link>
            <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-pink-400 dark:hover:text-pink-400">{t('about')}</Link>
            <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-pink-400 dark:hover:text-pink-400">{t('contact')}</Link>
            
            <div className="flex items-center space-x-4">
              <LanguageToggle />
              <ThemeToggle />
              
              <Link to="/cart" className="relative">
                <motion.div whileHover={{ scale: 1.1 }} className="text-gray-600 dark:text-gray-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-pink-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {cart.length}
                    </span>
                  )}
                </motion.div>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div 
        initial={false}
        animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-pink-400">{t('home')}</Link>
          <Link to="/shop" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-pink-400">{t('shop')}</Link>
          <Link to="/about" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-pink-400">{t('about')}</Link>
          <Link to="/contact" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-pink-400">{t('contact')}</Link>
        </div>
      </motion.div>
    </nav>
  );
} 