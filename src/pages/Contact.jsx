import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header 
        title={t('contactUs')} 
        subtitle={t('contactSubtitle')}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('name')}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border-0 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-400"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('email')}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border-0 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-400"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('message')}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border-0 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-400"
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-pink-400 text-white py-3 px-6 rounded-full hover:bg-pink-500 transition-colors duration-300 shadow-lg shadow-pink-400/30 hover:shadow-pink-500/40"
              >
                {t('send')}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{t('visitUs')}</h3>
              <p className="text-gray-600 dark:text-gray-300">123 Plush Street, Toytown</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{t('emailUs')}</h3>
              <p className="text-gray-600 dark:text-gray-300">hello@lumaplushies.com</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{t('callUs')}</h3>
              <p className="text-gray-600 dark:text-gray-300">(555) 123-4567</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 