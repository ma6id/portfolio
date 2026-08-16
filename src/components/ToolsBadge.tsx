import TechChip from "./TechChip";

export default function ToolsBadge({ tools }: { tools: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tools.map((t) => (
        <TechChip key={t} name={t} />
      ))}
    </div>
  );
}
