import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { roomTypes } from '../../utils/constants';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { updateFormData, submitBooking } from '../../features/booking/bookingSlice';
import { 
  RiCalendar2Fill, 
  RiUserFill, 
  RiHotelBedLine, 
  RiSearch2Line,
  RiSparkling2Line,
  RiArrowRightLine,
  RiShieldCheckLine
} from 'react-icons/ri';



const BookingForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { formData, isLoading } = useAppSelector((state) => state.booking);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectedRoom, setSelectedRoom] = useState<string>('standard');

  const handleInputChange = (field: keyof typeof formData, value: string | number) => {
    dispatch(updateFormData({ [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.checkIn) newErrors.checkIn = 'Please select check-in date';
    if (!formData.checkOut) newErrors.checkOut = 'Please select check-out date';
    if (formData.adults < 1) newErrors.adults = 'At least 1 adult is required';
    if (formData.children < 0) newErrors.children = 'Invalid number of children';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        await dispatch(submitBooking({
          ...formData,
          roomType: selectedRoom,
          roomPrice: roomTypes.find(r => r.id === selectedRoom)?.price || 0
        })).unwrap();
      } catch (error) {
      }
    }
  };

  return (
    <section id="booking" className="relative py-20">
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
            BOOK YOUR STAY
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-dark mb-6 max-w-4xl mx-auto">
            Find Your{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-primary bg-clip-text text-transparent">
                Perfect Stay
              </span>
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience luxury and comfort with our seamless booking process
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Main Booking Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Card Header */}
            <div className="p-8 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl">
                  <RiHotelBedLine className="text-2xl text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark">Reservation Details</h3>
                  <p className="text-gray-600">Select your dates and preferences</p>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="p-8">
              <div className="space-y-8">
                {/* Room Type Selection */}
                <div>
                  <label className="block text-sm font-semibold text-dark mb-4">
                    Select Room Type
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {roomTypes.map((room) => (
                      <motion.button
                        key={room.id}
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedRoom(room.id)}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                          selectedRoom === room.id
                            ? 'border-primary bg-gradient-to-r from-primary/10 to-primary/5'
                            : 'border-gray-200 hover:border-primary/30 hover:bg-gray-50'
                        }`}
                      >
                        <div className="text-left">
                          <div className="text-lg font-semibold text-dark mb-1">
                            {room.name}
                          </div>
                          <div className="text-primary font-bold">
                            ₹{room.price.toLocaleString()}
                            <span className="text-gray-500 text-sm font-normal"> /night</span>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Date and Guest Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Check-in */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-dark">
                      <RiCalendar2Fill className="inline mr-2 text-primary" />
                      CHECK-IN
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => handleInputChange('checkIn', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all ${
                        errors.checkIn ? 'border-red-300' : 'border-gray-200'
                      }`}
                    />
                    {errors.checkIn && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-red-500"
                      >
                        {errors.checkIn}
                      </motion.p>
                    )}
                  </div>

                  {/* Check-out */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-dark">
                      <RiCalendar2Fill className="inline mr-2 text-primary" />
                      CHECK-OUT
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="date"
                      value={formData.checkOut}
                      onChange={(e) => handleInputChange('checkOut', e.target.value)}
                      min={formData.checkIn || new Date().toISOString().split('T')[0]}
                      className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all ${
                        errors.checkOut ? 'border-red-300' : 'border-gray-200'
                      }`}
                    />
                    {errors.checkOut && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-red-500"
                      >
                        {errors.checkOut}
                      </motion.p>
                    )}
                  </div>

                  {/* Adults */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-dark">
                      <RiUserFill className="inline mr-2 text-primary" />
                      ADULTS
                    </label>
                    <div className="flex items-center gap-2">
                      <motion.button
                        type="button"
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleInputChange('adults', Math.max(1, formData.adults - 1))}
                        className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        -
                      </motion.button>
                      <input
                        type="number"
                        value={formData.adults}
                        onChange={(e) => handleInputChange('adults', parseInt(e.target.value) || 1)}
                        min="1"
                        max="10"
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-center outline-none"
                      />
                      <motion.button
                        type="button"
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleInputChange('adults', Math.min(10, formData.adults + 1))}
                        className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        +
                      </motion.button>
                    </div>
                    {errors.adults && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-red-500"
                      >
                        {errors.adults}
                      </motion.p>
                    )}
                  </div>

                  {/* Children */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-dark">
                      <RiUserFill className="inline mr-2 text-primary" />
                      CHILDREN
                    </label>
                    <div className="flex items-center gap-2">
                      <motion.button
                        type="button"
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleInputChange('children', Math.max(0, formData.children - 1))}
                        className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        -
                      </motion.button>
                      <input
                        type="number"
                        value={formData.children}
                        onChange={(e) => handleInputChange('children', parseInt(e.target.value) || 0)}
                        min="0"
                        max="10"
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-center outline-none"
                      />
                      <motion.button
                        type="button"
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleInputChange('children', Math.min(10, formData.children + 1))}
                        className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        +
                      </motion.button>
                    </div>
                    {errors.children && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-red-500"
                      >
                        {errors.children}
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-8 border-t border-gray-100">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4 text-gray-600">
                      <RiShieldCheckLine className="text-2xl text-primary" />
                      <div>
                        <div className="font-medium">Secure Booking</div>
                        <div className="text-sm">Best price guarantee</div>
                      </div>
                    </div>
                    
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={isLoading}
                      className="px-12 py-4 bg-primary text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 flex items-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Processing...
                        </div>
                      ) : (
                        <>
                          <RiSearch2Line className="text-xl" />
                          Search Availability
                          <RiArrowRightLine className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingForm;
