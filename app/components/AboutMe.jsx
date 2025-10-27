import React from "react";
import SkillBar from "./SkillBar"; // Asegúrate de que este componente SkillBar exista y sea responsive
import { FaNodeJs, FaReact, FaAndroid } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiTailwindcss, SiInkscape, SiGimp, SiKotlin, SiSwift } from "react-icons/si";

const mySkills = [
  {
    name: "Diseño Web",
    level: 95,
    description:
      "Creación de interfaces de usuario atractivas y funcionales con foco en la experiencia del usuario y responsive design. Domino HTML, CSS (TailwindCSS) y diseño de interacción.",
  },
  {
    name: "Diseño Gráfico",
    level: 95,
    description:
      "Amplia experiencia en branding, creación de logotipos, material publicitario y diseño de elementos visuales coherentes para diversas plataformas, utilizando herramientas libres de edición de imagen.",
  },
  {
    name: "Edición de Imagen",
    level: 95,
    description:
      "Maestría en retoque fotográfico, composición digital, manipulación de imágenes y creación de gráficos de alta calidad para web y print con GIMP.",
  },
  {
    name: "Desarrollo Web",
    level: 95,
    description:
      "Construcción de aplicaciones web robustas y escalables. Fuerte conocimiento en JavaScript, React, Next.js, y Node.js para el desarrollo full-stack. Experiencia en integración de APIs y bases de datos.",
  },
  {
    name: "Desarrollo Móvil", // Un ejemplo adicional si lo dominas
    level: 75,
    description:
      "Desarrollo de aplicaciones nativas para Android (Kotlin) y iOS (Swift), así como híbridas con React Native. Centrado en la optimización del rendimiento y la experiencia nativa.",
  },
];

const AboutMe = () => {
  return (
    // 1. Sección Principal: Usamos min-h-screen y padding general (px-8)
    <section 
      id="aboutme"
      className="
        bg-gray-800 
        min-h-screen 
        py-20 px-8 lg:px-20 // Padding superior e inferior, y lateral
        flex items-center justify-center 
        overflow-hidden
      "
    >
      {/* Contenedor principal con grid responsive: 1 columna en móvil, 2 en desktop */}
      <div className="w-full max-w-7xl mx-auto grid text-gray-300 grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
        
        {/* COLUMNA 1: ¿Quién Soy? / Valor Agregado */}
        <div className="relative">
          <h2 className="text-4xl font-extrabold mb-8 tracking-tight text-white">
            ¿Quién Soy?
          </h2>
          <p className="text-xl italic mb-6 border-l-4 border-orange-500 pl-4 ">
            "Soy un <span className="font-bold">Arquitecto Digital</span> que convierte ideas en productos de
            alto rendimiento. Fusiono el Diseño Gráfico con la Ingeniería Web y
            Móvil para crear soluciones funcionales, veloces y visualmente
            impecables."
          </p>

          {/* STACK PRINCIPAL */}
          <h3 className="text-lg font-bold mt-8 mb-4 text-orange-500 uppercase tracking-widest">
            Mi Stack Principal
          </h3>
          {/* CAMBIO CLAVE: Usamos flex-wrap y gap-2 para que los iconos fluyan en móvil */}
          <div className="flex flex-wrap gap-2 mb-8"> 
            <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-lg font-michroma text-sm flex items-center">
              <FaNodeJs className="text-lg mr-1"/> NodeJs
            </span>
            <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-lg font-michroma text-sm flex items-center">
              <RiNextjsLine className="text-lg mr-1"/> NextJs
            </span>
            <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-lg font-michroma text-sm flex items-center">
              <FaReact className="text-lg mr-1"/> ReactJs
            </span>
            <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-lg font-michroma text-sm flex items-center">
              <SiTailwindcss className="text-lg mr-1"/> TailwindCSS
            </span>
            <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-lg font-michroma text-sm flex items-center">
              <SiInkscape className="text-lg mr-1"/> Inkscape
            </span>
            <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-lg font-michroma text-sm flex items-center">
              <SiGimp className="text-lg mr-1"/> GIMP
            </span>
            <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-lg font-michroma text-sm flex items-center">
              <SiKotlin className="text-lg mr-1"/> Kotlin
            </span>
            <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-lg font-michroma text-sm flex items-center">
              <SiSwift className="text-lg mr-1"/> Swift
            </span>
          </div>

          {/* VALOR AGREGADO */}
          <h3 className="text-lg font-bold mt-4 mb-2 uppercase tracking-wider text-white">
            Mi Valor Agregado
          </h3>
          <ul className="list-disc list-inside text-md space-y-3 pl-4">
            <li>
              <span className="font-bold text-orange-400">Prototipado Optimizado:</span> Como diseñador, mis prototipos están
              optimizados para la implementación, eliminando los cuellos de
              botella entre el diseño y el código.
            </li>
            <li>
              <span className="font-bold text-orange-400">Flujo Open Source:</span> Mi trabajo se basa en herramientas libres
              (<span className="font-bold">Inkscape, GIMP</span>), asegurando diseños de alta calidad sin
              dependencias costosas.
            </li>
            <li>
              <span className="font-bold text-orange-400">Desarrollo Full-Stack:</span> Manejo el ciclo completo: desde la fase
              conceptual hasta el despliegue final en la web o en tiendas de
              aplicaciones.
            </li>
          </ul>
        </div>

        {/* COLUMNA 2: Mis Habilidades (Skill Bars) */}
        <div className="relative">
          <div className="container mx-auto max-w-3xl md:pl-8">
            <h2 className="text-4xl font-extrabold mb-8 tracking-tight text-white">Mis Habilidades</h2>
            {/* Las barras de habilidad se apilan por defecto (grid-cols-1) */}
            <div className="grid grid-cols-1 gap-6"> 
              {mySkills.map((skill, index) => (
                <SkillBar
                  key={index} 
                  skillName={skill.name}
                  level={skill.level}
                  description={skill.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;