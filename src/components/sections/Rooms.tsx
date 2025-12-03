import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ROOM_TYPES, rooms  } from '../../utils/constants';
import { RiSparkling2Line, RiArrowRightLine, RiFilter3Line } from 'react-icons/ri';
import Button from '../ui/Button';

const Rooms: React.FC = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [hoveredRoom, setHoveredRoom] = useState<string | null>(null);

  const filteredRooms = selectedType === 'all' 
    ? rooms 
    : rooms.filter(room => room.type === selectedType);

  const handleBookRoom = (roomId: string) => {
    console.log('Booking room:', roomId);
    // In real app, open booking modal or navigate
  };

  return (
    <section id='rooms' className="relative py-20">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
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
            PREMIUM ACCOMMODATION
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-dark mb-6 max-w-4xl mx-auto">
            Discover Your{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-primary bg-clip-text text-transparent">
                Perfect Stay
              </span>
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each room is thoughtfully designed to provide an unforgettable experience
          </p>
        </motion.div>


          {/* Room Type Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {ROOM_TYPES.map((type) => (
              <motion.button
                key={type.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedType(type.id)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedType === type.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-primary/30'
                }`}
              >
                {selectedType === type.id && <RiFilter3Line />}
                {type.label}
              </motion.button>
            ))}
          </motion.div>


        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredRoom(room.id)}
              onMouseLeave={() => setHoveredRoom(null)}
              className="relative"
            >
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredRoom === room.id ? 1.05 : 1
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-dark">
                      {room.type.charAt(0).toUpperCase() + room.type.slice(1)}
                    </span>
                  </div>
                  
                  {/* Rating */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full">
                    <RiSparkling2Line className="text-yellow-400 text-sm" />
                    <span className="text-white text-sm font-semibold">{room.rating}</span>
                    <span className="text-white/70 text-xs">({room.reviews})</span>
                  </div>
                  
                  {/* Price Tag */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute bottom-4 left-4"
                  >
                    <div className="bg-gradient-to-br from-primary to-amber-900 text-white px-4 py-2 rounded-xl shadow-lg">
                      <div className="text-sm">From</div>
                      <div className="text-xl font-bold">
                        ₹{room.price.toLocaleString()}
                        <span className="text-sm font-normal opacity-90">/night</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                    {room.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {room.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-gray-50 text-gray-600 text-sm rounded-lg"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      onClick={() => handleBookRoom(room.id)}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary/70 hover:bg-amber-500 hover:to-primary/10 text-primary-dark font-semibold rounded-xl border border-primary/20 transition-all duration-300 group/btn"
                    >
                      Book Now
                      <RiArrowRightLine className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-gradient-to-r from-white to-gray-50 rounded-3xl shadow-xl border border-gray-100">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-dark mb-2">
                Can't find your perfect room?
              </h3>
              <p className="text-gray-600">
                Contact our concierge for personalized recommendations
              </p>
            </div>
            <Button size="lg" className="group whitespace-nowrap">
              Contact
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Rooms;
