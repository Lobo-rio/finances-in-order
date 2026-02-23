import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
  defs,
  linearGradient,
  stop,
} from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Fev", value: 600 },
  { name: "Mar", value: 500 },
  { name: "Abr", value: 800 },
  { name: "Mai", value: 700 },
  { name: "Jun", value: 1000 },
  { name: "Jul", value: 900 },
  { name: "Ago", value: 1100 },
  { name: "Set", value: 1000 },
  { name: "Out", value: 1200, highlighted: true },
  { name: "Nov", value: 1300, highlighted: true },
  { name: "Dez", value: 1200 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-sidebar-dark text-white p-2 rounded-md text-sm">
        <p>{`${label}: R$ ${payload[0].value},00`}</p>
      </div>
    );
  }
  return null;
};

export default function MonthlyEvolutionLineChart() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-card border border-card-border">
      <h3 className="text-lg font-bold text-text-primary mb-4">
        Linha evolução mensal
      </h3>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00D97E" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#00D97E" stopOpacity={0} />
              </linearGradient>
            </defs>
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
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#00D97E"
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 8,
                fill: "#00D97E",
                stroke: "#fff",
                strokeWidth: 2,
              }}
              fill="url(#colorValue)"
            />
            <ReferenceDot
              x="Out"
              y={1200}
              r={6}
              fill="#00D97E"
              stroke="#fff"
              strokeWidth={2}
            />
            <ReferenceDot
              x="Nov"
              y={1300}
              r={6}
              fill="#00D97E"
              stroke="#fff"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
