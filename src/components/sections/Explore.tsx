import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EXPLORE_CARDS } from '../../utils/constants';
import { RiCalendarEventLine, RiSparkling2Line, RiArrowRightLine, RiFireLine, RiPlayCircleLine } from 'react-icons/ri';
import { PiChefHatBold } from 'react-icons/pi';
import { RiSendPlane2Line } from 'react-icons/ri';

const Explore: React.FC = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="explore" className="relative py-24 overflow-hidde">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full text-primary-dark text-sm font-semibold mb-6 backdrop-blur-sm"
          >
            <RiSparkling2Line className="text-primary" />
            LATEST UPDATES
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-dark mb-6 max-w-4xl mx-auto">
            Discover{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-primary bg-clip-text text-transparent">
                What's New
              </span>
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest offerings, events, and exclusive experiences
          </p>
        </motion.div>

        {/* Main Featured Card */}
        <div className="relative mb-16">
          <motion.div
            key={EXPLORE_CARDS[activeCard].id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl shadow-2xl"
          >
            {/* Background Image with Parallax Effect */}
            <div className="absolute inset-0">
              <motion.img
                animate={{ scale: isPlaying ? 1.05 : 1 }}
                transition={{ duration: 10 }}
                src={EXPLORE_CARDS[activeCard].image}
                alt={EXPLORE_CARDS[activeCard].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
              
              {/* Animated Gradient Overlay */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-secondary/30 animate-gradient" />
              </div>
            </div>

            {/* Content */}
            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-2xl">
                {/* Badge and Date */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                    <RiCalendarEventLine className="text-white" />
                    <span className="text-white text-sm font-medium">
                      {EXPLORE_CARDS[activeCard].date}
                    </span>
                  </div>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${EXPLORE_CARDS[activeCard].color} backdrop-blur-sm rounded-full border border-white/20`}>
                    <span className="text-white text-sm font-medium">
                      {EXPLORE_CARDS[activeCard].category}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {EXPLORE_CARDS[activeCard].title}
                </h3>
                
                {/* Description */}
                <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
                  {EXPLORE_CARDS[activeCard].description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {EXPLORE_CARDS[activeCard].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex-shrink-0">
                        <RiFireLine className="text-primary text-lg" />
                      </div>
                      <span className="text-white font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="px-8 py-3 bg-primary text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <RiPlayCircleLine className="text-xl" />
                    {isPlaying ? 'Pause Preview' : 'Watch Preview'}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <RiArrowRightLine className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cards Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXPLORE_CARDS.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveCard(index)}
              className={`cursor-pointer group ${
                activeCard === index ? 'ring-2 ring-primary rounded-2xl ring-offset-2' : ''
              }`}
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${card.color} backdrop-blur-sm rounded-full`}>
                      <card.icon className={card.iconColor} />
                      <span className="text-white text-xs font-medium">{card.category}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500">{card.date}</span>
                    {activeCard === index && (
                      <motion.div
                        layoutId="activeExplore"
                        className="w-2 h-2 bg-primary rounded-full"
                      />
                    )}
                  </div>
                  
                  <h4 className="text-lg font-bold text-dark mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {card.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {card.description}
                  </p>
                  
                  <div className="flex items-center text-primary font-medium text-sm">
                    View Details
                    <RiArrowRightLine className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-20"
    >
      <div className="relative overflow-hidden rounded-3xl">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1720760948254-e1bb5b862336?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGJlYWNoJTIwcmVzb3J0fGVufDB8fDB8fHww"
            alt="Premium Dining Experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/20 to-primary-dark/90" />
        </div>
        
        {/* Content */}
        <div className="relative p-8 md:p-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <PiChefHatBold className="text-3xl text-white" />
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Our Latest
          </h3>
          
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new menus, events, and exclusive offers
          </p>
          
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 rounded-xl focus:border-primary-400 focus:ring-2 focus:ring-primary/50 outline-none transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-8 py-3 bg-white text-primary-dark font-semibold rounded-xl hover:bg-gray-100 hover:shadow-lg hover:shadow-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Subscribe
                <RiSendPlane2Line className="text-lg" />
              </motion.button>
            </div>
            <p className="text-white text-sm mt-4">
              By subscribing, you agree to our Privacy Policy
            </p>
          </form>
        </div>
      </div>
    </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 90, 180, 270, 360] }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        className="absolute top-1/3 left-8 w-12 h-12 border-2 border-primary/10 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [360, 270, 180, 90, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear", delay: 0.5 }}
        className="absolute bottom-1/3 right-8 w-16 h-16 border-2 border-secondary/10 rounded-full hidden lg:block"
      />
    </section>
  );
};

export default Explore;
