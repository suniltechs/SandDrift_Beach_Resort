import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  RiShieldStarLine, 
  Ri24HoursLine, 
  RiWifiFill, 
  RiRoadsterFill,
  RiSparkling2Line,
  RiArrowRightLine
} from 'react-icons/ri';

const servicesData = [
  {
    id: '1',
    title: 'High Class Security',
    icon: RiShieldStarLine,
    description: 'Advanced surveillance systems and 24/7 security personnel ensuring your complete safety.',
    features: ['CCTV Monitoring', 'Security Personnel', 'Safe Deposit Boxes', 'Emergency Response'],
    color: 'from-amber-500/20 to-amber-600/20',
    iconColor: 'text-amber-500'
  },
  {
    id: '2',
    title: '24/7 Room Service',
    icon: Ri24HoursLine,
    description: 'Round-the-clock dining and concierge service for ultimate convenience whenever you need it.',
    features: ['All-day Dining', 'In-room Dining', 'Concierge Service', 'Quick Response'],
    color: 'from-amber-500/20 to-amber-600/20',
    iconColor: 'text-amber-500'
  },
  {
    id: '3',
    title: 'High-Speed WiFi',
    icon: RiWifiFill,
    description: 'Ultra-fast fiber optic internet connectivity available throughout the entire property.',
    features: ['Fiber Optic', 'Multiple Devices', 'Business Center', 'Tech Support'],
    color: 'from-amber-500/20 to-amber-600/20',
    iconColor: 'text-amber-500'
  },
  {
    id: '4',
    title: 'Valet Parking',
    icon: RiRoadsterFill,
    description: 'Secure valet and self-parking facilities with EV charging stations for modern convenience.',
    features: ['Valet Service', 'EV Charging', 'Car Wash', '24/7 Access'],
    color: 'from-amber-500/20 to-amber-600/20',
    iconColor: 'text-amber-500'
  }
];

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section id="service" className="relative py-20 bg-yellow-50">
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
            PREMIUM SERVICES
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-dark mb-6 max-w-4xl mx-auto">
            Experience{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-primary bg-clip-text text-transparent">
                Our Services
              </span>
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium amenities designed to make your stay comfortable, convenient, and memorable
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className="group"
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 h-full border border-gray-100">
                {/* Icon with Background */}
                <div className="relative mb-8 flex justify-center items-center">
                  <div
                    className={`relative p-5 rounded-2xl bg-gradient-to-br ${service.color} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 inline-block`}
                  >
                    <service.icon className={`text-4xl ${service.iconColor}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-primary transition-colors ">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-sm text-gray-500">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Learn More Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary/70 hover:bg-amber-500 hover:to-primary/10 text-primary-dark font-semibold rounded-xl border border-primary/20 transition-all duration-300 group/btn hover:shadow-md">
                    Learn More
                    <RiArrowRightLine className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=80"
              alt="Premium Services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/40 to-primary-dark/90" />
          </div>
          
          <div className="relative p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Customized Services?
            </h3>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Our concierge team is ready to create personalized experiences tailored to your needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-primary-dark font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Concierge
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                View Service Menu
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Service Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '99%', label: 'Guest Satisfaction' },
              { value: '24/7', label: 'Service Availability' },
              { value: '<15min', label: 'Average Response Time' },
              { value: '50+', label: 'Service Categories' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;