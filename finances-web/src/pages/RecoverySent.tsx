import { Check } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function RecoverySent() {
  const location = useLocation();
  const email = location.state?.email || "user@example.com";

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-teal-100 via-green-50 to-gray-200">
      <div className="w-full max-w-xl bg-white p-12 rounded-2xl shadow-md text-center mx-4">
        {/* Check icon */}
        <div className="mx-auto bg-primary/15 rounded-full w-28 h-28 flex items-center justify-center mb-8">
          <Check size={52} className="text-primary" strokeWidth={2.5} />
        </div>

        <h1 className="text-2xl font-bold text-text-primary mb-4">
          E-mail de recuperação enviado
        </h1>
        <p className="text-text-secondary text-sm leading-relaxed mb-8 max-w-sm mx-auto">
          Enviamos um e-mail para{" "}
          <span className="font-semibold text-text-primary">{email}</span> com
          instruções para redefinir sua senha. Verifique sua caixa de entrada e,
          se necessário, sua pasta de spam.
        </p>

        <Link
          to="/login"
          className="w-full block py-3 px-4 rounded-lg text-base font-semibold text-white bg-primary hover:bg-primary/90 transition-colors mb-4"
        >
          Voltar para o login
        </Link>

        <a
          href="https://mail.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-primary hover:text-primary/80"
        >
          Abrir e-mail
        </a>
      </div>
    </div>
  );
}