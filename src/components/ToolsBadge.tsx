import ToolCard from "./ToolCard";
import { Wrench } from "lucide-react";

type ToolsBadgeProps = {
  tools: string[];
  label?: string;
};

export default function ToolsBadge({ tools, label = "Outils" }: ToolsBadgeProps) {
  if (!tools?.length) return null;
  return (
    <div className="mt-6">
      <p className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-mist-500 mb-2.5">
        <Wrench size={12} />
        {label}
      </p>
      <div className="flex flex-wrap gap-3">
        {tools.map((t) => (
          <ToolCard key={t} name={t} />
        ))}
      </div>
    </div>
  );
}
