export default function Hero() {
  return (
    <div className="relative bg-blue-50 min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Handcrafted with Love, <span className="text-pink-400">Made for Cuddles</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover our collection of eco-friendly, handmade plush toys that bring joy to children while caring for our planet.
            </p>
            <button className="bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
              Shop Now
            </button>
          </div>
          <div className="relative h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1535572290543-960a8046f5af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Cute plush toys"
              className="rounded-2xl object-cover w-full h-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 