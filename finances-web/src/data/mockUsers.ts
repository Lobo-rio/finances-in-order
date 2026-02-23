// Tipos de usuário
export type UserRole = "Admin" | "Editor" | "Visualizador";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: "Ativo" | "Inativo";
  joinDate: string;
}

// Usuário logado atualmente (mock)
export const currentUser: User = {
  id: "1",
  name: "Ana Souza",
  email: "ana.souza@financasemdia.com",
  role: "Admin",
  status: "Ativo",
  joinDate: "12/10/2023",
};

// Lista de usuários mockados
export const mockUsers: User[] = [
  {
    id: "1",
    name: "Ana Costa",
    email: "ana.costa@financasemdia.com",
    role: "Admin",
    status: "Ativo",
    joinDate: "12/10/2023",
  },
  {
    id: "2",
    name: "Bruno Lima",
    email: "bruno.lima@financasemdia.com",
    role: "Editor",
    status: "Inativo",
    joinDate: "05/11/2023",
  },
  {
    id: "3",
    name: "Mariana Lopes",
    email: "mariana.lopes@financasemdia.com",
    role: "Editor",
    status: "Ativo",
    joinDate: "20/11/2023",
  },
  {
    id: "4",
    name: "Carlos Silva",
    email: "carlos.silva@financasemdia.com",
    role: "Admin",
    status: "Ativo",
    joinDate: "12/11/2023",
  },
  {
    id: "5",
    name: "Julia Martins",
    email: "julia.martins@financasemdia.com",
    role: "Editor",
    status: "Ativo",
    joinDate: "05/11/2023",
  },
  {
    id: "6",
    name: "Ricardo Oliveira",
    email: "ricardo.oliveira@financasemdia.com",
    role: "Visualizador",
    status: "Ativo",
    joinDate: "13/11/2023",
  },
  {
    id: "7",
    name: "Isabela Santos",
    email: "isabela.santos@financasemdia.com",
    role: "Editor",
    status: "Ativo",
    joinDate: "18/11/2023",
  },
  {
    id: "8",
    name: "Fernando Costa",
    email: "fernando.costa@financasemdia.com",
    role: "Visualizador",
    status: "Inativo",
    joinDate: "08/11/2023",
  },
  {
    id: "9",
    name: "Patricia Alves",
    email: "patricia.alves@financasemdia.com",
    role: "Editor",
    status: "Ativo",
    joinDate: "22/11/2023",
  },
  {
    id: "10",
    name: "Roberto Ferreira",
    email: "roberto.ferreira@financasemdia.com",
    role: "Admin",
    status: "Ativo",
    joinDate: "01/10/2023",
  },
];
