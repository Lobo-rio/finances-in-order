
import { useState } from 'react';
import { Search, Calendar, ChevronDown } from 'lucide-react';
import TransactionRow from '../components/TransactionRow';
import FilterPill from '../components/FilterPill';

const mockTransactions = [
  { status: 'Boleto', date: '15/03/2024', description: 'Uber to Client Meeting', category: 'Transporte', value: 45.20 },
  { status: 'Pendente', date: '14/03/2024', description: 'Team Lunch at The Grill', category: 'Alimentação', value: 150.00 },
  { status: 'Boleto', date: '14/03/2024', description: 'Uber to Client Meeting', category: 'Alimentação', value: 150.00 },
  { status: 'Pendente', date: '12/03/2024', description: 'Uber to Client Meeting', category: 'Transporte', value: 150.00 },
  { status: 'Boleto', date: '12/03/2024', description: 'Clork Driving', category: 'Alimentação', value: 200.00 },
  { status: 'Pendente', date: '12/03/2024', description: 'Meet up', category: 'Alimentação', value: 150.00 },
  { status: 'Boleto', date: '12/03/2024', description: 'Hall suport', category: 'Transporte', value: 150.00 },
  { status: 'Pendente', date: '15/03/2024', description: 'Uber to Client Meeting', category: 'Alimentação', value: 145.00 },
  { status: 'Boleto', date: '15/03/2024', description: 'Uber to Client Meeting', category: 'Transporte', value: 1200.00 },
  { status: 'Pendente', date: '14/03/2024', description: 'Clork Driving', category: 'Alimentação', value: 150.00 },
  { status: 'Boleto', date: '14/03/2024', description: 'Team Lunch at The Grill', category: 'Alimentação', value: 150.00 },
];

export default function Transactions() {
  const [filters, setFilters] = useState(['Alimentação', 'Transporte']);

  const removeFilter = (filterToRemove: string) => {
    setFilters(filters.filter(f => f !== filterToRemove));
  };

  return (
    <div className="p-6 bg-background-light flex-1">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Extrato Geral</h1>
        <p className="text-sm text-text-secondary">Spreadsheet View</p>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-card border border-card-border mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-xs">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
              <input type="text" placeholder="Buscar despesas..." className="w-full pl-10 pr-4 py-2 rounded-lg border border-card-border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-text-secondary">Categoria:</span>
              <div className="flex items-center gap-2">
                {filters.map(filter => (
                  <FilterPill key={filter} label={filter} onRemove={() => removeFilter(filter)} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-card-border text-sm font-medium text-text-primary hover:bg-gray-50">
              <Calendar size={16} />
              <span>01/03/2024 - 31/03/2024</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-card border border-card-border overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-card-border">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-bold text-text-secondary uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-text-secondary uppercase tracking-wider">Data</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-text-secondary uppercase tracking-wider">Descrição</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-text-secondary uppercase tracking-wider">Categoria</th>
              <th className="px-4 py-3 text-right text-xs font-bold text-text-secondary uppercase tracking-wider">Valor</th>
              <th className="px-4 py-3 text-center text-xs font-bold text-text-secondary uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-card-border">
            {mockTransactions.map((transaction, index) => (
              <TransactionRow key={index} transaction={transaction} />
            ))}
          </tbody>
        </table>
        <div className="p-4 flex justify-between items-center bg-gray-50 border-t border-card-border">
            <div className="text-sm text-text-secondary">
                Total do Mês: <span className="font-bold text-text-primary">R$ 5.450,00</span>
            </div>
            <div className="text-sm text-text-secondary">
                Total Filtrado: <span className="font-bold text-text-primary">R$ 2.120,00</span>
            </div>
        </div>
      </div>
    </div>
  );
}
