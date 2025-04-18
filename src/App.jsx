import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { CartProvider } from '@/context/CartContext';
import { LanguageProvider } from '@/context/LanguageContext';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Cart from '@/pages/Cart';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CartProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </Layout>
          </Router>
        </CartProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
