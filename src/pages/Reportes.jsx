import DashboardSidebar from "../components/DashboardSidebar";
import "../assets/styles/Reporte.css";

export default function Reportes() {
  return (
    <div className="pageContainer">
      <DashboardSidebar />

      <div style={{ padding: "16px" }}>
        <h1>Periodos de evaluación</h1>
      </div>
    </div>
  );
}
