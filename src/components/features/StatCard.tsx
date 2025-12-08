import { TrendingUp } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
}

export default function StatCard({ icon, label, value, trend }: StatCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
          {icon}
        </div>
        <div className="flex items-center gap-1 text-sm text-green-600">
          <TrendingUp className="w-4 h-4" />
          <span>{trend}</span>
        </div>
      </div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
