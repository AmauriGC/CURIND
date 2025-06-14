import { FileText } from "lucide-react";
import DashboardSidebar from "../components/DashboardSidebar";
import Header from "../components/Header";

export default function Reportes() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white overflow-hidden">
      <Header />
      <div className="flex flex-1">
        <DashboardSidebar />

        {/* Contenido principal */}
        <main className="w-full py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2 sm:gap-4">
            {/* Título principal */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-normal text-gray-800">Reportes y resultados</h1>

            {/* Sección de Periodo Académico */}
            <section className="flex flex-col gap-2 w-full sm:w-max">
              <h2 className="text-lg sm:text-xl font-normal text-gray-500">Periodo Académico</h2>
              <div className="bg-white rounded-lg">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <select className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-700">
                    <option>Julio - Agosto 2023</option>
                    <option>Julio - Agosto 2024</option>
                    <option>Julio - Agosto 2025</option>
                  </select>
                  <button className="bg-[#007656] hover:bg-[#1aac87] text-white px-4 py-2 rounded-md transition-colors whitespace-nowrap">
                    Aplicar filtros
                  </button>
                </div>
              </div>
            </section>

            {/* Estadísticas principales */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow border border-gray-200 p-4 sm:p-6 flex flex-col gap-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Promedio Global</h3>
                <div className="flex items-center">
                  <span className="text-2xl sm:text-3xl font-bold mr-2">8.9</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500">De 10.0 puntos máximos</p>
              </div>

              <div className="bg-white rounded-lg shadow border border-gray-200 p-4 sm:p-6 flex flex-col gap-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Docentes evaluados</h3>
                <div className="flex items-center">
                  <span className="text-2xl sm:text-3xl font-bold mr-2">15</span>
                  <span className="text-gray-500">/ 100</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500">En el período actual</p>
              </div>

              <div className="bg-white rounded-lg shadow border border-gray-200 p-4 sm:p-6 flex flex-col gap-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Divisiones activas</h3>
                <div className="flex items-center">
                  <span className="text-2xl sm:text-3xl font-bold mr-2">1</span>
                  <span className="text-gray-500">/ 3</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500">Con evaluaciones completadas</p>
              </div>
            </section>

            {/* Sección de Promedios */}
            <section className="bg-[#007656] flex justify-center rounded-lg p-1">
              <div className="flex w-full">
                <button className="bg-white hover:bg-gray-50 rounded-lg text-center transition-colors w-full py-2 px-4">
                  <span className="text-sm sm:text-base font-medium text-gray-800">Promedios</span>
                </button>
                <button className="rounded-lg text-center transition-colors w-full py-2 px-4">
                  <span className="text-sm sm:text-base font-medium text-white">Comentarios</span>
                </button>
              </div>
            </section>

            {/* Sección de categorías */}
            <section className="bg-[#007656] w-full sm:w-4/5 lg:w-3/5 justify-center self-center rounded-lg p-1">
              <div className="flex w-full">
                <button className="bg-white hover:bg-gray-50 rounded-lg text-center transition-colors w-full py-2 px-4">
                  <span className="text-sm sm:text-base font-medium text-gray-800">Por división</span>
                </button>
                <button className="rounded-lg text-center transition-colors w-full py-2 px-4">
                  <span className="text-sm sm:text-base font-medium text-white">Por docente</span>
                </button>
              </div>
            </section>

            {/* Sección de datos */}
            <section className="w-full flex flex-col gap-4 sm:gap-6">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-between">
                <select className="bg-white self-end py-2 px-4 w-full sm:w-48 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-700">
                  <option>DATID</option>
                  <option>DAMI</option>
                  <option>DATEFI</option>
                </select>

                <div className="bg-white rounded-lg shadow p-4 border border-gray-200 flex flex-col gap-2 w-full sm:w-100">
                  <h3 className="text-lg font-semibold text-gray-800">Promedio general</h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Exportar el promedio general de todas las divisiones
                  </p>
                  <button className="bg-[#182641] hover:bg-[#3E7BB2] text-white px-4 py-2 rounded-md transition-colors w-full">
                    Exportar
                  </button>
                </div>
              </div>

              {/* Tabla */}
              <div className="bg-white rounded-lg shadow overflow-hidden w-full">
                <div className="grid grid-cols-12 bg-[#182641] p-3 sm:p-4 font-bold text-white text-xs sm:text-sm">
                  <div className="col-span-2 sm:col-span-1">#</div>
                  <div className="col-span-4 sm:col-span-3">DIVISIÓN</div>
                  <div className="col-span-3 sm:col-span-3">PROMEDIO</div>
                  <div className="col-span-3 sm:col-span-5 flex justify-center">ACCIONES</div>
                </div>
                {/* Ejemplo de fila */}
                <div className="grid grid-cols-12 p-3 sm:p-4 border-b border-gray-200 items-center text-xs sm:text-sm">
                  <div className="col-span-2 sm:col-span-1">1</div>
                  <div className="col-span-4 sm:col-span-3">DSM</div>
                  <div className="col-span-3 sm:col-span-3">8.7</div>
                  <div className="col-span-3 sm:col-span-5 flex justify-center">
                    <button className="text-red-500 hover:text-red-700">
                      <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-12 p-3 sm:p-4 border-b border-gray-200 items-center text-xs sm:text-sm">
                  <div className="col-span-2 sm:col-span-1">1</div>
                  <div className="col-span-4 sm:col-span-3">DSM</div>
                  <div className="col-span-3 sm:col-span-3">8.7</div>
                  <div className="col-span-3 sm:col-span-5 flex justify-center">
                    <button className="text-red-500 hover:text-red-700">
                      <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-12 p-3 sm:p-4 border-b border-gray-200 items-center text-xs sm:text-sm">
                  <div className="col-span-2 sm:col-span-1">1</div>
                  <div className="col-span-4 sm:col-span-3">DSM</div>
                  <div className="col-span-3 sm:col-span-3">8.7</div>
                  <div className="col-span-3 sm:col-span-5 flex justify-center">
                    <button className="text-red-500 hover:text-red-700">
                      <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-12 p-3 sm:p-4 border-b border-gray-200 items-center text-xs sm:text-sm">
                  <div className="col-span-2 sm:col-span-1">1</div>
                  <div className="col-span-4 sm:col-span-3">DSM</div>
                  <div className="col-span-3 sm:col-span-3">8.7</div>
                  <div className="col-span-3 sm:col-span-5 flex justify-center">
                    <button className="text-red-500 hover:text-red-700">
                      <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-12 p-3 sm:p-4 border-b border-gray-200 items-center text-xs sm:text-sm">
                  <div className="col-span-2 sm:col-span-1">1</div>
                  <div className="col-span-4 sm:col-span-3">DSM</div>
                  <div className="col-span-3 sm:col-span-3">8.7</div>
                  <div className="col-span-3 sm:col-span-5 flex justify-center">
                    <button className="text-red-500 hover:text-red-700">
                      <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
