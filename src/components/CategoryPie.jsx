import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Food", value: 500 },
  { name: "Rent", value: 1200 },
  { name: "Transport", value: 300 },
  { name: "Shopping", value: 400 },
  { name: "Other", value: 200 },
];

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

export default function CategoryPie() {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Category Breakdown</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={90}
            innerRadius={50}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
