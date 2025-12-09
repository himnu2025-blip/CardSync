import { Eye, Share2, Users, Edit, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Page } from "@/App";
import MobileNav from "@/components/layout/MobileNav";
import DashboardHeader from "@/components/layout/DashboardHeader";
import BusinessCardPreview from "@/components/features/BusinessCardPreview";
import StatCard from "@/components/features/StatCard";

interface DashboardPageProps {
  onNavigate: (page: Page) => void;
}

export default function DashboardPage({ onNavigate }: DashboardPageProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 pb-24 pt-4">
        <DashboardHeader onNavigate={onNavigate} />

        <section className="mt-6 space-y-2">
          <h1 className="text-xl font-semibold">Welcome back, Alex!</h1>
          <p className="text-xs text-slate-400">
            Manage your digital business card and contacts.
          </p>
        </section>

        {/* Stats */}
        <section className="mt-6 grid gap-4 md:grid-cols-3">
          <StatCard
            icon={<Eye className="h-4 w-4" />}
            label="Card Views"
            value="1,284"
            trend="+12%"
          />
          <StatCard
            icon={<Share2 className="h-4 w-4" />}
            label="Shares"
            value="342"
            trend="+8%"
          />
          <StatCard
            icon={<Users className="h-4 w-4" />}
            label="Contacts"
            value="87"
            trend="+15%"
          />
        </section>

        {/* Card and quick actions */}
        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold">Your Business Card</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onNavigate("card-builder")}
                className="h-8 gap-1 rounded-full border-slate-700 text-xs"
              >
                <Edit className="h-3.5 w-3.5" />
                Edit
              </Button>
            </div>
            <BusinessCardPreview />
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold">Quick Actions</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <QuickActionButton
                icon={<Edit className="h-4 w-4" />}
                label="Edit Card"
                description="Customize your business card"
                onClick={() => onNavigate("card-builder")}
              />
              <QuickActionButton
                icon={<QrCode className="h-4 w-4" />}
                label="View QR Code"
                description="Share your card via QR"
                onClick={() => onNavigate("public-card")}
              />
              <QuickActionButton
                icon={<Users className="h-4 w-4" />}
                label="My CRM"
                description="Manage your contacts"
                onClick={() => onNavigate("crm")}
              />
              <QuickActionButton
                icon={<Share2 className="h-4 w-4" />}
                label="Share Card"
                description="Send via email or messaging"
                onClick={() => {}}
              />
            </div>
          </div>
        </section>
      </div>

      <MobileNav currentPage="dashboard" onNavigate={onNavigate} />
    </div>
  );
}

interface QuickActionButtonProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  onClick: () => void;
}

function QuickActionButton({
  icon,
  label,
  description,
  onClick,
}: QuickActionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col items-start gap-2 rounded-xl border border-slate-800 bg-slate-950/80 p-4 text-left hover:border-blue-500/60 hover:bg-slate-900/80 transition-colors"
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-slate-100">
        {icon}
      </span>
      <div>
        <h3 className="text-sm font-semibold text-slate-100">{label}</h3>
        <p className="text-xs text-slate-400">{description}</p>
      </div>
    </button>
  );
}