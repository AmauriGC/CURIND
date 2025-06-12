import { useState } from "react";
import { useNavigate } from "react-router";
import "./App.css";
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
      setError("La contraseña son los 3 últimos caracteres de tu CURP");
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
    <div className="login">
      <div className="head">
        <img src={LogoUtez} alt="Logo Utez" />
        <h1>Sistema de evaluación docente</h1>
        <h3>Cursos de inducción</h3>
      </div>

      <form onSubmit={handleLogin} className="body">
        <div className="data">
          <p>Correo</p>
          <input
            type="email"
            name="correo"
            id="correo"
            placeholder="usuario@utez.edu.mx"
            required
            minLength={17}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="data">
          <p>Contraseña</p>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              name="contrasena"
              id="contrasena"
              placeholder="últimos 3 caracteres del CURP"
              required
              minLength={3}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {error && <Toast message={error} type="error" />}
          {success && <Toast message={success} type="success" />}
        </div>

        <button type="submit" disabled={isLoading} className="button-login">
          {isLoading ? "Validando..." : "Iniciar sesión"}
        </button>
      </form>
    </div>
  );
}

export default App;
