
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="bg-crochet-cream">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display mb-3">Get In Touch</h2>
            <div className="w-24 h-1 bg-crochet-brown mx-auto mb-6"></div>
            <p className="text-crochet-darkBrown/80">
              Interested in a custom piece or have questions about our creations? We'd love to hear from you!
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-crochet-beige/20 p-8 rounded-lg">
                <h3 className="font-display text-2xl mb-6">Contact Info</h3>
                
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-center gap-3"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <div className="bg-crochet-brown/10 p-2 rounded-full">
                      <Mail size={20} className="text-crochet-brown" />
                    </div>
                    <span>knotsandloopscreations6@gmail.com</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-3"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <div className="bg-crochet-brown/10 p-2 rounded-full">
                      <Phone size={20} className="text-crochet-brown" />
                    </div>
                    <span>(+91) 9235296656, 9984637990</span>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="mt-8"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <h4 className="font-display text-lg mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    <motion.a 
                      href="#" 
                      className="bg-crochet-brown/10 p-3 rounded-full hover:bg-crochet-brown/20 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Instagram size={20} className="text-crochet-brown" />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form>
                <motion.div 
                  className="mb-4"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-crochet-sage rounded-md focus:outline-none focus:ring-2 focus:ring-crochet-brown"
                  />
                </motion.div>
                
                <motion.div 
                  className="mb-4"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-crochet-sage rounded-md focus:outline-none focus:ring-2 focus:ring-crochet-brown"
                  />
                </motion.div>
                
                <motion.div 
                  className="mb-4"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-crochet-sage rounded-md focus:outline-none focus:ring-2 focus:ring-crochet-brown"
                  ></textarea>
                </motion.div>
                
                <motion.button
                  type="button"
                  className="btn-primary w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
