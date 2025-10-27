"use client";
import React from "react";
import { SiNextdotjs, SiTailwindcss, SiDiscord } from "react-icons/si";

// 1. Tres Cards de Servicios de Alto Nivel
const mainServices = [
  {
    icon: <SiNextdotjs className="text-3xl text-orange-500 mb-2" />,
    title: "Sitios Web de Alto Rendimiento",
    description: "Desarrollo de sitios y portafolios ultrarrápidos usando Next.js, optimizados para SEO y despliegue en Vercel. <br/> <em>El primer paso hacia el futuro digital de tu marca...</em>"
  },
  {
    icon: <SiTailwindcss className="text-3xl text-orange-500 mb-2" />,
    title: "Interfaz de Usuario Profesional",
    description: "Diseño e implementación de componentes UI/UX responsive y modernos con la flexibilidad de Tailwind CSS. <br/> <em>Diseñado para impresionar. Codificado para funcionar...</em>"
  },
  {
    icon: <SiDiscord className="text-3xl text-orange-500 mb-2" />,
    title: "Bots y Automatización (Discord.js)",
    description: "Servicios especializados para crear bots personalizados que automaticen tareas y gestionen comunidades en Discord. <br/> <em>Automatiza la comunidad. Enfócate en crecer...</em>"
  },
];

const WebDevelopment = () => {
  // Manejador del formulario (Asume que usarás la misma API Route /api/contact)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("¡Consulta enviada con éxito! Pronto recibirás una respuesta.");
      e.target.reset(); // Limpiar el formulario
    } else {
      alert(
        "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo."
      );
    }
  };

  return (
    <section
      className="
        min-h-screen md:h-screen 
        flex flex-col justify-center 
        py-12 px-4 md:px-20 
        w-full
      "
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* TÍTULO PRINCIPAL */}
        <h2 className="text-4xl font-extrabold mb-2 text-center tracking-tight">
          Desarrollo Web de Próxima Generación
        </h2>
        <p className="text-xl text-gray-500 mb-10 text-center max-w-4xl mx-auto">
          Construcción de productos digitales de alto rendimiento con el stack
          <span className="font-bold"> Next.js</span> y <span className="font-bold">Tailwind</span>
        </p>

        {/* 1. GRID DE CARDS PRINCIPALES (3 Columnas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className="              
               p-6 rounded-xl shadow-xl 
                border border-gray-500
                hover:border-orange-500 transition duration-300 transform hover:-translate-y-1
                // SIN FONDO ESPECÍFICO (Asumo que el fondo es blanco/claro por defecto, si no, ajusta aquí)
                // SIN COLOR DE TEXTO ESPECÍFICO (Asumo que es gris oscuro por defecto)
              "
            >
              <div className="flex items-center mb-3">
                {service.icon}
                <h3 className="text-xl font-bold ml-3">{service.title}</h3>
              </div>
              <p
                className="text-gray-500 text-sm" // ⬅️ VUELTO a text-gray-500
                dangerouslySetInnerHTML={{ __html: service.description }}
              />
            </div>
          ))}
        </div>

        {/* 2. NUEVO TEXTO: VALOR AGREGADO / ENFOQUE PRINCIPAL */}
        <div className="text-center max-w-6xl mx-auto mb-4 text-gray-500"> {/* ⬅️ VUELTO a text-gray-500 */}
          <h3 className="text-xl font-bold mb-2">
            Desempeño, Escalabilidad y <span className="font-bold text-orange-500">Optimización por IA</span> 🚀
          </h3>
          <p className="text-md text-gray-500"> {/* ⬅️ VUELTO a text-gray-500 */}
            Mi foco principal es la arquitectura moderna de aplicaciones web.
            Utilizo <span className="font-bold">Next.js</span> para el núcleo y herramientas de <span className="font-bold">Inteligencia
            Artificial</span> para afinar cada detalle: desde la optimización
            predictiva de la carga de recursos, hasta la <span className="font-bold">mejora automática del
            SEO</span> y la <span className="font-bold">eficiencia del código</span> Esto garantiza que tu producto
            sea ultrarrápido, escalable y esté listo para el futuro digital.
          </p>
        </div>

        {/* 3. FORMULARIO DE CONTACTO SIMPLE - MANTIENE CORRECCIÓN RESPONSIVE */}
        {/* Vuelto a bg-gray-800 y border-gray-700 en el contenedor, manteniendo tu estilo oscuro original */}
        <div 
          className="
            w-full max-w-4xl mx-auto 
            flex flex-col md:flex-row 
            items-center md:items-start 
            bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700
          "
        >
          <h3 className="
            text-2xl font-bold text-white text-center w-full mb-6 
            md:w-1/3 md:text-left md:mr-8 md:mb-0
          ">
            ¡Cotiza tu Proyecto Web Ahora!
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4 w-full md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {/* Nombre */}
              <input
                type="text"
                placeholder="Tu Nombre"
                name="name" 
                // Vuelto a tus colores originales: bg-gray-700 text-white
                className="w-full p-3 rounded-lg bg-gray-700 text-white border-gray-600 focus:ring-orange-500 focus:border-orange-500"
                required
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Tu Email (ej: hola@ejemplo.com)"
                name="email" 
                // Vuelto a tus colores originales: bg-gray-700 text-white
                className="w-full p-3 rounded-lg bg-gray-700 text-white border-gray-600 focus:ring-orange-500 focus:border-orange-500"
                required
              />
            </div>

            {/* Mensaje */}
            <textarea
              placeholder="Describe tu proyecto (Web institucional, E-commerce, Aplicación personalizada, Bot de Discord...)"
              name="message" 
              rows="4"
              // Vuelto a tus colores originales: bg-gray-700 text-white
              className="w-full p-3 rounded-lg bg-gray-700 text-white border-gray-600 focus:ring-orange-500 focus:border-orange-500"
              required
            ></textarea>

            {/* Botón de Enviar */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-gray-900 font-bold py-3 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Enviar Propuesta
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopment;