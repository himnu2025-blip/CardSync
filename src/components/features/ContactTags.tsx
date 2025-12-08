import { Plus, X } from 'lucide-react';

const currentTags = ['Client', 'Hot Lead', 'LinkedIn'];

export default function ContactTags() {
  return (
    <div className="flex flex-wrap gap-2">
      {currentTags.map((tag, index) => (
        <div
          key={index}
          className="px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center gap-2 group"
        >
          <span className="text-sm font-medium">{tag}</span>
          <button className="opacity-0 group-hover:opacity-100 transition-opacity">
            <X className="w-3 h-3" />
          </button>
        </div>
      ))}
      <button className="px-3 py-1.5 rounded-full border border-dashed border-border hover:border-primary/50 text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 text-sm">
        <Plus className="w-3 h-3" />
        Add Tag
      </button>
    </div>
  );
}
