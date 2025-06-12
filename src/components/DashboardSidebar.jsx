import React, { useState } from "react";
import { FileText, GraduationCap, House, LogOut, Menu } from "lucide-react";
import "../assets/styles/DashboardSidebar.css";

export default function DashboardSidebar() {
  const [selectedButton, setSelectedButton] = useState("Periodos de evaluación");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-content">
        <div className="headerSidebar">
          {!isCollapsed && (
            <div className="dataColumn">
              <h1>Administrador</h1>
              <h3>Cristian Amauri Gonzaga Castañeda</h3>
            </div>
          )}
          <div className="dataColumn">
            <button type="button" className="buttonMenu" onClick={toggleSidebar}>
              <Menu size={48} />
            </button>
          </div>
        </div>

        {!isCollapsed && (
          <div className="bodySidebar">
            <button
              type="button"
              className={`pageButton ${selectedButton === "Periodos de evaluación" ? "selected" : ""}`}
              onClick={() => setSelectedButton("Periodos de evaluación")}
            >
              <div className="buttonPage">
                <House size={32} />
              </div>
              <p className="textPage">Periodos de evaluación</p>
            </button>
            <button
              type="button"
              className={`pageButton ${selectedButton === "Gestión académica" ? "selected" : ""}`}
              onClick={() => setSelectedButton("Gestión académica")}
            >
              <div className="buttonPage">
                <GraduationCap size={32} />
              </div>
              <p className="textPage">Gestión académica</p>
            </button>
            <button
              type="button"
              className={`pageButton ${selectedButton === "Reportes y resultados" ? "selected" : ""}`}
              onClick={() => setSelectedButton("Reportes y resultados")}
            >
              <div className="buttonPage">
                <FileText size={32} />
              </div>
              <p className="textPage">Reportes y resultados</p>
            </button>
          </div>
        )}
      </div>

      {!isCollapsed && (
        <div className="footerSidebar">
          <button type="button" className="buttonLogout">
            <div className="buttonExit">
              <LogOut size={32} />
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
