import { useState, useMemo, useEffect } from "react";
import { Search, MoreHorizontal } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { User, mockUsers, currentUser } from "../data/mockUsers";
import EditUserModal from "../components/EditUserModal";

export default function Users() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [localUsers, setLocalUsers] = useState<User[]>(mockUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const itemsPerPage = 10;

  // Determina se o usuário é admin
  const isAdmin = currentUser.role === "Admin";

  // Abre modal de edição automática se ?edit=self
  useEffect(() => {
    if (searchParams.get("edit") === "self") {
      const selfUser = localUsers.find((u) => u.id === currentUser.id);
      if (selfUser) {
        setSelectedUser(selfUser);
        setIsModalOpen(true);
      }
      // Limpa o parâmetro da URL
      setSearchParams({});
    }
  }, [searchParams]);

  // Filtra os usuários baseado nas permissões
  const visibleUsers = useMemo(() => {
    let users = isAdmin
      ? localUsers
      : localUsers.filter((u) => u.id === currentUser.id);

    // Filtra por termo de busca
    if (searchTerm) {
      users = users.filter(
        (u) =>
          u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          u.email.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    return users;
  }, [isAdmin, localUsers, searchTerm]);

  // Calcula paginação
  const totalPages = Math.ceil(visibleUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedUsers = visibleUsers.slice(startIndex, endIndex);

  const handleEditClick = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleSaveUser = (updatedUser: User) => {
    setLocalUsers(
      localUsers.map((u) => (u.id === updatedUser.id ? updatedUser : u)),
    );
    setIsModalOpen(false);
  };

  const canEditUser = (userId: string): boolean => {
    // Admin pode editar qualquer um, outros só a si mesmos
    return isAdmin || currentUser.id === userId;
  };

  return (
    <div className="p-6 bg-background-light flex-1">
      {/* Cabeçalho com busca e botão */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-text-primary">Usuários</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"
            />
            <input
              type="text"
              placeholder="Pesquisar por nome ou email..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-80 pl-10 pr-4 py-2.5 rounded-full border border-card-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          {isAdmin && (
            <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-white font-bold hover:bg-primary/90 transition-colors">
              Convidar Usuário
            </button>
          )}
        </div>
      </div>

      {/* Tabela de usuários */}
      <div className="bg-white rounded-xl shadow-card border border-card-border overflow-hidden">
        <table className="w-full">
          <thead className="border-b border-card-border">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-text-secondary">
                Usuário
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-text-secondary">
                Função
              </th>
              <th className="px-6 py-4 text-center text-sm font-medium text-text-secondary">
                Status
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-text-secondary">
                Entrou em
              </th>
              <th className="px-6 py-4 w-12"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-card-border">
            {paginatedUsers.length > 0 ? (
              paginatedUsers.map((user) => (
                <tr
                  key={user.id}
                  className="group hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                        <span className="text-sm font-semibold text-gray-600">
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-text-primary">
                          {user.name}
                        </p>
                        <p className="text-sm text-text-secondary">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-4 py-1 rounded-md text-sm font-semibold bg-primary text-white">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <div
                        className={`relative w-12 h-7 rounded-full transition-colors ${
                          user.status === "Ativo" ? "bg-primary" : "bg-gray-300"
                        }`}
                      >
                        <div
                          className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                            user.status === "Ativo"
                              ? "translate-x-5"
                              : "translate-x-0.5"
                          }`}
                        />
                      </div>
                      <span className="text-sm text-text-primary">
                        {user.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-text-secondary text-sm">
                    {user.joinDate}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleEditClick(user)}
                      className="opacity-0 group-hover:opacity-100 mx-auto flex items-center justify-center w-8 h-8 rounded-lg hover:bg-gray-100 text-text-secondary hover:text-text-primary transition-all"
                    >
                      <MoreHorizontal size={20} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-8 text-center text-text-secondary"
                >
                  {searchTerm
                    ? "Nenhum usuário encontrado com os critérios de busca"
                    : "Nenhum usuário disponível para visualizar"}
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Paginação */}
        <div className="p-4 flex justify-end items-center">
          <p className="text-sm text-text-secondary">
            {currentPage} de {totalPages} (Total {visibleUsers.length} usuários)
          </p>
        </div>
      </div>

      {/* Modal de Edição */}
      <EditUserModal
        isOpen={isModalOpen}
        user={selectedUser}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedUser(null);
        }}
        onSave={handleSaveUser}
        canEdit={selectedUser ? canEditUser(selectedUser.id) : false}
      />
    </div>
  );
}
