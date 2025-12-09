interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
}

export default function StatCard({
  icon,
  label,
  value,
  trend,
}: StatCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-slate-800 bg-slate-950/80 p-4">
      <div className="flex items-center justify-between">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-slate-200">
          {icon}
        </span>
        <span className="text-xs font-medium text-emerald-400">
          {trend}
        </span>
      </div>
      <div>
        <div className="text-lg font-semibold text-slate-100">
          {value}
        </div>
        <div className="text-xs text-slate-400">{label}</div>
      </div>
    </div>
  );
}