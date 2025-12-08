const templates = [
  { id: 1, name: 'Modern Blue', gradient: 'from-blue-500 to-cyan-500' },
  { id: 2, name: 'Purple Dream', gradient: 'from-purple-500 to-pink-500' },
  { id: 3, name: 'Sunset', gradient: 'from-orange-500 to-red-500' },
  { id: 4, name: 'Forest', gradient: 'from-green-500 to-teal-500' },
  { id: 5, name: 'Midnight', gradient: 'from-indigo-900 to-purple-900' },
];

export default function SampleCardCarousel() {
  return (
    <div className="overflow-x-auto pb-4 -mx-4 px-4">
      <div className="flex gap-4 min-w-max">
        {templates.map((template) => (
          <div
            key={template.id}
            className="w-72 h-44 rounded-2xl bg-gradient-to-br shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between p-6 text-white shrink-0"
            style={{
              backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
            }}
          >
            <div className={`bg-gradient-to-br ${template.gradient} absolute inset-0 rounded-2xl`}></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-3"></div>
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-sm text-white/90">Product Designer</p>
            </div>
            <div className="relative z-10">
              <p className="text-xs text-white/80">{template.name} Template</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
