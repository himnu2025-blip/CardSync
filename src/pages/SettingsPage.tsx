import { ArrowLeft, User, CreditCard, LogOut, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Page } from '@/App';
import DashboardHeader from '@/components/layout/DashboardHeader';
import MobileNav from '@/components/layout/MobileNav';

interface SettingsPageProps {
  onNavigate: (page: Page) => void;
  onLogout: () => void;
}

export default function SettingsPage({ onNavigate, onLogout }: SettingsPageProps) {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <DashboardHeader onNavigate={onNavigate} />

      <main className="container-custom py-6 max-w-2xl">
        <Button
          variant="ghost"
          onClick={() => onNavigate('dashboard')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>

        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Settings</h1>

        <div className="space-y-3">
          <SettingItem
            icon={<User className="w-5 h-5" />}
            label="Profile Settings"
            description="Update your personal information"
          />
          <SettingItem
            icon={<CreditCard className="w-5 h-5" />}
            label="Subscription"
            description="Manage your plan and billing"
          />
          <SettingItem
            icon={<HelpCircle className="w-5 h-5" />}
            label="Support"
            description="Get help and contact us"
          />
          <button
            onClick={onLogout}
            className="w-full p-4 rounded-xl bg-card border border-border hover:border-destructive/50 hover:bg-destructive/5 transition-all text-left group"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-destructive/10 text-destructive flex items-center justify-center">
                <LogOut className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-destructive">Logout</h3>
                <p className="text-sm text-muted-foreground">Sign out of your account</p>
              </div>
            </div>
          </button>
        </div>
      </main>

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
    <button className="w-full p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all text-left group">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold">{label}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </button>
  );
}
