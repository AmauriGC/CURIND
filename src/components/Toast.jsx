import "../assets/styles/Toast.css";
import { CircleX, CircleCheck } from "lucide-react";

export const Toast = ({ message, type = "info" }) => {
  if (!message) return null;

  const toastClasses = `toast ${type}`;
  const Icon = type === "error" ? CircleX : CircleCheck;

  return (
    <div className={toastClasses}>
      <span className="toast-message">
        <Icon size={20} className="toast-icon" />
        {message}
      </span>
    </div>
  );
};
