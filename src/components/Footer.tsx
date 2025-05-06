
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const fadeInUpDelayed = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2
      }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <footer className="bg-crochet-darkBrown text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp}>
            <h3 className="font-display text-2xl text-white mb-4">Knots & Loops Creations</h3>
            <p className="text-gray-300 mb-6 max-w-xs">
              Handcrafted crochet pieces made with love and sustainable materials. 
              Each creation tells a unique story.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Instagram size={20} />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUpDelayed}>
            <h3 className="font-display text-xl text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Products', 'Contact'].map((item, index) => (
                <motion.li 
                  key={item}
                  variants={fadeInUp}
                >
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors hover-link inline-block py-1"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          
        </motion.div>
        
        <motion.div 
          className="mt-12 pt-8 border-t border-white/10 text-center md:text-left md:flex md:justify-between md:items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-sm text-gray-400">
            © {currentYear} Knots & Loops Creations. All rights reserved.
          </p>
          
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
