
import { useState } from 'react';
import { Search, Plus, ShoppingCart, Home, Car, Heart, GraduationCap, Activity, Briefcase, Settings as SettingsIcon } from 'lucide-react';
import CategoryCard from '../components/CategoryCard';
import DeleteConfirmationModal from '../components/DeleteConfirmationModal';

const categories = [
  { name: 'Compras', icon: <ShoppingCart /> },
  { name: 'Moradia', icon: <Home />, inUse: true },
  { name: 'Transporte', icon: <Car /> },
  { name: 'Saúde', icon: <Heart /> },
  { name: 'Educação', icon: <GraduationCap /> },
  { name: 'Lazer', icon: <Activity /> },
  { name: 'Investimentos', icon: <Briefcase /> },
  { name: 'Outros', icon: <SettingsIcon /> },
];

export default function Settings() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleDeleteClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    console.log(`Deleting ${selectedCategory}`);
    setShowDeleteModal(false);
  };

  return (
    <div className="p-6 bg-background-light flex-1">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Categorias</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
            <input type="text" placeholder="Pesquisar categorias..." className="w-full pl-10 pr-4 py-2 rounded-lg border border-card-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-sidebar-dark font-bold hover:bg-primary/90">
            <Plus size={16} />
            Nova Categoria
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map(category => (
          <CategoryCard 
            key={category.name}
            name={category.name}
            icon={category.icon}
            inUse={category.inUse}
            onEdit={() => console.log(`Editing ${category.name}`)}
            onDelete={() => handleDeleteClick(category.name)}
          />
        ))}
      </div>

      {showDeleteModal && (
        <DeleteConfirmationModal 
          categoryName={selectedCategory}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
}
