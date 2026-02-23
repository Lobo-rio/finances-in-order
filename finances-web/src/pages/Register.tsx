import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

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

  const getStrengthColor = (index: number) => {
    if (index >= passwordStrength) return "bg-gray-200";
    if (passwordStrength === 1) return "bg-red-400";
    if (passwordStrength === 2) return "bg-orange-400";
    if (passwordStrength === 3) return "bg-yellow-400";
    return "bg-primary";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      fullName &&
      email &&
      password &&
      password === confirmPassword &&
      acceptTerms
    ) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
      window.location.reload();
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left side - Registration Form */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100 p-8">
        <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-md">
          {/* Progress indicator */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-primary mb-2">
              Step 1 of 2
            </p>
            <div className="bg-gray-200 rounded-full h-1.5">
              <div className="bg-primary h-1.5 rounded-full w-1/2 transition-all" />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-text-primary mb-6">
            User Registration - FinançasEmDia
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm"
            />

            {/* Email */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm"
            />

            {/* Password + checklist side by side */}
            <div className="flex gap-4 items-start">
              <div className="flex-1">
                <label className="block text-sm font-medium text-text-primary mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm"
                />
                {/* Strength meter */}
                <div className="mt-2 flex gap-1">
                  {[1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`h-1.5 flex-1 rounded-full ${getStrengthColor(level)}`}
                    />
                  ))}
                </div>
                <p className="text-xs text-text-secondary mt-1">
                  Strength meter
                </p>
              </div>

              {/* Requirements checklist */}
              <div className="pt-7 space-y-1 min-w-fit">
                {[
                  { label: "Min 8 chars", met: hasMinLength },
                  { label: "One uppercase", met: hasUppercase },
                  { label: "One number", met: hasNumber },
                  { label: "One special char", met: hasSpecialChar },
                ].map(({ label, met }) => (
                  <div key={label} className="flex items-center gap-1.5">
                    <Check
                      size={13}
                      className={met ? "text-primary" : "text-gray-300"}
                    />
                    <span
                      className={`text-xs ${met ? "text-text-primary" : "text-text-secondary"}`}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Confirm Password */}
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm"
            />

            {/* Terms */}
            <div className="flex items-start gap-2 pt-1">
              <input
                id="terms"
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="h-4 w-4 accent-primary border-gray-300 rounded cursor-pointer mt-0.5"
              />
              <label
                htmlFor="terms"
                className="text-xs text-text-secondary cursor-pointer"
              >
                I accept the{" "}
                <a href="#" className="text-primary hover:underline">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg text-base font-semibold text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              Create Account
            </button>

            <div className="text-center">
              <Link
                to="/login"
                className="text-sm font-medium text-primary hover:text-primary/80"
              >
                Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Right side - Illustration */}
      <div className="w-1/2 bg-linear-to-br from-green-50 to-teal-100 flex items-center justify-center p-8">
        <div className="w-full h-full max-w-2xl flex items-center justify-center">
          <svg viewBox="0 0 800 600" className="w-full h-auto">
            <circle cx="200" cy="300" r="80" fill="#e5e7eb" opacity="0.5" />
            <circle cx="600" cy="250" r="100" fill="#d1d5db" opacity="0.4" />
            <circle cx="400" cy="450" r="120" fill="#e5e7eb" opacity="0.3" />
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
