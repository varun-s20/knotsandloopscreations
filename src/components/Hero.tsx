
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const scrollToProducts = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={ref} 
      id="home" 
      className="relative bg-gradient-to-b from-crochet-cream to-crochet-beige/10 min-h-screen flex items-center overflow-hidden"
    >
      <motion.div 
        style={{ opacity, scale, y }}
        className="section-container z-10 relative"
      >
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="mb-2 inline-block px-4 py-1 bg-crochet-beige/20 rounded-full text-sm uppercase tracking-widest"
            >
              Handmade with love
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Sustainable <br />
              <span className="text-crochet-brown">Crochet</span> Art <br /> 
              for you
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 max-w-lg text-crochet-darkBrown/80 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Each piece tells a story of craftsmanship and dedication, 
              bringing warmth and uniqueness to your space.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex gap-4"
            >
              <motion.a 
                href="#products" 
                className="btn-primary inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Collection
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 mt-12 lg:mt-0 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div 
                className="w-64 h-64 md:w-80 md:h-80 bg-crochet-sage/30 rounded-full absolute -top-8 -left-8 z-0"
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 120, 
                  ease: "linear", 
                  repeat: Infinity 
                }}
              />
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="relative z-10"
              >
                <img 
                  src="hero.jpg" 
                  alt="Handmade crochet items" 
                  className="rounded-2xl shadow-lg object-cover h-[400px] lg:h-[500px] w-full image-overlay"
                />
              </motion.div>
              <motion.div 
                className="w-40 h-40 bg-crochet-dustyBlue/20 rounded-full absolute -bottom-6 -right-6 z-0"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: -360
                }}
                transition={{ 
                  y: {
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  },
                  rotate: {
                    duration: 180, 
                    ease: "linear", 
                    repeat: Infinity
                  }
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-0 w-full flex justify-center z-20"
      >
        <motion.button
          onClick={scrollToProducts}
          className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white transition-all"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-crochet-darkBrown" />
        </motion.button>
      </motion.div>
      
      <div className="absolute -bottom-12 left-0 right-0 h-24 bg-crochet-cream transform skew-y-3"></div>
    </section>
  );
};

export default Hero;
