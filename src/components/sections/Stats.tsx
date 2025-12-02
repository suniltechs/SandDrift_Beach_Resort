import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { stats } from '../../utils/constants';

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  suffix={stat.suffix}
                />
              </div>
              <h3 className="text-xl font-semibold text-dark">{stat.label}</h3>
              <p className="text-gray-600 mt-2">
                Delivering exceptional experiences every day
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;