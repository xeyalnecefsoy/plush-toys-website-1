import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-pink-400">Luma Plushies</h1>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#" className="text-gray-600 hover:text-pink-400">Home</a>
            <a href="#" className="text-gray-600 hover:text-pink-400">Shop</a>
            <a href="#" className="text-gray-600 hover:text-pink-400">About</a>
            <a href="#" className="text-gray-600 hover:text-pink-400">Contact</a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="block px-3 py-2 text-gray-600 hover:text-pink-400">Home</a>
          <a href="#" className="block px-3 py-2 text-gray-600 hover:text-pink-400">Shop</a>
          <a href="#" className="block px-3 py-2 text-gray-600 hover:text-pink-400">About</a>
          <a href="#" className="block px-3 py-2 text-gray-600 hover:text-pink-400">Contact</a>
        </div>
      </div>
    </nav>
  );
} 