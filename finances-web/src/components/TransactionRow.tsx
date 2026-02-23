
import { MoreHorizontal, Trash2, CheckCircle, Clock } from 'lucide-react';

type Transaction = {
  status: 'Boleto' | 'Pendente';
  date: string;
  description: string;
  category: string;
  value: number;
};

const statusConfig = {
  Boleto: {
    icon: <CheckCircle size={16} className="text-green-500" />,
    bgColor: 'bg-green-50',
    textColor: 'text-green-700',
  },
  Pendente: {
    icon: <Clock size={16} className="text-yellow-500" />,
    bgColor: 'bg-yellow-50',
    textColor: 'text-yellow-700',
  },
};

export default function TransactionRow({ transaction }: { transaction: Transaction }) {
  const { status, date, description, category, value } = transaction;
  const config = statusConfig[status];

  return (
    <tr className="border-b border-card-border last:border-b-0 hover:bg-gray-50">
      <td className="px-4 py-3">
        <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium ${config.bgColor} ${config.textColor}`}>
          {config.icon}
          {status}
        </div>
      </td>
      <td className="px-4 py-3 text-sm text-text-secondary">{date}</td>
      <td className="px-4 py-3 text-sm font-medium text-text-primary">{description}</td>
      <td className="px-4 py-3 text-sm text-text-secondary">{category}</td>
      <td className="px-4 py-3 text-sm font-medium text-right text-text-primary">
        {value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </td>
      <td className="px-4 py-3 text-center">
        <button className="text-text-secondary hover:text-text-primary">
          <MoreHorizontal size={20} />
        </button>
      </td>
    </tr>
  );
}
