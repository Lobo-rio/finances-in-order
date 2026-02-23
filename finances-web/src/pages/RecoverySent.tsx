import { CheckCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function RecoverySent() {
  const location = useLocation();
  const email = location.state?.email || "user@example.com";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-green-100 to-cyan-50">
      <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-lg text-center">
        <div className="mx-auto bg-primary/20 rounded-full w-24 h-24 flex items-center justify-center mb-6">
          <CheckCircle size={48} className="text-primary" strokeWidth={2.5} />
        </div>
        <h1 className="text-2xl font-bold text-text-primary mb-4">
          E-mail de recuperação enviado
        </h1>
        <p className="text-text-secondary mb-8 leading-relaxed">
          Enviamos um e-mail para{" "}
          <span className="font-semibold text-text-primary">{email}</span> com
          instruções para redefinir sua senha. Verifique sua caixa de entrada e,
          se necessário, sua pasta de spam.
        </p>

        <div className="space-y-4">
          <div>
            <Link
              to="/login"
              className="w-full block py-3 px-4 rounded-lg text-base font-semibold text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              Voltar para o login
            </Link>
          </div>
          <div className="text-center">
            <a
              href="https://mail.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sm text-primary hover:text-primary/90"
            >
              Abrir e-mail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
