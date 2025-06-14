import React, { useState, useEffect } from "react";
import { FileText, GraduationCap, House, LogOut, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DashboardSidebar() {
  const navigate = useNavigate();

  const [selectedButton, setSelectedButton] = useState("Periodos de evaluación");
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
      if (window.innerWidth < 1024) {
        setIsCollapsed(true);
      }
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div
      className={`
      flex flex-col bg-gray-50 h-full-screen left-0 top-0 z-10
      transition-all duration-300 ease-in-out
      ${isCollapsed ? "w-max" : "w-90 lg:w-80"}
      ${isMobile ? "shadow-lg" : ""}
    `}
    >
      <div className="flex flex-col flex-grow overflow-y-auto">
        {/* Header */}
        <div
          className={`flex ${isCollapsed ? "flex-col " : "flex-row justify-between"} 
          gap-4 p-4`}
        >
          {!isCollapsed && (
            <div className="flex flex-col text-left w-50">
              <h1 className="text-lg lg:text-xl font-bold text-gray-600">Administrador</h1>
              <h3 className="text-sm lg:text-base font-semibold text-gray-500 mt-2 lg:mt-4">
                Cristian Amauri Gonzaga Castañeda
              </h3>
            </div>
          )}
          <button
            type="button"
            className={`
              flex justify-center items-center bg-gray-800 rounded-full cursor-pointer 
              text-white w-12 h-12 lg:w-14 lg:h-14 hover:bg-gray-100 hover:text-gray-800
              transition-all duration-200 ease-in-out
              ${!isCollapsed ? "self-end" : ""}
            `}
            onClick={toggleSidebar}
          >
            <Menu size={isCollapsed ? 20 : 24} />
          </button>
        </div>

        {/* Body */}
        {!isCollapsed && (
          <div className="flex flex-col w-full mt-4 lg:mt-6 justify-center border-l-4 border-gray-800 py-2 lg:py-4 gap-3 lg:gap-10">
            {[
              { name: "Periodos de evaluación", icon: House },
              { name: "Gestión académica", icon: GraduationCap },
              { name: "Reportes y resultados", icon: FileText },
            ].map((item) => (
              <button
                key={item.name}
                type="button"
                className={`
                  flex flex-row items-center cursor-pointer text-left
                  bg-white border border-gray-300 rounded-r-lg py-2 lg:py-3 pl-2 w-70 gap-3 lg:gap-4 m-0
                  hover:scale-[1.02] transition-all duration-200 ease-in-out
                  ${selectedButton === item.name ? "h-18 lg:h-24 lg:w-75 bg-gray-50" : ""}
                `}
                onClick={() => setSelectedButton(item.name)}
              >
                <div
                  className={`
                  flex justify-center items-center rounded-full
                  text-white w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0
                  ${selectedButton === item.name ? "bg-gray-800" : "bg-[#1AAC87]"}
                  hover:bg-green-600 hover:scale-[1.02]
                  transition-all duration-200 ease-in-out
                `}
                >
                  <item.icon size={isCollapsed ? 18 : 20} />
                </div>
                <p
                  className={`
                  text-gray-500 font-medium text-sm lg:text-base whitespace-nowrap 
                  ${selectedButton === item.name ? "font-semibold" : ""}
                `}
                >
                  {item.name}
                </p>
              </button>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto pb-8 lg:pb-12">
          <button
            type="button"
            className={`
              flex ${isCollapsed ? "justify-center" : "justify-start"} items-center 
              cursor-pointer text-left w-full
              ${!isCollapsed ? "border-l-4 border-gray-800 pl-2" : ""}
            `}
          >
            <div
              className={`
              flex justify-center items-center bg-gray-800 rounded-full
              text-white w-10 h-10 lg:w-12 lg:h-12
              hover:bg-white hover:text-gray-800 hover:scale-[1.05]
              transition-all duration-200 ease-in-out
            `}
              onClick={handleLogout}
            >
              <LogOut size={isCollapsed ? 18 : 20} />
            </div>
            {!isCollapsed && (
              <span className="ml-3 text-sm lg:text-base text-gray-500 font-medium" onClick={handleLogout}>
                Cerrar sesión
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
