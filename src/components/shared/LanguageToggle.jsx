import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = {
    en: { flag: "🇬🇧", label: "EN" },
    az: { flag: "🇦🇿", label: "AZ" }
  };

  return (
    <motion.div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-2 px-3 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400"
      >
        <span>{languages[language].flag}</span>
        <span>{languages[language].label}</span>
        <svg 
          className={`w-4 h-4 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full mt-2 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50"
        >
          {Object.entries(languages).map(([code, { flag, label }]) => (
            <button
              key={code}
              onClick={() => {
                setLanguage(code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center space-x-2 px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors
                ${language === code ? 'bg-pink-50 dark:bg-pink-900/20 text-pink-500' : 'text-gray-800 dark:text-gray-200'}`}
            >
              <span>{flag}</span>
              <span>{label}</span>
            </button>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
} 