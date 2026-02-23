
import { X, AlertTriangle } from 'lucide-react';

type DeleteConfirmationModalProps = {
  categoryName: string;
  onClose: () => void;
  onConfirm: () => void;
};

export default function DeleteConfirmationModal({ categoryName, onClose, onConfirm }: DeleteConfirmationModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-text-primary">Confirmação de Exclusão de Categoria</h2>
          <button onClick={onClose} className="text-text-secondary hover:text-text-primary">
            <X size={24} />
          </button>
        </div>
        <div className="text-center">
            <div className="mx-auto bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <AlertTriangle size={32} className="text-red-500" />
            </div>
            <p className="text-text-secondary mb-6">
                Esta ação é permanente e não pode ser desfeita. Se a categoria tiver transações ou orçamentos vinculados, ela não poderá ser excluída. Deseja prosseguir com a exclusão da categoria "{categoryName}"?
            </p>
            <div className="flex justify-center gap-4">
                <button onClick={onClose} className="px-6 py-2 rounded-lg border border-card-border text-text-secondary font-bold hover:bg-gray-100">
                    Cancelar
                </button>
                <button onClick={onConfirm} className="px-6 py-2 rounded-lg bg-red-500 text-white font-bold hover:bg-red-600">
                    Confirmar Exclusão
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}
