import React from 'react';
import { motion } from 'framer-motion';
import { 
  RiMailFill, 
  RiPhoneFill, 
  RiMapPinFill,
  RiLinkedinBoxFill 
} from 'react-icons/ri';
import Button from '../ui/Button';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <h3 className="text-2xl font-bold text-primary">SunDrift Beach Resort</h3>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Discover a world of comfort, luxury, and adventure as you explore
              our curated selection of hotels, making every moment of your getaway
              truly extraordinary.
            </p>
            <Button variant="secondary">Book Now</Button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold text-primary mb-6">QUICK LINKS</h4>
            <ul className="space-y-3">
              {['Browse Destinations', 'Special Offers & Packages', 'Room Types & Amenities', 'Customer Reviews & Ratings', 'Travel Tips & Guides'].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold text-primary mb-6">OUR SERVICES</h4>
            <ul className="space-y-3">
              {['Concierge Assistance', 'Flexible Booking Options', 'Airport Transfers', 'Wellness & Recreation'].map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 mr-0 group-hover:mr-2 transition-all duration-300" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Developer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-bold text-primary mb-6">CONTACT US</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3">
                <RiMailFill className="text-primary text-xl" />
                <a href="mailto:sanddrift@gmail.com" className="text-gray-300 hover:text-primary transition-colors">
                  sanddrift@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <RiPhoneFill className="text-primary text-xl" />
                <a href="tel:+918940880055" className="text-gray-300 hover:text-primary transition-colors">
                  +97148798888
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <RiMapPinFill className="text-primary text-xl" />
                <span className="text-gray-300">SandDrift Beach Resort, JBR, The Walk, Dubai </span>
              </li>
            </ul>

            <div className="pt-8 border-t border-gray-700">
              <h4 className="text-xl font-bold text-primary mb-6">DEVELOPED BY</h4>
              <a
                href="https://www.linkedin.com/in/sunil-sowrirajan-40548826b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors group"
              >
                <RiLinkedinBoxFill className="text-2xl group-hover:scale-110 transition-transform" />
                <span className="font-semibold group-hover:underline">Sunil Sowrirajan</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-700 text-center"
        >
          <p className="text-gray-400">
            Copyright © {currentYear} Golden Sand. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;