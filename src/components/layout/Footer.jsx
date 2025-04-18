import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('aboutUs')}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {t('storyText')}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-600 dark:text-gray-300 hover:text-pink-400 dark:hover:text-pink-400 transition-colors">
                  {t('shop')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-pink-400 dark:hover:text-pink-400 transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-pink-400 dark:hover:text-pink-400 transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('contact')}</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>Email: hello@lumaplushies.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Plush Street, Toytown</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('newsletter')}</h3>
            <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-grow">
                  <input
                    type="email"
                    placeholder={t('emailPlaceholder')}
                    className="w-full px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border-0 focus:ring-2 focus:ring-pink-400"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-6 py-2 bg-pink-400 text-white rounded-full hover:bg-pink-500 transition-colors duration-300 whitespace-nowrap flex-shrink-0 text-center"
                >
                  {t('subscribe')}
                </motion.button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Luma Plushies. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
} 