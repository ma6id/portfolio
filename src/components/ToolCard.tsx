import { useState } from "react";
import { Code2 } from "lucide-react";
import { getTechIconUrl } from "../lib/techIcons";

export default function ToolCard({ name }: { name: string }) {
  const iconUrl = getTechIconUrl(name);
  const [failed, setFailed] = useState(false);

  return (
    <div className="glass glass-hover rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 min-w-[9rem]">
      {iconUrl && !failed ? (
        <img
          src={iconUrl}
          alt=""
          aria-hidden="true"
          className="w-7 h-7 rounded-md object-cover shrink-0"
          onError={() => setFailed(true)}
        />
      ) : (
        <Code2 size={20} className="text-mist-500 shrink-0" aria-hidden="true" />
      )}
      <span className="text-sm font-medium text-mist-100">{name}</span>
    </div>
  );
}
