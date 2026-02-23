
import { MoreHorizontal, Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';

type CategoryCardProps = {
  icon: React.ReactNode;
  name: string;
  inUse?: boolean;
  onEdit: () => void;
  onDelete: () => void;
};

export default function CategoryCard({ icon, name, inUse, onEdit, onDelete }: CategoryCardProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white p-4 rounded-xl shadow-card border border-card-border flex items-center justify-between relative">
      <div className="flex items-center gap-4">
        <div className="bg-primary/10 p-3 rounded-lg text-primary">
          {icon}
        </div>
        <div>
          <p className="font-bold text-text-primary">{name}</p>
          {inUse && <span className="text-xs bg-sidebar-dark text-white px-2 py-0.5 rounded-full">In Use</span>}
        </div>
      </div>
      <div className="relative">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-text-secondary hover:text-text-primary">
          <MoreHorizontal size={20} />
        </button>
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-card-border z-10">
            <button onClick={() => { onEdit(); setMenuOpen(false); }} className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm text-text-secondary hover:bg-gray-100">
              <Pencil size={14} />
              Editar
            </button>
            <button onClick={() => { onDelete(); setMenuOpen(false); }} className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-gray-100">
              <Trash2 size={14} />
              Excluir
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
