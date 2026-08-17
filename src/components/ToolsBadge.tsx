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
      <p className="flex items-center gap-2 font-display font-semibold text-xl sm:text-2xl text-mist-100 mb-4">
        <Wrench size={20} className="text-accent" />
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
