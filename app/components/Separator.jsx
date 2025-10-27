// components/Separator.jsx
import React from 'react';

const Separator = () => {
  return (
    <div className="flex items-center justify-center w-screen">
      <div className="w-full max-w-7xl flex items-center justify-center">
        
        {/* Línea Izquierda */}
        <div className="flex-grow border-t border-gray-700 mx-4"></div>   
        {/* Línea Derecha */}
        <div className="flex-grow border-t border-gray-700 mx-4"></div>
      </div>
    </div>
  );
};

export default Separator;