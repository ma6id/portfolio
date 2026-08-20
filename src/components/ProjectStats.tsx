import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const progressData = [
  { t: "0%", Scholaria: 0, Lunora: 0, Samumli: 0 },
  { t: "25%", Scholaria: 22, Lunora: 8, Samumli: 12 },
  { t: "50%", Scholaria: 27, Lunora: 16, Samumli: 28 },
  { t: "75%", Scholaria: 28, Lunora: 25, Samumli: 52 },
  { t: "100%", Scholaria: 28, Lunora: 34, Samumli: 79 },
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
      <ChartCard title="Progression de l'avancement (%)">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={progressData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(56,189,248,0.08)" />
            <XAxis dataKey="t" stroke="#8ea3b8" fontSize={11} label={{ value: "Temps écoulé (relatif)", position: "insideBottom", offset: -5, fontSize: 10, fill: "#8ea3b8" }} />
            <YAxis stroke="#8ea3b8" fontSize={11} />
            <Tooltip contentStyle={{ background: "#0d1424", border: "1px solid rgba(34,211,238,0.2)", borderRadius: 8 }} />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            <Line type="monotone" dataKey="Scholaria" stroke="#22d3ee" strokeWidth={3} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="Lunora" stroke="#5b9bf7" strokeWidth={3} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="Samumli" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} />
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
