import { Search, Bell, ChevronDown } from "lucide-react";

export default function Header() {
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
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40?u=carlos"
            alt="Carlos Silva"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-sm font-medium text-text-primary hidden md:block">
            Carlos Silva
          </span>
          <ChevronDown size={20} className="text-text-secondary" />
        </div>
      </div>
    </header>
  );
}
