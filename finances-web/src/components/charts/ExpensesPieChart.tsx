import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Alimentação", value: 25 },
  { name: "Moradia", value: 30 },
  { name: "Transporte", value: 15 },
  { name: "Lazer", value: 10 },
  { name: "Saúde", value: 10 },
  { name: "Outros", value: 10 },
];

const COLORS = [
  "#00D97E",
  "#20C997",
  "#5087D4",
  "#6B7EBB",
  "#9DB4D4",
  "#CBD5E1",
];

const CustomLegend = (props: any) => {
  const { payload } = props;
  return (
    <ul className="flex flex-col gap-2">
      {payload.map((entry: any, index: number) => (
        <li
          key={`item-${index}`}
          className="flex items-center text-sm text-text-secondary"
        >
          <span
            className="w-3 h-3 rounded-full mr-2"
            style={{ backgroundColor: entry.color }}
          ></span>
          {entry.value} ({entry.payload.value}%)
        </li>
      ))}
    </ul>
  );
};

export default function ExpensesPieChart() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-card border border-card-border">
      <h3 className="text-lg font-bold text-text-primary mb-4">
        Pizza despesas por tipo
      </h3>
      <div style={{ width: "100%", height: 300 }} className="flex items-center">
        <ResponsiveContainer width="50%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="w-1/2">
          <CustomLegend
            payload={data.map((d, i) => ({
              value: d.name,
              color: COLORS[i],
              payload: d,
            }))}
          />
        </div>
      </div>
    </div>
  );
}
