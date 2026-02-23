
const mockTransactions = [
  { id: 'T001', user: 'Ana Costa', amount: 45.20, status: 'Completed' },
  { id: 'T002', user: 'Bruno Lima', amount: 150.00, status: 'Pending' },
  { id: 'T003', user: 'Mariana Lopes', amount: 200.00, status: 'Completed' },
  { id: 'T004', user: 'Ana Costa', amount: 145.00, status: 'Completed' },
  { id: 'T005', user: 'Bruno Lima', amount: 1200.00, status: 'Failed' },
];

const statusStyles: { [key: string]: string } = {
    Completed: 'bg-green-100 text-green-700',
    Pending: 'bg-yellow-100 text-yellow-700',
    Failed: 'bg-red-100 text-red-700',
};

export default function RecentTransactionsTable() {
  return (
    <div className="bg-white rounded-2xl shadow-card border border-card-border overflow-hidden">
        <h3 className="text-lg font-bold text-text-primary p-6">Recent Transactions</h3>
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-card-border">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-text-secondary uppercase tracking-wider">Transaction ID</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-text-secondary uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-right text-xs font-bold text-text-secondary uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-center text-xs font-bold text-text-secondary uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-card-border">
            {mockTransactions.map((t) => (
              <tr key={t.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">{t.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{t.user}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-text-primary">{t.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusStyles[t.status]}`}>
                        {t.status}
                    </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}
