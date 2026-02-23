
import { X } from 'lucide-react';

type FilterPillProps = {
  label: string;
  onRemove: () => void;
};

export default function FilterPill({ label, onRemove }: FilterPillProps) {
  return (
    <div className="flex items-center gap-1.5 bg-primary/10 text-primary text-sm font-medium pl-3 pr-2 py-1 rounded-full">
      <span>{label}</span>
      <button onClick={onRemove} className="hover:bg-primary/20 rounded-full p-0.5">
        <X size={14} />
      </button>
    </div>
  );
}
