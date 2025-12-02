import React from 'react';
import { motion } from 'framer-motion';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  error?: string;
  containerClass?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  icon,
  error,
  containerClass = '',
  className = '',
  id,
}) => {
  const inputId =
    id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className={`space-y-2 ${containerClass}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-primary-dark"
        >
          {label}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary">
            {icon}
          </div>
        )}

        <motion.input
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          id={inputId}
          className={`w-full px-4 py-3 bg-white border-2 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-all duration-300 ${
            icon ? 'pl-10' : ''
          } ${error ? 'border-red-500' : 'border-gray-200'} ${className}`}
        />
      </div>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-500"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default InputField;
