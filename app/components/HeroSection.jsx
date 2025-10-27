import React from "react";
import Image from "next/image";
import {
  FiMail,
  FiInstagram,
  FiExternalLink,
  FiLinkedin,
  FiPhone,
} from "react-icons/fi";

const HeroSection = () => {
  const socialLinks = {
    email: "mailto:fernandoth.20@gmail.com",
    instagram: "https://www.instagram.com/ferthomas.dev/",
    linkedin: "https://www.linkedin.com/in/fernando-thomas-0491b9121/",
    whatsapp: "https://wa.me/542944502037",
  };
  return (
    <section
      className="
        flex flex-col md:flex-row 
        min-h-screen h-[100dvh] 
        justify-between md:justify-around // ⬅️ Nuevo: Pega el texto arriba y la imagen abajo en móvil
        items-start md:items-center // Texto alineado arriba, pero centrado horizontalmente en desktop
        md:pt-32 pt-0 pb-0 px-8 md:pl-40 md:pr-8 
        text-[#2a2a2a] overflow-hidden w-full
      "
    >
      {/* DIV DEL TEXTO (Alineado arriba) */}
      <div className="md:ml-8 relative z-10 w-full md:w-1/2 mt-8 md:mt-0">
        <h1 className="text-xl font-bold mb-1 text-left font-inter tracking-wide">
          - Hola!
        </h1>
        <h1 className="md:text-6xl text-5xl font-bold mb-4 text-left font-inter tracking-wide">
          Soy Fer<span className="text-orange-500">Thomas</span>
        </h1>
        <h1 className="text-sm font-light opacity-70 mb-4 text-left font-inter tracking-widest max-w-lg">
          Diseñador Visual y Desarrollador Web. <br /> Uno la estética con la
          función, creando UI/UX rápidos y limpios, además de apps listas para
          escalar en Web, Android e iOS.
        </h1>
        <div className="flex space-x-6 mt-6">
          {/* 1. Email */}
          <a
            href={socialLinks.email}
            aria-label="Enviar Correo Electrónico"
            className="text-2xl text-gray-700 hover:text-orange-500 transition duration-300"
          >
            <FiMail />
          </a>

          {/* 2. Instagram */}
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de Instagram"
            className="text-2xl text-gray-700 hover:text-orange-500 transition duration-300"
          >
            <FiInstagram />
          </a>

          {/* 3. LinkedIn */}
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de LinkedIn"
            className="text-2xl text-gray-700 hover:text-orange-500 transition duration-300"
          >
            <FiLinkedin />
          </a>

          {/* 4. WhatsApp (Usamos FiPhone para un look limpio y profesional) */}
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enviar mensaje por WhatsApp"
            className="text-2xl text-gray-700 hover:text-orange-500 transition duration-300"
          >
            <FiPhone />
          </a>
        </div>
      </div>

      {/* DIV DE LA IMAGEN (Pegado abajo en móvil) */}
      <div
        className="
        relative z-0 w-full flex justify-center md:justify-end 
        md:mt-0 
      "
      >
        <Image
          src="/img/perfil.png"
          alt="imagen perfil"
          width={900}
          height={900}
          objectFit="contain"
          priority={true}
          className="z-0 max-h-full" // Aumentado ligeramente max-h para que sea más grande en móvil
        />
      </div>
    </section>
  );
};

export default HeroSection;
