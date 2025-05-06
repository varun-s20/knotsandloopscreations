
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Define product categories and products
const categories = ["All", "Home Decor", "Wearables", "Toys", "Accessories"];

const products = [
  {
    id: 1,
    name: "Cozy Throw Blanket",
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1615387000571-bdcfe92eb67c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "A soft, handmade throw blanket perfect for cuddling up on chilly evenings."
  },
  {
    id: 2,
    name: "Amigurumi Elephant",
    category: "Toys",
    image: "https://images.unsplash.com/photo-1566140967404-b8b3932483f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "A adorable crochet elephant toy, perfect for children of all ages."
  },
  {
    id: 3,
    name: "Modern Plant Hanger",
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1615387000517-d969c2b635d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Stylish macramé plant hanger to display your favorite greenery."
  },
  {
    id: 4,
    name: "Chunky Knit Scarf",
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1610288311735-39b7facbd095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Warm and stylish hand-knit scarf perfect for winter months."
  },
  {
    id: 5,
    name: "Crochet Market Bag",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1590047792088-0b5e669b3be8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Eco-friendly shopping bag that's both practical and stylish."
  },
  {
    id: 6,
    name: "Decorative Pillow Covers",
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Handcrafted pillow covers to add texture and warmth to your living space."
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="bg-crochet-sage/10 py-16">
      <div className="section-container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display mb-3">Our Collection</h2>
          <div className="w-24 h-1 bg-crochet-brown mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-crochet-darkBrown/80">
            Explore our handcrafted crochet items, each made with love and attention to detail.
          </p>
        </motion.div>
        
        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm ${
                activeCategory === category
                  ? 'bg-crochet-brown text-white'
                  : 'bg-crochet-beige/20 hover:bg-crochet-beige/40 text-crochet-darkBrown'
              } transition-colors`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Products Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProducts.map((product, index) => (
            <motion.div 
              key={product.id} 
              className="product-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              <div className="p-4">
                <div className="text-xs uppercase tracking-wide text-crochet-brown font-medium mb-1">
                  {product.category}
                </div>
                <h3 className="font-display text-xl mb-2">{product.name}</h3>
                <p className="text-sm text-crochet-darkBrown/80">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
