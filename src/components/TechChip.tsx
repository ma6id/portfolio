import { useState } from "react";
import { Code2 } from "lucide-react";
import { getTechIconUrl } from "../lib/techIcons";

export default function TechChip({ name }: { name: string }) {
  const iconUrl = getTechIconUrl(name);
  const [failed, setFailed] = useState(false);

  return (
    <span className="chip inline-flex items-center gap-1.5">
      {iconUrl && !failed ? (
        <img
          src={iconUrl}
          alt=""
          aria-hidden="true"
          className="w-3.5 h-3.5 opacity-90"
          onError={() => setFailed(true)}
        />
      ) : (
        <Code2 size={12} className="text-mist-500" aria-hidden="true" />
      )}
      {name}
    </span>
  );
}
