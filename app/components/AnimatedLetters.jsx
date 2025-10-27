// components/AnimatedWords.jsx
"use client";
import React, { useState, useEffect, useRef } from 'react';

const wordsToAnimate = ["Diseñador Gráfico", "Desarrollador Web"];

const AnimatedWords = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [lettersState, setLettersState] = useState([]); // Array de objetos { char: 'l', status: 'initial' }
  const timeoutRefs = useRef([]); // Para guardar y limpiar los timeouts
  const currentWordRef = useRef(''); // Para guardar la palabra actual y comparar


  // Función para limpiar todos los timeouts pendientes
  const cleanTimeouts = () => {
    timeoutRefs.current.forEach(clearTimeout);
    timeoutRefs.current = [];
  };

  useEffect(() => {
    // La palabra actual que estamos mostrando
    const currentDisplayWord = wordsToAnimate[currentWordIndex];

    // Función para animar letras a un estado específico
    const animateLetters = (targetStatus, delayMultiplier = 80, initialDelay = 0) => {
      currentDisplayWord.split('').forEach((char, i) => {
        const timeout = setTimeout(() => {
          setLettersState(prev => {
            const newLetters = [...prev];
            // Asegurarse de que la letra existe en el estado antes de intentar actualizarla
            if (newLetters[i] && newLetters[i].char === char) { // Verificamos también el caracter para evitar glitches si el estado se actualiza rápido
              newLetters[i].status = targetStatus;
            } else {
                // Si la letra no existe o no coincide, la creamos con el estado inicial
                newLetters[i] = { char, status: targetStatus };
            }
            return [...newLetters]; // Retornar una nueva referencia del array para forzar re-render
          });
        }, initialDelay + (i * delayMultiplier));
        timeoutRefs.current.push(timeout);
      });
    };

    // 1. Limpiar cualquier timeout anterior antes de iniciar un nuevo ciclo
    cleanTimeouts();

    // 2. Animar la entrada de la palabra actual
    setLettersState(currentDisplayWord.split('').map(char => ({ char, status: 'behind' }))); // Reset a 'behind'
    const initialInDelay = 340; // O tu delay original para 'in'
    animateLetters('in', 80, initialInDelay);

    // 3. Configurar el timer para la salida de la palabra actual y la entrada de la siguiente
    const wordDisplayDuration = 5000; // Tiempo que cada palabra está en pantalla
    const totalOutAnimationDuration = (currentDisplayWord.length * 80) + 400; // Tiempo para que todas las letras salgan + un buffer

    const nextWordTimeout = setTimeout(() => {
      // 3a. Animar la salida de la palabra actual
      animateLetters('out', 80);

      // 3b. Después de que salgan, pasar a la siguiente palabra
      const changeWordDelay = currentDisplayWord.length * 80; // Tiempo para que las letras salgan
      const actualNextWordTimeout = setTimeout(() => {
        setCurrentWordIndex(prevIndex => (prevIndex + 1) % wordsToAnimate.length);
      }, changeWordDelay + 100); // Pequeño buffer antes de cambiar de índice

      timeoutRefs.current.push(actualNextWordTimeout);

    }, wordDisplayDuration);

    timeoutRefs.current.push(nextWordTimeout);

    // Limpieza de timeouts e intervalos cuando el componente se desmonta
    return () => {
      cleanTimeouts();
    };
  }, [currentWordIndex]); // Dependencia clave: se ejecuta cuando currentWordIndex cambia


  return (
    <span className="inline-block relative">
      {lettersState.map((letter, index) => (
        <span
          key={`${currentWordIndex}-${index}`} // Clave única que incluye el índice de la palabra
          className={`letter ${letter.status}`} // Ajusta el color con Tailwind
        >
          {letter.char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedWords;