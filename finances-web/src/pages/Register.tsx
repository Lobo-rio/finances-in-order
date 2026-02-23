import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BarChart3, Check } from "lucide-react";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const navigate = useNavigate();

  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const passwordStrength = [
    hasMinLength,
    hasUppercase,
    hasNumber,
    hasSpecialChar,
  ].filter(Boolean).length;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      fullName &&
      email &&
      password &&
      password === confirmPassword &&
      acceptTerms
    ) {
      // Mock registration
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
      window.location.reload();
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left side - Registration Form */}
      <div className="w-1/2 flex items-center justify-center bg-gray-50 p-8">
        <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-lg">
          {/* Progress indicator */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-primary mb-2">
              Step 1 of 2
            </p>
            <div className="bg-gray-200 rounded-full h-2">
              <div className="bg-primary h-2 rounded-full w-1/2 transition-all"></div>
            </div>
          </div>

          <h1 className="text-xl font-bold text-text-primary mb-8">
            Cadastro de Usuário - FinançasEmDia
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder=""
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Endereço de Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Senha
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=""
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />

              {/* Password strength meter */}
              {password && (
                <div className="mt-2">
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`h-1 flex-1 rounded ${
                          level <= passwordStrength
                            ? "bg-primary"
                            : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-text-secondary mb-1">
                    Medidor de força
                  </p>
                </div>
              )}

              {/* Password requirements */}
              <div className="mt-3 space-y-1">
                <div className="flex items-center gap-2 text-xs">
                  <Check
                    size={14}
                    className={hasMinLength ? "text-primary" : "text-gray-300"}
                  />
                  <span
                    className={
                      hasMinLength ? "text-text-primary" : "text-text-secondary"
                    }
                  >
                    Mín 8 caracteres
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Check
                    size={14}
                    className={hasUppercase ? "text-primary" : "text-gray-300"}
                  />
                  <span
                    className={
                      hasUppercase ? "text-text-primary" : "text-text-secondary"
                    }
                  >
                    Uma maiúscula
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Check
                    size={14}
                    className={hasNumber ? "text-primary" : "text-gray-300"}
                  />
                  <span
                    className={
                      hasNumber ? "text-text-primary" : "text-text-secondary"
                    }
                  >
                    Um número
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Check
                    size={14}
                    className={
                      hasSpecialChar ? "text-primary" : "text-gray-300"
                    }
                  />
                  <span
                    className={
                      hasSpecialChar
                        ? "text-text-primary"
                        : "text-text-secondary"
                    }
                  >
                    Um caractere especial
                  </span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Confirmar Senha
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder=""
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />
            </div>

            <div className="flex items-start pt-2">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded cursor-pointer mt-0.5"
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-xs text-text-secondary cursor-pointer"
              >
                Eu aceito os{" "}
                <a href="#" className="text-primary hover:text-primary/90">
                  Termos e Condições
                </a>{" "}
                e a{" "}
                <a href="#" className="text-primary hover:text-primary/90">
                  Política de Privacidade
                </a>
                .
              </label>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-semibold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
              >
                Criar Conta
              </button>
            </div>

            <div className="text-center pt-2">
              <Link
                to="/login"
                className="text-sm font-medium text-primary hover:text-primary/90"
              >
                Voltar para Login
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Right side - Illustration */}
      <div className="w-1/2 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-8">
        <div className="relative w-full h-full max-w-2xl flex items-center justify-center">
          <svg viewBox="0 0 800 600" className="w-full h-auto">
            {/* Background circles */}
            <circle cx="200" cy="300" r="80" fill="#e5e7eb" opacity="0.5" />
            <circle cx="600" cy="250" r="100" fill="#d1d5db" opacity="0.4" />
            <circle cx="400" cy="450" r="120" fill="#e5e7eb" opacity="0.3" />

            {/* Dollar signs with circles */}
            <g>
              <circle cx="350" cy="180" r="50" fill="#10b981" opacity="0.9" />
              <text
                x="350"
                y="200"
                fontSize="40"
                fill="white"
                textAnchor="middle"
              >
                $
              </text>
            </g>
            <g>
              <circle cx="250" cy="250" r="60" fill="#34d399" opacity="0.8" />
              <text
                x="250"
                y="275"
                fontSize="45"
                fill="white"
                textAnchor="middle"
              >
                $
              </text>
            </g>
            <g>
              <circle cx="500" cy="350" r="70" fill="#10b981" opacity="0.7" />
              <text
                x="500"
                y="380"
                fontSize="50"
                fill="white"
                textAnchor="middle"
              >
                $
              </text>
            </g>
            <g>
              <circle cx="200" cy="420" r="45" fill="#6b7280" opacity="0.7" />
              <text
                x="200"
                y="440"
                fontSize="35"
                fill="white"
                textAnchor="middle"
              >
                $
              </text>
            </g>
            <g>
              <circle cx="380" cy="480" r="55" fill="#34d399" opacity="0.8" />
              <text
                x="380"
                y="505"
                fontSize="42"
                fill="white"
                textAnchor="middle"
              >
                $
              </text>
            </g>

            {/* Bar chart */}
            <g transform="translate(450, 200)">
              <rect
                x="0"
                y="100"
                width="35"
                height="80"
                fill="#10b981"
                rx="4"
              />
              <rect
                x="45"
                y="70"
                width="35"
                height="110"
                fill="#34d399"
                rx="4"
              />
              <rect
                x="90"
                y="50"
                width="35"
                height="130"
                fill="#6ee7b7"
                rx="4"
              />
              <rect
                x="135"
                y="80"
                width="35"
                height="100"
                fill="#6b7280"
                rx="4"
              />
            </g>

            {/* Trend arrow */}
            <g transform="translate(500, 150)">
              <path
                d="M 0 80 L 50 60 L 100 50 L 150 30"
                stroke="#6b7280"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 150 30 L 130 35 L 135 50"
                stroke="#6b7280"
                strokeWidth="3"
                fill="#6b7280"
                strokeLinecap="round"
              />
            </g>

            {/* Decorative lines */}
            <line
              x1="550"
              y1="250"
              x2="650"
              y2="250"
              stroke="#d1d5db"
              strokeWidth="2"
              opacity="0.5"
            />
            <line
              x1="550"
              y1="270"
              x2="630"
              y2="270"
              stroke="#d1d5db"
              strokeWidth="2"
              opacity="0.5"
            />
            <line
              x1="550"
              y1="290"
              x2="680"
              y2="290"
              stroke="#d1d5db"
              strokeWidth="2"
              opacity="0.5"
            />

            {/* Plus signs */}
            <text x="650" y="450" fontSize="30" fill="#9ca3af" opacity="0.5">
              +
            </text>
            <text x="120" y="150" fontSize="25" fill="#9ca3af" opacity="0.5">
              +
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
