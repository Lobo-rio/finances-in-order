import { useState } from "react";
import { Calendar } from "lucide-react";
import StatCard from "../components/StatCard";
import ExpensesBarChart from "../components/charts/ExpensesBarChart";
import ExpensesPieChart from "../components/charts/ExpensesPieChart";
import MonthlyEvolutionLineChart from "../components/charts/MonthlyEvolutionLineChart";

export default function Dashboard() {
  const [selectedMonth, setSelectedMonth] = useState("Outubro 2023");

  const months = [
    "Janeiro 2023",
    "Fevereiro 2023",
    "Março 2023",
    "Abril 2023",
    "Maio 2023",
    "Junho 2023",
    "Julho 2023",
    "Agosto 2023",
    "Setembro 2023",
    "Outubro 2023",
    "Novembro 2023",
    "Dezembro 2023",
    "Janeiro 2024",
    "Fevereiro 2024",
    "Março 2024",
    "Abril 2024",
    "Maio 2024",
    "Junho 2024",
    "Julho 2024",
    "Agosto 2024",
    "Setembro 2024",
    "Outubro 2024",
    "Novembro 2024",
    "Dezembro 2024",
    "Janeiro 2025",
    "Fevereiro 2025",
    "Março 2025",
    "Abril 2025",
    "Maio 2025",
    "Junho 2025",
    "Julho 2025",
    "Agosto 2025",
    "Setembro 2025",
    "Outubro 2025",
    "Novembro 2025",
    "Dezembro 2025",
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Visão Geral</h1>
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-card-border bg-white">
          <Calendar size={20} className="text-text-secondary" />
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="bg-transparent text-sm font-medium text-text-primary focus:outline-none cursor-pointer"
          >
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total do Mês"
          value="R$ 12.450,00"
          change="+5.2%"
          changeType="positive"
        />
        <StatCard
          title="Média Diária"
          value="R$ 401,61"
          change="+1.1%"
          changeType="positive"
        />
        <StatCard
          title="Maior Gasto"
          value="R$ 2.500,00"
          change="-2.4%"
          changeType="negative"
          description="Aluguel"
        />
        <StatCard
          title="Lançamentos"
          value="145 Transações"
          change="+8%"
          changeType="positive"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <ExpensesBarChart />
        </div>
        <div className="lg:col-span-2">
          <ExpensesPieChart />
        </div>
      </div>
      <div>
        <MonthlyEvolutionLineChart />
      </div>
    </div>
  );
}
