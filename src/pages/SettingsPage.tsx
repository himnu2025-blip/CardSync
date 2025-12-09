import { ArrowLeft, User, CreditCard, LogOut, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Page } from "@/App";
import DashboardHeader from "@/components/layout/DashboardHeader";
import MobileNav from "@/components/layout/MobileNav";
import { useTheme } from "@/contexts/ThemeContext";

interface SettingsPageProps {
  onNavigate: (page: Page) => void;
  onLogout: () => void;
}

export default function SettingsPage({
  onNavigate,
  onLogout,
}: SettingsPageProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const rootClass =
    "min-h-screen " +
    (isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900");

  return (
    <div className={rootClass}>
      <div className="mx-auto max-w-6xl px-4 pb-24 pt-4">
        <DashboardHeader onNavigate={onNavigate} />

        <button
          type="button"
          onClick={() => onNavigate("dashboard")}
          className="mt-4 mb-4 inline-flex items-center gap-2 text-xs text-slate-400 hover:text-slate-100"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Dashboard
        </button>

        <section className="space-y-2">
          <h1 className="text-lg font-semibold">Settings</h1>
          <p className="text-xs text-slate-400">
            Manage your account and preferences.
          </p>
        </section>

        <section className="mt-6 space-y-4">
          <SettingItem
            icon={<User className="h-4 w-4" />}
            label="Profile Settings"
            description="Update your personal information"
          />
          <SettingItem
            icon={<CreditCard className="h-4 w-4" />}
            label="Subscription"
            description="Manage your plan and billing"
          />
          <SettingItem
            icon={<HelpCircle className="h-4 w-4" />}
            label="Support"
            description="Get help and contact us"
          />
        </section>

        <section className="mt-8 rounded-xl border border-slate-800 bg-slate-950/80 p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                <LogOut className="h-4 w-4 text-red-400" />
                Logout
              </h3>
              <p className="text-xs text-slate-400">
                Sign out of your account on this device.
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-1 rounded-full border-red-500/40 text-xs text-red-400 hover:bg-red-500/10"
              onClick={onLogout}
            >
              Logout
            </Button>
          </div>
        </section>
      </div>

      <MobileNav currentPage="settings" onNavigate={onNavigate} />
    </div>
  );
}

interface SettingItemProps {
  icon: React.ReactNode;
  label: string;
  description: string;
}

function SettingItem({ icon, label, description }: SettingItemProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/80 p-4">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-slate-100">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-semibold text-slate-100">{label}</h3>
        <p className="text-xs text-slate-400">{description}</p>
      </div>
    </div>
  );
}