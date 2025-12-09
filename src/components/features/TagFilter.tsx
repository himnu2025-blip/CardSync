import { Plus, Tag } from "lucide-react";

const availableTags = [
  "Client",
  "Hot Lead",
  "Warm Lead",
  "Cold Lead",
  "Partner",
  "LinkedIn",
  "Conference",
  "Referral",
];

interface TagFilterProps {
  selectedTags: string[];
  onToggleTag: (tag: string) => void;
}

export default function TagFilter({
  selectedTags,
  onToggleTag,
}: TagFilterProps) {
  return (
    <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-950/80 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-medium text-slate-100">
          <Tag className="h-4 w-4 text-slate-400" />
          <span>Filter by Tags</span>
        </div>
        <button
          type="button"
          className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200"
        >
          <Plus className="h-3 w-3" />
          Add Tag
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {availableTags.map((tag) => {
          const active = selectedTags.includes(tag);
          return (
            <button
              key={tag}
              type="button"
              onClick={() => onToggleTag(tag)}
              className={`px-3 py-1.5 text-xs rounded-full border transition-all ${
                active
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-slate-900 text-slate-200 border-slate-700 hover:border-blue-500/60"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
}