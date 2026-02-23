import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LogoIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="6" fill="#00D97E" />
    <text x="8" y="23" fontSize="20" fontWeight="bold" fill="white">
      F
    </text>
  </svg>
);

const KeyIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
    <circle
      cx="22"
      cy="22"
      r="12"
      stroke="#00D97E"
      strokeWidth="3"
      fill="none"
    />
    <circle cx="22" cy="22" r="4" fill="#00D97E" />
    <line
      x1="30"
      y1="30"
      x2="48"
      y2="48"
      stroke="#00D97E"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <line
      x1="42"
      y1="44"
      x2="42"
      y2="50"
      stroke="#00D97E"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <line
      x1="46"
      y1="48"
      x2="46"
      y2="52"
      stroke="#00D97E"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      navigate("/recovery-sent", { state: { email } });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Logo no canto superior esquerdo */}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <LogoIcon />
          <span className="text-xl font-bold text-text-primary">
            <span className="font-extrabold">Finanças</span>EmDia
          </span>
        </div>
      </div>

      {/* Card centralizado */}
      <div
        className="flex items-center justify-center px-8"
        style={{ minHeight: "calc(100vh - 88px)" }}
      >
        <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-md text-center">
          {/* Ícone chave */}
          <div className="mx-auto mb-6 flex items-center justify-center">
            <KeyIcon />
          </div>

          <h1 className="text-2xl font-bold text-text-primary mb-3">
            Recuperar senha
          </h1>
          <p className="text-text-secondary text-sm mb-8">
            Insira seu e-mail e enviaremos instruções
            <br />
            para redefinir sua senha.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu endereço de e-mail"
              className="w-full px-4 py-3 border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm placeholder:text-gray-400"
              required
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg text-base font-semibold text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              Enviar instruções
            </button>
            <div>
              <Link
                to="/login"
                className="text-sm font-medium text-primary hover:text-primary/80"
              >
                Voltar para o login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}