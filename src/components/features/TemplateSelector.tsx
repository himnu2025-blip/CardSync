const templates = [
  { id: 1, name: 'Modern Blue', gradient: 'from-blue-500 to-cyan-500', layout: 'left' },
  { id: 2, name: 'Purple Dream', gradient: 'from-purple-500 to-pink-500', layout: 'center' },
  { id: 3, name: 'Sunset', gradient: 'from-orange-500 to-red-500', layout: 'left' },
  { id: 4, name: 'Forest', gradient: 'from-green-500 to-teal-500', layout: 'minimal' },
  { id: 5, name: 'Midnight', gradient: 'from-indigo-900 to-purple-900', layout: 'center' },
  { id: 6, name: 'Rose Gold', gradient: 'from-pink-400 to-rose-600', layout: 'left' },
];

interface TemplateSelectorProps {
  onSelectTemplate: (templateId: number) => void;
}

export default function TemplateSelector({ onSelectTemplate }: TemplateSelectorProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map((template) => (
        <button
          key={template.id}
          onClick={() => onSelectTemplate(template.id)}
          className="group relative"
        >
          <div className="relative overflow-hidden rounded-2xl border-2 border-border hover:border-primary transition-all">
            <div className={`aspect-[3/2] bg-gradient-to-br ${template.gradient} p-6 flex flex-col justify-between text-white`}>
              <div className={template.layout === 'center' ? 'text-center mx-auto' : ''}>
                <div className={`w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm mb-3 ${template.layout === 'center' ? 'mx-auto' : ''}`}></div>
                <h3 className="text-lg font-bold">John Doe</h3>
                <p className="text-sm text-white/90">Product Designer</p>
              </div>
              <div className={template.layout === 'center' ? 'text-center' : ''}>
                <div className="text-xs text-white/80">Sample Card</div>
              </div>
            </div>
          </div>
          <div className="mt-2 text-center">
            <h4 className="font-semibold">{template.name}</h4>
            <p className="text-sm text-muted-foreground capitalize">{template.layout} Layout</p>
          </div>
        </button>
      ))}
    </div>
  );
}
