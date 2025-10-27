"use client";
import React, { useState } from "react";
import projectsData from "../../public/data/proyects.json";
import { FiCheckCircle, FiClock } from "react-icons/fi";
import Image from "next/image";

const ProyectsContact = () => {
  // 1. Estado para manejar qué proyecto está seleccionado (por defecto, el primero)
  const [activeProject, setActiveProject] = useState(projectsData[0]);

  // Función para manejar el clic en la lista
  const handleProjectClick = (project) => {
    setActiveProject(project);
  };
  // Lógica para determinar el Badge de Estado
  const StatusBadge = ({ isActive }) => {
    if (isActive) {
      return (
        <span className="flex items-center text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold">
          <FiCheckCircle className="mr-1 h-3 w-3" /> Activo
        </span>
      );
    } else {
      return (
        <span className="flex items-center text-xs px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full font-semibold">
          <FiClock className="mr-1 h-3 w-3" /> Pausado
        </span>
      );
    }
  };

  return (
    <section
      id="projects"
      className="
                min-h-screen md:h-screen
                flex flex-col justify-center 
                py-12 px-8 lg:px-20 
                w-full bg-gray-800
            "
    >
      <div className="w-full max-w-7xl mx-auto h-full flex flex-col pt-10 pb-10">
        <h2 className="text-gray-300 text-4xl font-extrabold mb-8 text-center tracking-tight">
          Mis Proyectos
        </h2>

        {/* CONTENEDOR PRINCIPAL: Flex para las dos columnas (detalles + lista) */}
        <div
          className="
                    flex flex-col-reverse md:flex-row 
                    flex-grow gap-8 
                    bg-gray-800 md:bg-white rounded-xl overflow-hidden
                    border md:border-gray-100
                "
        >
          {/* COLUMNA 1 (IZQUIERDA): PANEL DE DETALLES Y IMAGEN */}
          {activeProject && (
            <div className="bg-white w-full md:w-3/5 p-6 md:p-10 flex flex-col justify-between">
              {/* IMAGEN DEL PROYECTO (Ajusta la fuente de la imagen según tu estructura) */}
              <div className="relative w-full h-1/2 rounded-lg overflow-hidden shadow-lg mb-6">
                <Image
                  src={activeProject.imagePath}
                  alt={`Imagen del proyecto ${activeProject.title}`}
                  fill
                  className="object-fill"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={true}
                />
              </div>

              {/* TEXTO DE DETALLES */}
              <div className="flex-grow">
                <h3 className="text-3xl font-extrabold mb-2 text-gray-900">
                  {activeProject.title}
                </h3>
                <span className="text-sm font-medium text-orange-600 mb-4 block uppercase tracking-wider">
                  {activeProject.category}
                </span>
                <p className="text-gray-600 mb-4 text-md">
                  {activeProject.description}
                </p>

                {/* Stack de Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {activeProject.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 pt-2 py-0.5 bg-gray-200 text-gray-700 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Observaciones */}
                <StatusBadge isActive={activeProject.active} />
                {activeProject.observation && (
                  <div className="mt-4 pb-3 rounded-lg">
                    <p className="text-sm font-medium text-gray-700">
                      Nota: {activeProject.observation}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* COLUMNA 2 (DERECHA): LISTA DE PROYECTOS */}
          <div className="bg-white md:bg-gray-200 w-full md:w-2/5  p-4 md:p-6 overflow-y-auto max-h-50 md:max-h-full">
            <h4 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">
              Navegación de Proyectos
            </h4>

            {projectsData.map((project, index) => (
              <div
                key={index}
                onClick={() => handleProjectClick(project)}
                // Clase condicional para resaltar el proyecto activo
                className={`
                                    p-3 mb-2 rounded-lg cursor-pointer transition duration-200
                                    ${
                                      activeProject.title === project.title
                                        ? "bg-orange-500 text-white shadow-lg"
                                        : "bg-white text-gray-800 hover:bg-gray-200"
                                    }
                                `}
              >
                <h5
                  className={`text-lg font-bold ${
                    activeProject.title !== project.title
                      ? "text-gray-900"
                      : "text-white"
                  }`}
                >
                  {project.title}
                </h5>
                <div className="flex flex-wrap gap-1 mt-1">
                  {project.stack.slice(0, 2).map(
                    (
                      tech,
                      i // Muestra solo los 2 primeros stacks
                    ) => (
                      <span
                        key={i}
                        className={`text-xs px-2 py-0.5 rounded-full font-medium 
                                            ${
                                              activeProject.title ===
                                              project.title
                                                ? "bg-white bg-opacity-20 text-gray-700"
                                                : "bg-gray-300 text-gray-700"
                                            }`}
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProyectsContact;
