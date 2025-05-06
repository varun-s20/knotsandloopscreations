
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Products', 'Contact'];

  return (
    <motion.nav 
      className={`${
        scrolled 
          ? 'bg-crochet-cream/95 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      } fixed top-0 left-0 w-full z-50 transition-all duration-300`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.a 
            href="#" 
            className="font-display text-2xl font-medium text-crochet-darkBrown hover:text-crochet-brown transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="logo1s.png" alt="Logo" className="h-14 w-14 inline-block mr-2" />
            Knots & Loops Creations
          </motion.a>
          
          {/* Desktop menu */}
          <div className="hidden sm:flex items-center gap-1 md:gap-2">
            {navItems.map((item, index) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative px-3 py-2 mx-1 text-sm font-medium text-crochet-darkBrown/90 hover:text-crochet-brown hover-link transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <motion.button 
              onClick={toggleMobileMenu}
              className="p-2 text-crochet-darkBrown rounded-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="sm:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-crochet-beige/20"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-4 max-h-[80vh] overflow-auto">
              {navItems.map((item, index) => (
                <motion.a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-6 py-3 text-lg font-medium text-crochet-darkBrown hover:bg-crochet-beige/10 hover:text-crochet-brown transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
