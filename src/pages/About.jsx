import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const features = [
    {
      title: t('ecoFriendly'),
      description: t('ecoFriendlyDesc'),
      icon: "🌱"
    },
    {
      title: t('handcrafted'),
      description: t('handcraftedDesc'),
      icon: "💝"
    },
    {
      title: t('safe'),
      description: t('safeDesc'),
      icon: "✨"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header 
        title={t('aboutUs')} 
        subtitle={t('aboutSubtitle')}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{t('ourStory')}</h2>
              <p className="text-gray-600 dark:text-gray-300">{t('storyText')}</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{t('ourValues')}</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">★</span>
                  <p className="text-gray-600 dark:text-gray-300">{t('value1')}</p>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">★</span>
                  <p className="text-gray-600 dark:text-gray-300">{t('value2')}</p>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">★</span>
                  <p className="text-gray-600 dark:text-gray-300">{t('value3')}</p>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative h-[600px] group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-blue-100/50 dark:from-pink-900/20 dark:to-blue-900/20 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300" />
            <img 
              src="https://morismos.com/cdn/shop/files/baby-stuffed-animals-with-their-moms-axolotl-stuffed-animals-squishy-axolotl-plush-pillows-axolotl-cartoon-plush-toys-stuffed-axolotl-toys-christmas-birthday-baby-shower-valentines-graduation-gift-for-boys-girls.jpg?v=1731636952"
              alt="About Luma Plushies"
              className="relative rounded-2xl object-cover w-full h-full shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300"
            />
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 