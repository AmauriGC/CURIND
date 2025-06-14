import React from "react";
import LogoUtez from "../assets/img/LogoUtez.png";

export default function Header() {
  return (
    <div className="relative flex items-center w-full h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 bg-gray-900 overflow-hidden">
      {/* Fondo con diagonales */}
      <div className="absolute inset-0 flex">
        {/* Diagonal izquierda (verde oscuro) - solo visible en md+ */}
        <div className="hidden md:block w-1/4 lg:w-1/5 h-full relative">
          <div
            className="absolute right-0 top-0 w-full h-full bg-[#007656]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)",
              transform: "skewX(-20deg)",
              transformOrigin: "top right",
            }}
          ></div>
        </div>

        {/* Diagonal derecha (verde claro) */}
        <div className="w-1/4 lg:w-1/5 h-full ml-auto relative">
          <div
            className="absolute left-0 bottom-0 w-full h-full bg-[#1aac87]"
            style={{
              clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
              transform: "skewX(-20deg)",
              transformOrigin: "bottom left",
            }}
          ></div>
        </div>
      </div>

      {/* Logo con recorte diagonal */}
      <div
        className="absolute left-0 top-0 h-full w-1/2 sm:w-2/5 md:w-2/6 lg:w-1/4 bg-white"
        style={{
          clipPath: "polygon(0 0, 70% 0, 50% 100%, 0% 100%)",
        }}
      >
        <div className="h-full flex items-center pl-2 sm:pl-4 md:pl-6 lg:pl-8">
          <img src={LogoUtez} alt="Logo UTez" className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto" />
        </div>
      </div>

      {/* Título */}
      <div className="relative z-10 w-full text-center px-2 sm:px-4 md:px-6">
        <h1 className="text-white text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl font-medium leading-tight">
          Sistema de evaluación
          <br className="lg:hidden" /> para cursos de inducción
        </h1>
      </div>
    </div>
  );
}
