import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import BackgroundDecoration from '@/components/shared/BackgroundDecoration';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 min-h-[90vh] flex items-center overflow-hidden">
      <BackgroundDecoration />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
              {t('heroTitle')}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {t('heroSubtitle')}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/shop" 
                className="inline-block bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
              >
                {t('shopNow')}
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-blue-100 dark:from-pink-900/20 dark:to-blue-900/20 rounded-2xl transform -rotate-6"></div>
            <img 
              src="https://t3.ftcdn.net/jpg/00/74/44/28/360_F_74442850_C0PsTWPFlOfwcPA3AybYefXDBmnWVsWX.jpg" 
              alt="Cute plush toys"
              className="relative rounded-2xl object-cover w-full h-full shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
} 