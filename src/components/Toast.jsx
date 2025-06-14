import { CircleX, CircleCheck } from "lucide-react";

export const Toast = ({ message, type = "info" }) => {
  if (!message) return null;

  // Configuración de clases base y específicas por tipo
  const baseClasses =
    "p-3 sm:p-4 rounded-lg text-base font-medium my-2 w-full box-border animate-[fadeIn_0.3s_ease-in-out] flex items-center justify-center gap-2";

  const typeClasses = {
    info: "bg-blue-50 text-blue-800 border border-blue-200",
    error: "bg-red-50 text-red-700 border border-red-200",
    success: "bg-green-50 text-green-800 border border-green-200",
  };

  // Seleccionar el icono adecuado
  const Icon = type === "error" ? CircleX : CircleCheck;
  const iconColor = type === "error" ? "text-red-600" : "text-green-600";

  return (
    <div className={`${baseClasses} ${typeClasses[type]}`}>
      <Icon size={20} className={`flex-shrink-0 ${iconColor}`} />
      <span>{message}</span>
    </div>
  );
};
