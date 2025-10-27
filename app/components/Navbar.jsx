"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { NAV_LINKS } from "../constants/index"; 
import { HiMenu, HiX } from 'react-icons/hi'; 

// NO se necesita SCROLL_OFFSET, ya que las secciones son perfectas.

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Estado para guardar el índice del enlace activo (0, 1, 2, etc.)
  const [activeIndex, setActiveIndex] = useState(0); 

  // 🧭 FUNCIÓN OPTIMIZADA PARA SECCIONES DE ALTURA COMPLETA
  const handleScroll = () => {
    if (typeof window === 'undefined' || NAV_LINKS.length === 0) return;

    const currentScrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // 1. Calcula el índice de la "página" actual
    // La división da, por ejemplo: 0.1, 0.9, 1.2, 1.8, 2.5, etc.
    // Math.round() redondea al entero más cercano (0, 1, 2, 3...)
    // Esto funciona mejor para centrar la activación en la mitad de la sección.
    const newIndex = Math.round(currentScrollPosition / windowHeight);
    
    // Asegura que el índice esté dentro de los límites del array NAV_LINKS
    const finalIndex = Math.min(newIndex, NAV_LINKS.length - 1);

    // 2. Actualiza el estado con el `href` del índice activo
    setActiveIndex(finalIndex);
  };
  
  // ⚙️ EFECTO PARA AÑADIR Y LIMPIAR EL LISTENER DE SCROLL
  useEffect(() => {
    // Inicializar el estado activo al cargar la página y redimensionar
    handleScroll(); 

    // Añadir listener para 'scroll' y también para 'resize' (si el usuario cambia el tamaño de la ventana)
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Importante para recalcular windowHeight

    // Limpieza
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []); 

  // Clase CSS base para la navegación lateral
  const baseClasses = "fixed left-0 top-0 h-screen w-40 flex flex-col items-center justify-center bg-gray-900 text-white z-50 transition-transform duration-300";

  return (
    <>
      {/* Botón de Menú Móvil... (código sin cambios) */}
      <div className="md:hidden fixed top-4 right-4 z-[60]">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-white bg-gray-800 rounded-lg focus:outline-none"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* El Navbar Lateral */}
      <nav 
        className={`${baseClasses} 
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}           
        `}
      >
        <ul className="flex flex-col space-y-8 h-full justify-center py-10 px-2">
          {NAV_LINKS.map((link, index) => {
            // ✅ Lógica de ACTIVACIÓN simplificada
            // Compara el índice del enlace con el índice activo calculado
            const isActive = index === activeIndex;
            
            return (
              <li key={link.key}>
                <Link
                  href={link.href}
                  // 🎨 APLICACIÓN DE CLASES CONDICIONALES CON TAILWIND
                  className={`block w-full px-4 transition-all duration-300 font-michroma uppercase tracking-wider ${
                    isActive 
                      ? 'text-orange-500 bg-gray-800/50' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                  // Al hacer clic, forzamos la actualización del estado para que 
                  // la pestaña se active inmediatamente antes de que se complete el scroll.
                  onClick={() => {
                    setActiveIndex(index);
                    setIsOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Overlay... (código sin cambios) */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;