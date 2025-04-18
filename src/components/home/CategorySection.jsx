import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const categoryImages = {
  "Forest Friends": [
    "https://images.unsplash.com/photo-1563901935883-cb61f5d49be4", // Alpaca
    "https://images.unsplash.com/photo-1615486363973-f79d875780cf", // Fox
  ],
  "Ocean Buddies": [
    "https://images.unsplash.com/photo-1607344645866-009c320b63e0", // Penguin
    "https://images.unsplash.com/photo-1566140967404-b8b3932483f5", // Dolphin
  ],
  "Safari Pals": [
    "https://images.unsplash.com/photo-1596073419667-9d77d59f033f", // Giraffe
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f", // Elephant
  ],
};

export default function CategorySection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Shop by Category
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-colors duration-300 z-10" />
              <div className="relative h-80">
                <div className="absolute inset-0 grid grid-cols-2 gap-1">
                  {categoryImages[category.name].map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${category.name} ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.description}
                </p>
                <Link 
                  to={`/shop?category=${category.name}`}
                  className="inline-flex items-center text-white hover:text-pink-400 transition-colors"
                >
                  Shop Now
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 