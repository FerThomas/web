"use client";
import React from "react";
import Image from "next/image";
import { FaPalette } from "react-icons/fa";
import { SiInkscape, SiGimp } from "react-icons/si";
import { Space_Mono } from "next/font/google";

// 1. Tres Cards de Servicios de Alto Nivel
const mainServices = [
  {
    icon: <FaPalette className="text-3xl text-orange-500 mb-2" />,
    title: "Identidad Visual",
    description:
      "Creación de branding y guías de estilo para una marca fuerte. <br/> <em>Una marca fuerte no se improvisa, se diseña...</em>",
  },
  {
    icon: <SiInkscape className="text-3xl text-orange-500 mb-2" />,
    title: "Diseño Vectorial",
    description:
      "Material publicitario escalable listo para impresión y web. <br/> <em>Calidad sin límites de escala. Imprime y publica con confianza...</em>",
  },
  {
    icon: <SiGimp className="text-3xl text-orange-500 mb-2" />,
    title: "Edición de Imagen",
    description:
      "Retoque, composición y manipulación fotográfica avanzada. <br/> <em>El impacto visual que tu historia necesita...</em>",
  },
];

const GraphicDesign = () => {
  // Manejador simple para el frontend (la lógica de envío va en la API)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // **1. POST a la API Route de Next.js**
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("¡Mensaje enviado con éxito! Pronto recibirás una respuesta.");
      e.target.reset(); // Limpiar el formulario
    } else {
      alert(
        "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo."
      );
    }
  };
  return (
    <section
      id="graphicdesign"
      className="
        min-h-screen md:h-screen 
        flex flex-col justify-center 
        py-12 px-4 md:px-20 
        w-full
      "
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* TÍTULO PRINCIPAL: (Asumo que el color base viene del padre o de un layout) */}
        <h2 className="text-4xl text-gray-900 font-extrabold mb-2 text-center tracking-tight ">
          {/* Añadido text-white aquí para asegurar contraste en fondos oscuros */}
          Diseño Gráfico
        </h2>
        <p className="text-xl text-gray-500 mb-10 text-center max-w-3xl mx-auto">
          Calidad profesional de agencia con el valor agregado del{" "}
          <span className="font-bold text-orange-500">flujo Open Source</span>.
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
              "
            >
              <div className="flex items-center mb-3">
                {service.icon}
                <h3 className="text-xl font-bold ml-3">{service.title}</h3>
              </div>
              <p
                className="text-gray-500 text-sm"
                dangerouslySetInnerHTML={{ __html: service.description }}
              />
            </div>
          ))}
        </div>

        {/* 2. NUEVO TEXTO: VALOR AGREGADO / LLENAR ESPACIO */}
        <div className="text-center max-w-4xl mx-auto mb-4">
          <h3 className="text-xl font-bold mb-2">
            <span className="text-orange-500">Paquete completo:</span> Diseño
            Web + Viabilidad Técnica
          </h3>
          <p className="text-md text-gray-500">
            Mi experiencia como desarrollador web (Next.js/Tailwind) asegura que
            cada página web que entrego no solo sea{" "}
            <span className="font-bold">visualmente impecable</span>, sino
            también <span className="font-bold">técnicamente viable</span> y
            optimizada para su implementación digital. Esto hace que el diseño
            web y gráficos se complementen perfectamente, reduciendo tiempos y
            costos de desarrollo.
          </p>
        </div>
        {/* 3. FORMULARIO DE CONTACTO SIMPLE */}
        <div
          className="
            w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">          
          <h3
            className="
            text-2xl font-bold text-white text-center w-full mb-6 md:w-1/3 md:text-left md:mr-8 md:mb-0">
            ¿Tienes un proyecto de diseño? Conversemos!
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4 w-full md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {" "}
              {/* grid-cols-1 en móvil, sm:grid-cols-2 en tablet/desktop */}
              {/* Nombre */}
              <input
                type="text"
                placeholder="Tu Nombre"
                name="name"
                className="w-full p-3 rounded-lg bg-gray-700 text-white border-gray-600 focus:ring-orange-500 focus:border-orange-500"
                required
              />
              {/* Email */}
              <input
                type="email"
                placeholder="Tu Email (ej: hola@ejemplo.com)"
                name="email"
                className="w-full p-3 rounded-lg bg-gray-700 text-white border-gray-600 focus:ring-orange-500 focus:border-orange-500"
                required
              />
            </div>

            {/* Mensaje */}
            <textarea
              placeholder="Describe brevemente tu necesidad (ej: Necesito un logo y flyers...)"
              name="message"
              rows="4"
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

export default GraphicDesign;
