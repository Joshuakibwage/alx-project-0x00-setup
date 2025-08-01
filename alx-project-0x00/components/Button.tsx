// components/Button.tsx
import React from 'react';
import { ButtonProps } from '../interfaces';

const sizeClasses = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

const Button: React.FC<ButtonProps> = ({
  title,
  size = 'medium',
  rounded = 'rounded-md',
  
  className = '',
}) => {
  const sizeClass = sizeClasses[size] || sizeClasses.medium;

  return (
    <button
      className={`bg-blue-600 text-white ${sizeClass} ${rounded} ${className} hover:bg-blue-700 transition`}
    >
      {title}
    </button>
  );
};

export default Button;