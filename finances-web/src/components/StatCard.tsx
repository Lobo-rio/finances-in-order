
import { ArrowUp, ArrowDown } from 'lucide-react';

type StatCardProps = {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  description?: string;
};

export default function StatCard({ title, value, change, changeType, description }: StatCardProps) {
  const isPositive = changeType === 'positive';

  return (
    <div className="bg-white p-6 rounded-2xl shadow-card border border-card-border">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-text-secondary font-medium">{title}</p>
        <div className={`flex items-center text-xs font-bold ${isPositive ? 'text-positive' : 'text-negative'}`}>
          {isPositive ? <ArrowUp size={14} className="mr-1" /> : <ArrowDown size={14} className="mr-1" />}
          {change}
        </div>
      </div>
      <h2 className="text-3xl font-bold text-text-primary">{value}</h2>
      {description && <p className="text-xs text-text-secondary mt-1">{description}</p>}
    </div>
  );
}
