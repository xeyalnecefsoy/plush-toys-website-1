import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function MissionSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              At Luma Plushies, we believe in creating magical moments while protecting our planet. 
              Each plushie is handcrafted using sustainable materials, bringing joy to children 
              and peace of mind to parents.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center text-pink-400 font-semibold hover:text-pink-500 dark:hover:text-pink-300 transition-colors"
            >
              Learn More
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[400px] group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-blue-100/50 dark:from-pink-900/20 dark:to-blue-900/20 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300" />
            <img 
              src="https://media.istockphoto.com/id/909772478/photo/brown-teddy-bear-isolated-in-front-of-a-white-background.jpg?s=612x612&w=0&k=20&c=F4252bOrMfRTB8kWm2oM2jlb9JXY08tKCaO5G_ms1Uw="
              alt="Handmade plush toys"
              className="relative rounded-2xl object-cover w-full h-full shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 