
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="bg-crochet-cream py-20">
      <div className="section-container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display mb-3">Our Story</h2>
          <div className="w-24 h-1 bg-crochet-brown mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div 
            className="md:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full h-full bg-crochet-sage rounded-lg absolute top-4 left-4 z-0"></div>
              <img 
                src="about.jpg" 
                alt="Crochet artisan at work" 
                className="rounded-lg shadow-md relative z-10"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-display mb-4">Passion for Craft</h3>
            <p className="mb-4 text-crochet-darkBrown/80">
              Our journey began with a simple love for the art of crochet. What started as a creative outlet has blossomed into a passion project dedicated to sharing the beauty of handmade items with the world.
            </p>
            <p className="mb-4 text-crochet-darkBrown/80">
              Every piece is carefully crafted using premium, ethically sourced materials. We take pride in creating items that are not only beautiful but also sustainable and made to last.
            </p>
            <p className="text-crochet-darkBrown/80">
              Our designs blend traditional techniques with contemporary aesthetics, resulting in pieces that feel both timeless and modern. Each stitch is made with intention, creating items that bring warmth and character to your space.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-crochet-beige/20 p-6 rounded-lg"
            variants={itemVariants}
          >
            <h3 className="font-display text-xl mb-3">Quality Materials</h3>
            <p className="text-crochet-darkBrown/80">We use only the finest yarns and materials in our creations, ensuring durability and beauty.</p>
          </motion.div>
          
          <motion.div 
            className="bg-crochet-beige/20 p-6 rounded-lg"
            variants={itemVariants}
          >
            <h3 className="font-display text-xl mb-3">Handcrafted Care</h3>
            <p className="text-crochet-darkBrown/80">Each item is made by hand with attention to every detail, resulting in truly unique pieces.</p>
          </motion.div>
          
          <motion.div 
            className="bg-crochet-beige/20 p-6 rounded-lg"
            variants={itemVariants}
          >
            <h3 className="font-display text-xl mb-3">Sustainable Approach</h3>
            <p className="text-crochet-darkBrown/80">We're committed to eco-friendly practices, minimizing waste and focusing on sustainable creation.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
