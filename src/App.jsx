import { useState } from "react";
import { useNavigate } from "react-router";
import LogoUtez from "./assets/img/LogoUtez.png";
import { Toast } from "./components/Toast";
import { Eye, EyeOff } from "lucide-react";

function App() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validatePassword = (password) => {
    const letterCount = (password.match(/[a-zA-Z]/g) || []).length;
    const numberCount = (password.match(/[0-9]/g) || []).length;
    return password.length >= 3 && letterCount >= 2 && numberCount >= 1;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    if (!email.endsWith("@utez.edu.mx")) {
      setError("Debes usar un correo institucional @utez.edu.mx");
      setIsLoading(false);
      return;
    }

    if (!validatePassword(password)) {
      setError("La contraseña es incorrecta");
      setIsLoading(false);
      return;
    }

    setSuccess("Credenciales válidas, redirigiendo...");

    setTimeout(() => {
      setIsLoading(false);
      navigate("/reportes");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 sm:p-6">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg overflow-hidden p-6 sm:p-8">
        {/* Encabezado */}
        <div className="flex flex-col items-center mb-6 sm:mb-8">
          <img src={LogoUtez} alt="Logo Utez" className="w-40 sm:w-48 h-auto" />
          <h1 className="mt-4 text-xl sm:text-2xl font-bold text-center text-gray-900">
            Sistema de evaluación docente
          </h1>
          <h3 className="mt-1 text-lg sm:text-xl text-center text-gray-600 font-semibold">Cursos de inducción</h3>
        </div>

        {/* Formulario */}
        <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5">
          <div>
            <label htmlFor="correo" className="block text-sm sm:text-base font-medium text-gray-700">
              Correo institucional
            </label>
            <input
              type="email"
              id="correo"
              placeholder="usuario@utez.edu.mx"
              required
              minLength={17}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
            />
          </div>

          <div>
            <label htmlFor="contrasena" className="block text-sm sm:text-base font-medium text-gray-700">
              Contraseña
            </label>
            <div className="mt-1 relative rounded-lg shadow-sm">
              <input
                type={showPassword ? "text" : "password"}
                id="contrasena"
                placeholder="***"
                required
                minLength={3}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          {error && <Toast message={error} type="error" />}
          {success && <Toast message={success} type="success" />}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 sm:py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm sm:text-base font-medium text-white bg-[#007656] hover:bg-[#1aac87] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 transform hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Validando...
                </span>
              ) : (
                "Iniciar sesión"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
