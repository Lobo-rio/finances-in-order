import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BarChart3, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - em produção, aqui faria a autenticação real
    if (email && password) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
      window.location.reload(); // Recarrega para atualizar o estado de autenticação
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left side - Login Form */}
      <div className="w-1/2 flex items-center justify-center bg-gray-50 p-8">
        <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-primary p-2 rounded-lg">
              <BarChart3 className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold text-text-primary">
              FinançasEmDia
            </h1>
          </div>
          <p className="text-text-secondary mb-8">
            Bem-vindo de volta. Por favor, faça login para gerenciar suas
            finanças.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Endereço de Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="exemplo@exemplo.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Senha
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded cursor-pointer"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-text-secondary cursor-pointer"
                >
                  Lembrar-me
                </label>
              </div>
              <div className="text-sm">
                <Link
                  to="/forgot-password"
                  className="font-medium text-primary hover:text-primary/90"
                >
                  Esqueceu a senha?
                </Link>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-semibold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
              >
                Entrar
              </button>
            </div>
            <div className="text-center">
              <p className="text-sm text-text-secondary">
                Não tem uma conta?{" "}
                <Link
                  to="/register"
                  className="font-medium text-primary hover:text-primary/90"
                >
                  Cadastre-se
                </Link>
              </p>
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

            {/* Pie chart icon */}
            <g transform="translate(150, 200)">
              <path
                d="M 80 80 L 80 20 A 60 60 0 0 1 115 120 Z"
                fill="#10b981"
              />
              <path
                d="M 80 80 L 115 120 A 60 60 0 0 1 45 120 Z"
                fill="#34d399"
              />
              <path d="M 80 80 L 45 120 A 60 60 0 0 1 25 90 Z" fill="#6ee7b7" />
              <path d="M 80 80 L 25 90 A 60 60 0 0 1 80 20 Z" fill="#4b5563" />
              <circle cx="80" cy="80" r="25" fill="white" />
            </g>

            {/* Bar chart */}
            <g transform="translate(350, 300)">
              <rect
                x="0"
                y="100"
                width="40"
                height="80"
                fill="#10b981"
                rx="4"
              />
              <rect
                x="50"
                y="60"
                width="40"
                height="120"
                fill="#34d399"
                rx="4"
              />
              <rect
                x="100"
                y="40"
                width="40"
                height="140"
                fill="#4b5563"
                rx="4"
              />
              <rect
                x="150"
                y="80"
                width="40"
                height="100"
                fill="#6ee7b7"
                rx="4"
              />
            </g>

            {/* Line chart with trend */}
            <g transform="translate(200, 400)">
              <path
                d="M 0 50 Q 50 40 100 35 T 200 20 T 300 10"
                stroke="#10b981"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="300" cy="10" r="6" fill="#10b981" />
              <path
                d="M 250 15 L 280 5"
                stroke="#10b981"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M 280 5 L 270 25"
                stroke="#10b981"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </g>

            {/* Dollar signs */}
            <text x="550" y="200" fontSize="40" fill="#9ca3af" opacity="0.5">
              $
            </text>
            <text x="650" y="450" fontSize="50" fill="#9ca3af" opacity="0.4">
              $
            </text>
            <text x="100" y="500" fontSize="35" fill="#9ca3af" opacity="0.5">
              $
            </text>

            {/* Decorative lines */}
            <line
              x1="500"
              y1="150"
              x2="600"
              y2="150"
              stroke="#d1d5db"
              strokeWidth="2"
              opacity="0.6"
            />
            <line
              x1="500"
              y1="170"
              x2="580"
              y2="170"
              stroke="#d1d5db"
              strokeWidth="2"
              opacity="0.6"
            />
            <line
              x1="500"
              y1="190"
              x2="620"
              y2="190"
              stroke="#d1d5db"
              strokeWidth="2"
              opacity="0.6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
