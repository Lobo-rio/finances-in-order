import {
  Home,
  ArrowLeftRight,
  BarChart3,
  Wallet,
  Settings,
} from "lucide-react";

const NavLink = ({
  icon,
  children,
  active = false,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  active?: boolean;
}) => (
  <a
    href="#"
    className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
      active
        ? "bg-slate-700/50 text-white"
        : "text-slate-400 hover:bg-slate-700/30 hover:text-slate-200"
    }`}
  >
    {icon}
    <span className="ml-3">{children}</span>
  </a>
);

const Logo = () => (
  <div className="flex items-center gap-2 px-4 mb-8">
    <div className="bg-primary p-2 rounded-lg">
      <BarChart3 className="text-slate-800" size={20} />
    </div>
    <h1 className="text-white text-xl font-bold">FinançasEmDia</h1>
  </div>
);

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-800 text-white flex flex-col p-4">
      <Logo />
      <nav className="flex flex-col gap-2">
        <NavLink icon={<Home size={20} />} active>
          Visão Geral
        </NavLink>
        <NavLink icon={<ArrowLeftRight size={20} />}>Transações</NavLink>
        <NavLink icon={<BarChart3 size={20} />}>Relatórios</NavLink>
        <NavLink icon={<Wallet size={20} />}>Contas</NavLink>
        <NavLink icon={<Settings size={20} />}>Configurações</NavLink>
      </nav>
    </aside>
  );
}
