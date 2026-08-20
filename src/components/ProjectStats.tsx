import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const completionData = [
  { name: "Scholaria", value: 28 },
  { name: "Lunora", value: 34 },
  { name: "Samumli", value: 79 },
];

const successData = [
  { name: "Scholaria", value: 20 },
  { name: "Lunora", value: 81 },
  { name: "Samumli", value: 100 },
];

const timeData = [
  { name: "Scholaria (2 jours)", value: 2 },
  { name: "Lunora (3 mois)", value: 90 },
  { name: "Samumli (1 an)", value: 365 },
];

const COLORS = ["#22d3ee", "#5b9bf7", "#3b82f6"];

function ChartCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass rounded-2xl p-5">
      <p className="eyebrow mb-4">{title}</p>
      <div className="h-56">{children}</div>
    </div>
  );
}

export default function ProjectStats() {
  return (
    <div className="grid sm:grid-cols-2 gap-5 mt-6">
      <ChartCard title="Taux d'achèvement (%)">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={completionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(56,189,248,0.08)" />
            <XAxis dataKey="name" stroke="#8ea3b8" fontSize={11} />
            <YAxis stroke="#8ea3b8" fontSize={11} />
            <Tooltip contentStyle={{ background: "#0d1424", border: "1px solid rgba(34,211,238,0.2)", borderRadius: 8 }} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#22d3ee"
              strokeWidth={3}
              dot={{ r: 5, fill: "#22d3ee" }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Contribution personnelle à l'équipe (%)">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={successData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(56,189,248,0.08)" />
            <XAxis dataKey="name" stroke="#8ea3b8" fontSize={11} />
            <YAxis stroke="#8ea3b8" fontSize={11} />
            <Tooltip contentStyle={{ background: "#0d1424", border: "1px solid rgba(34,211,238,0.2)", borderRadius: 8 }} />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {successData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Temps de développement (proportion)">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={timeData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} label>
              {timeData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
            </Pie>
            <Tooltip contentStyle={{ background: "#0d1424", border: "1px solid rgba(34,211,238,0.2)", borderRadius: 8 }} />
            <Legend wrapperStyle={{ fontSize: 11 }} />
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}
