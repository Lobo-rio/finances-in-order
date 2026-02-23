import { X } from "lucide-react";
import { User, UserRole } from "../data/mockUsers";
import { useState, useEffect } from "react";

interface EditUserModalProps {
  isOpen: boolean;
  user: User | null;
  onClose: () => void;
  onSave: (user: User) => void;
  canEdit: boolean;
}

export default function EditUserModal({
  isOpen,
  user,
  onClose,
  onSave,
  canEdit,
}: EditUserModalProps) {
  const [formData, setFormData] = useState<User | null>(null);

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  if (!isOpen || !formData) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  const handleToggleStatus = () => {
    if (setFormData && formData) {
      setFormData((prev) =>
        prev
          ? { ...prev, status: prev.status === "Ativo" ? "Inativo" : "Ativo" }
          : null,
      );
    }
  };

  const handleSave = () => {
    if (formData) {
      onSave(formData);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl max-w-xl w-full mx-4 border border-white/50">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-text-primary">
            Editar Usuário
          </h2>
          <button
            onClick={onClose}
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {/* Nome Completo */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Nome Completo
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={!canEdit}
              className={`w-full px-4 py-2 rounded-lg border border-card-border focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                !canEdit
                  ? "bg-gray-100 cursor-not-allowed opacity-60"
                  : "bg-white"
              }`}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={!canEdit}
              className={`w-full px-4 py-2 rounded-lg border border-card-border focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                !canEdit
                  ? "bg-gray-100 cursor-not-allowed opacity-60"
                  : "bg-white"
              }`}
            />
          </div>

          {/* Função */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Função
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              disabled={!canEdit}
              className={`w-full px-4 py-2 rounded-lg border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none ${
                !canEdit
                  ? "bg-gray-100 cursor-not-allowed opacity-60 border-card-border"
                  : "bg-white"
              }`}
            >
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Visualizador">Visualizador</option>
            </select>
          </div>

          {/* Status da Conta */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-3">
              Status da Conta
            </label>
            <button
              onClick={handleToggleStatus}
              disabled={!canEdit}
              className={`flex items-center gap-3 ${!canEdit ? "opacity-60 cursor-not-allowed" : ""}`}
            >
              <div
                className={`relative w-14 h-8 rounded-full transition-colors ${
                  formData.status === "Ativo" ? "bg-primary" : "bg-gray-300"
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform transform ${
                    formData.status === "Ativo"
                      ? "translate-x-6"
                      : "translate-x-0"
                  }`}
                />
              </div>
              <span className="text-sm font-medium text-text-primary">
                {formData.status}
              </span>
            </button>
          </div>
        </div>

        {/* Botões */}
        <div className="flex justify-center gap-6 px-6 py-6">
          <button
            onClick={onClose}
            className="px-6 py-2 text-text-primary font-medium hover:text-text-secondary transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            disabled={!canEdit}
            className={`px-8 py-2.5 rounded-lg font-semibold text-white transition-colors ${
              canEdit
                ? "bg-primary hover:bg-primary/90"
                : "bg-gray-400 cursor-not-allowed opacity-60"
            }`}
          >
            Salvar Alterações
          </button>
        </div>
      </div>
    </div>
  );
}
