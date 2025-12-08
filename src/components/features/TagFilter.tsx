import { Plus, Tag } from 'lucide-react';

const availableTags = [
  'Client',
  'Hot Lead',
  'Warm Lead',
  'Cold Lead',
  'Partner',
  'LinkedIn',
  'Conference',
  'Referral',
];

interface TagFilterProps {
  selectedTags: string[];
  onToggleTag: (tag: string) => void;
}

export default function TagFilter({ selectedTags, onToggleTag }: TagFilterProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3">
        <Tag className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium">Filter by Tags</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {availableTags.map((tag) => (
          <button
            key={tag}
            onClick={() => onToggleTag(tag)}
            className={`px-3 py-1.5 text-sm rounded-full border transition-all ${
              selectedTags.includes(tag)
                ? 'bg-primary text-white border-primary'
                : 'bg-secondary text-foreground border-border hover:border-primary/50'
            }`}
          >
            {tag}
          </button>
        ))}
        <button className="px-3 py-1.5 text-sm rounded-full border border-dashed border-border hover:border-primary/50 text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
          <Plus className="w-3 h-3" />
          Add Tag
        </button>
      </div>
    </div>
  );
}
