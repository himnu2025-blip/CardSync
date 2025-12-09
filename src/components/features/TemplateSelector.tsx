import BusinessCardPreview from "./BusinessCardPreview";

interface TemplateSelectorProps {
  onSelectTemplate: (templateId: string) => void;
}

const templates = [
  { id: "modern-blue", name: "Modern Blue" },
  { id: "minimal-white", name: "Minimal White" },
  { id: "luxury-dark", name: "Luxury Dark" },
  { id: "gradient-glow", name: "Gradient Glow" },
];

export default function TemplateSelector({
  onSelectTemplate,
}: TemplateSelectorProps) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-300">
        Pick a starting template. You can customize colors, text and layout
        later.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {templates.map((tpl) => (
          <button
            key={tpl.id}
            type="button"
            onClick={() => onSelectTemplate(tpl.id)}
            className="group flex flex-col gap-2 rounded-xl border border-slate-800 bg-slate-950/80 p-3 text-left hover:border-blue-500/70 hover:bg-slate-900/90 transition-colors"
          >
            <div className="h-32 w-full rounded-lg bg-gradient-to-br from-slate-800 to-slate-900">
              <BusinessCardPreview />
            </div>
            <div>
              <div className="text-sm font-medium text-slate-100">
                {tpl.name}
              </div>
              <div className="text-xs text-slate-400">
                Professional layout optimized for quick sharing
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}