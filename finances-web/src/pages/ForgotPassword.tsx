import { useState } from "react";
import { KeyRound, BarChart3 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Mock de envio de email de recuperação
      navigate("/recovery-sent", { state: { email } });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-lg">
            <BarChart3 className="text-white" size={20} />
          </div>
          <h1 className="text-xl font-bold text-text-primary">FinançasEmDia</h1>
        </div>
      </div>

      {/* Card centralizado */}
      <div
        className="flex items-center justify-center px-8"
        style={{ minHeight: "calc(100vh - 100px)" }}
      >
        <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-lg text-center">
          <div className="mx-auto bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mb-6">
            <KeyRound size={40} className="text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-text-primary mb-4">
            Recuperar senha
          </h1>
          <p className="text-text-secondary mb-8">
            Insira seu e-mail e enviaremos instruções para redefinir sua senha.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu endereço de e-mail"
                className="w-full px-4 py-3 border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-center placeholder:text-gray-400"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-lg text-base font-semibold text-white bg-primary hover:bg-primary/90 transition-colors"
              >
                Enviar instruções
              </button>
            </div>
            <div className="text-center">
              <Link
                to="/login"
                className="font-medium text-sm text-primary hover:text-primary/90"
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
