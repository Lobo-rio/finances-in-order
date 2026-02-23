import { useState, useRef, useEffect } from "react";
import {
  Search,
  Bell,
  ChevronDown,
  Users,
  UserPen,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { currentUser } from "../data/mockUsers";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const isAdmin = currentUser.role === "Admin";

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigate = (path: string) => {
    setIsDropdownOpen(false);
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <header className="flex items-center justify-between p-6 bg-background-light border-b border-card-border">
      <div className="relative">
        <Search
          size={20}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"
        />
        <input
          type="text"
          placeholder="Buscar transações, categorias..."
          className="w-96 pl-10 pr-4 py-2 rounded-lg border border-card-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="relative text-text-secondary hover:text-text-primary">
          <Bell size={24} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src="https://i.pravatar.cc/40?u=carlos"
              alt="Carlos Silva"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-sm font-medium text-text-primary hidden md:block">
              Carlos Silva
            </span>
            <ChevronDown
              size={20}
              className={`text-text-secondary transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-card-border py-2 z-50">
              {/* Info do usuário */}
              <div className="px-4 py-3 border-b border-card-border">
                <p className="text-sm font-medium text-text-primary">
                  Carlos Silva
                </p>
                <p className="text-xs text-text-secondary">
                  carlos.silva@financasemdia.com
                </p>
              </div>

              {/* Editar Usuário */}
              <button
                onClick={() => handleNavigate("/users?edit=self")}
                className="flex items-center gap-3 w-full px-4 py-3 text-sm text-text-primary hover:bg-gray-50 transition-colors"
              >
                <UserPen size={18} className="text-text-secondary" />
                Editar Usuário
              </button>

              {/* Listar Usuários (apenas Admin) */}
              {isAdmin && (
                <button
                  onClick={() => handleNavigate("/users")}
                  className="flex items-center gap-3 w-full px-4 py-3 text-sm text-text-primary hover:bg-gray-50 transition-colors"
                >
                  <Users size={18} className="text-text-secondary" />
                  Listar Usuários
                </button>
              )}

              {/* Sair */}
              <div className="border-t border-card-border mt-1">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut size={18} />
                  Sair
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
