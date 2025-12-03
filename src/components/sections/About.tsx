import React from 'react';
import { motion } from 'framer-motion';
import { features } from '../../utils/constants';
import { RiAwardFill, RiSparkling2Line} from 'react-icons/ri';
import Button from '../ui/Button';

const About: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full text-primary-dark text-sm font-semibold mb-6 backdrop-blur-sm"
          >
            <RiSparkling2Line className="text-primary" />
            ABOUT US
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-dark mb-6 max-w-4xl mx-auto">
            Where{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-primary bg-clip-text text-transparent">
                Luxury Meets
              </span>
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of modern elegance and traditional hospitality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1581859814481-bfd944e3122f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="SunDrift Lobby"
                className="w-full h-[650px] object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <RiAwardFill className="text-3xl text-primary" />
                  <div>
                    <div className="font-bold text-dark">Best Hotel 2025</div>
                    <div className="text-sm text-gray-600">Travel Awards</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Small Images Grid */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w-800&q=80'
              ].map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src={src}
                    alt={`Hotel View ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-primary/20">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="text-2xl text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-dark mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                SunDrift Beach Resort is a luxurious 5-star hotel in JBR, Dubai, boasting stunning views of the Bluewaters Island and Ain Dubai. Enjoy world-class amenities, including the highest outdoor infinity pool gourmet dining at beachfront restaurants.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Experience unparalleled comfort in our meticulously designed rooms, each featuring premium amenities, complimentary high-speed Wi-Fi, and breathtaking views. Wake up to gourmet breakfasts prepared with local ingredients before exploring the rich cultural heritage surrounding our doors.
              </p>
            </div>

            {/* CTA & Stats */}
            <div className="pt-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="group px-8">
                    Discover Our Story
                    <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">
                      →
                    </span>
                  </Button>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { value: '15', suffix: '+', label: 'Years Excellence' },
                    { value: '98', suffix: '%', label: 'Guest Satisfaction' },
                    { value: '4.9', suffix: '/5', label: 'Rating' }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-dark mb-1">
                        {stat.value}
                        <span className="text-primary">{stat.suffix}</span>
                      </div>
                      <div className="text-sm text-gray-500 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-8 border-t border-gray-100"
            >
              <p className="text-sm text-gray-700 mb-4">Trusted by travelers worldwide</p>
              <div className="flex flex-wrap items-center gap-6 opacity-70">
                {['TripAdvisor', 'Booking.com', 'Agoda'].map((brand, index) => (
                  <div key={index} className="text-lg font-semibold text-gray-600">
                    {brand}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
