import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '../../utils/constants';

const BACKGROUND_IMAGES = [
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=2070&q=80'
];

const Header: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is outside both mobile menu AND mobile button
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        mobileButtonRef.current &&
        !mobileButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  // Background slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  // Handle mobile menu toggle
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header id="home" className="relative min-h-screen overflow-hidden">
      {/* Navbar - Integrated with header */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <img
                src="/assets/sundrift.png"
                alt="SunDrift Beach Resort"
                className={`h-10 md:h-12 w-auto transition-all duration-300 ${
                  scrolled ? 'filter brightness-0' : ''
                }`}
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`font-medium transition-colors relative group text-base ${
                    scrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-primary'
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Desktop Book Now Button */}
            <div className="hidden lg:block">
              <motion.button
                onClick={() => {
                const section = document.getElementById("booking");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  scrolled
                    ? 'bg-primary text-primary-dark hover:bg-primary-dark hover:text-white'
                    : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-dark border border-white/30 hover:border-white'
                }`}
              >
                Book Now
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
              <button
              ref={mobileButtonRef}
              onClick={handleMobileMenuToggle}
              className={`lg:hidden text-2xl p-2 rounded-lg transition-colors ${
                scrolled ? 'text-dark' : 'text-white'
              } ${isMobileMenuOpen ? 'bg-white/10' : ''}`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="relative w-6 h-5">
                <span className={`absolute left-0 w-6 h-0.5 transform transition-all duration-300 ${
                  isMobileMenuOpen 
                    ? 'rotate-45 top-2' 
                    : 'top-0'
                } ${isMobileMenuOpen && scrolled ? 'bg-dark' : 'bg-current'}`} />
                <span className={`absolute left-0 top-2 w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                } bg-current`} />
                <span className={`absolute left-0 w-6 h-0.5 transform transition-all duration-300 ${
                  isMobileMenuOpen 
                    ? '-rotate-45 top-2' 
                    : 'top-4'
                } ${isMobileMenuOpen && scrolled ? 'bg-dark' : 'bg-current'}`} />
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                ref={mobileMenuRef}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden w-full left-0 !mx-0"
              >

                <div className={`py-4 rounded-lg mt-2 ${
                  scrolled ? 'bg-white shadow-lg' : 'bg-white/10 backdrop-blur-md'
                }`}>
                  <div className="flex flex-col space-y-3 px-4">
                    {navItems.map((item) => (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`py-2 font-medium transition-colors text-base ${
                          scrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-primary'
                        }`}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.label}
                      </motion.a>
                    ))}
                    <motion.button 
                      onClick={() => {
                      setIsMobileMenuOpen(false);
                      const section = document.getElementById("booking");
                      section?.scrollIntoView({ behavior: "smooth" });
                    }}
                      className="mt-2 px-4 py-2 bg-primary text-primary-dark rounded-lg font-medium hover:bg-primary-dark hover:text-white transition-colors text-base"
                      whileTap={{ scale: 0.98 }}
                    >
                      Book Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
            </div>
      </motion.nav>

      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {/* Previous Image (fades out) */}
        <motion.img
          key={`prev-${prevIndex}`}
          src={BACKGROUND_IMAGES[prevIndex]}
          alt="Hotel background"
          className="w-full h-full object-cover absolute inset-0"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        />

        {/* Current Image (fades in) */}
        <motion.img
          key={`current-${index}`}
          src={BACKGROUND_IMAGES[index]}
          alt="Hotel background"
          className="w-full h-full object-cover absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        
        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(242, 181, 107, 0.2) 0%, transparent 50%),
                            radial-gradient(circle at 75% 75%, rgba(89, 18, 2, 0.2) 0%, transparent 50%)`,
            backgroundSize: '50% 50%',
            animation: 'float 20s ease-in-out infinite'
          }} />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 md:mb-6"
          >
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs md:text-sm font-medium">
              Simple - Unique - Friendly
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 md:mb-8 leading-snug md:leading-tight"
          >
            Make Yourself At Home
            <br />
            In Our{' '}
            <span className="text-primary relative inline-block">
              Hotel
              <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-primary" />
            </span>
            .
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4"
          >
            <motion.button
            onClick={() => {
            const section = document.getElementById("rooms");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 md:px-8 md:py-3 bg-primary text-primary-dark font-semibold rounded-lg hover:bg-primary-dark hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/30 text-sm md:text-base"
            >
              Explore Rooms
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 md:px-8 md:py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-dark transition-all duration-300 hover:shadow-xl hover:shadow-white/20 text-sm md:text-base"
            >
              Watch Video Tour
            </motion.button>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 md:mt-12 flex flex-wrap gap-6 md:gap-8"
          >
            {[
              { value: '4.9', label: 'Guest Rating' },
              { value: '24/7', label: 'Room Service' },
              { value: '50+', label: 'Luxury Rooms' }
            ].map((stat, idx) => (
              <div key={idx} className="text-white">
                <div className="text-xl md:text-2xl font-bold">{stat.value}</div>
                <div className="text-xs md:text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/50 rounded-full flex justify-center group hover:border-white transition-all duration-300">
          <motion.div 
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 md:h-3 bg-white/50 rounded-full mt-1.5 md:mt-2 group-hover:bg-white"
          />
        </div>
      </motion.div>

      {/* Background Image Indicator */}
      <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 hidden md:flex items-center space-x-2">
        {BACKGROUND_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setPrevIndex(index);
              setIndex(i);
            }}
            className="relative group"
            aria-label={`Go to background image ${i + 1}`}
          >
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === index ? 'bg-primary' : 'bg-white/50 group-hover:bg-white/80'
            }`} />
            {i === index && (
              <motion.div
                layoutId="activeBgIndicator"
                className="absolute inset-0 rounded-full border-2 border-primary"
                initial={{ scale: 0 }}
                animate={{ scale: 1.5 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;