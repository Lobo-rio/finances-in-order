import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Jan", value: 4500, color: "#00D97E" },
  { name: "Fev", value: 5500, color: "#20C997" },
  { name: "Mar", value: 7200, color: "#00D97E" },
  { name: "Abr", value: 8500, color: "#20C997" },
  { name: "Mai", value: 3800, color: "#5087D4" },
  { name: "Jun", value: 5200, color: "#20C997" },
  { name: "Jul", value: 8000, color: "#00D97E" },
  { name: "Ago", value: 6500, color: "#5087D4" },
  { name: "Set", value: 6800, color: "#20C997" },
  { name: "Out", value: 9200, color: "#00D97E" },
  { name: "Nov", value: 6800, color: "#5087D4" },
  { name: "Dez", value: 7400, color: "#5087D4" },
];

export default function ExpensesBarChart() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-card border border-card-border">
      <h3 className="text-lg font-bold text-text-primary mb-4">
        Barra despesas por mês
      </h3>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              tick={{ fill: "#718096", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#718096", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              cursor={{ fill: "rgba(0, 217, 126, 0.1)" }}
              contentStyle={{
                background: "#fff",
                border: "1px solid #E2E8F0",
                borderRadius: "8px",
              }}
            />
            <Bar dataKey="value" fill="#00D97E" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
