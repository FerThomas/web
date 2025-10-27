// components/SkillBar.jsx
"use client";
import React, { useState, useEffect } from 'react';

const SkillBar = ({ skillName, level, description }) => {
  const [currentWidth, setCurrentWidth] = useState(0);

  useEffect(() => {
    // Inicia la animación al cargar
    const timer = setTimeout(() => {
      setCurrentWidth(level);
    }, 50);

    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="mb-3 last:mb-0">
      <div className="flex justify-between items-center mb-1">
        {/* Nombre de la habilidad en color principal (orange-500) */}
        <h3 className="font-michroma text-orange-500 text-md">{skillName}</h3>
      </div>
      
      {/* Barra de progreso - Fondo Gris Oscuro */}
      <div className="w-full bg-gray-800 rounded-full h-2.5">
        <div 
          // 👈 Usamos orange-500 para la barra animada
          className={`bg-orange-500 opacity-80 h-2.5 rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${currentWidth}%` }} 
        ></div>
      </div>

      {/* Descripción: texto neutro y legible */}
      <p className="mt-3 font-light text-gray-400 text-sm leading-snug">
        {description}
      </p>
    </div>
  );
};

export default SkillBar;