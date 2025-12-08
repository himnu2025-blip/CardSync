import { Eye, Share2, Users, Edit, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Page } from '@/App';
import MobileNav from '@/components/layout/MobileNav';
import DashboardHeader from '@/components/layout/DashboardHeader';
import BusinessCardPreview from '@/components/features/BusinessCardPreview';
import StatCard from '@/components/features/StatCard';

interface DashboardPageProps {
  onNavigate: (page: Page) => void;
}

export default function DashboardPage({ onNavigate }: DashboardPageProps) {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <DashboardHeader onNavigate={onNavigate} />

      <main className="container-custom py-6">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Welcome back, Alex!</h1>
          <p className="text-muted-foreground">Manage your digital business card and contacts</p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <StatCard
            icon={<Eye className="w-5 h-5" />}
            label="Card Views"
            value="1,284"
            trend="+12%"
          />
          <StatCard
            icon={<Share2 className="w-5 h-5" />}
            label="Shares"
            value="342"
            trend="+8%"
          />
          <StatCard
            icon={<Users className="w-5 h-5" />}
            label="Contacts"
            value="87"
            trend="+15%"
          />
        </div>

        {/* Card Preview Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Your Business Card</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onNavigate('card-builder')}
              >
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </Button>
            </div>
            <BusinessCardPreview />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <QuickActionButton
                icon={<Edit className="w-5 h-5" />}
                label="Edit Card"
                description="Customize your business card"
                onClick={() => onNavigate('card-builder')}
              />
              <QuickActionButton
                icon={<QrCode className="w-5 h-5" />}
                label="View QR Code"
                description="Share your card via QR"
                onClick={() => onNavigate('public-card')}
              />
              <QuickActionButton
                icon={<Users className="w-5 h-5" />}
                label="My CRM"
                description="Manage your contacts"
                onClick={() => onNavigate('crm')}
              />
              <QuickActionButton
                icon={<Share2 className="w-5 h-5" />}
                label="Share Card"
                description="Send via email or messaging"
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </main>

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

function QuickActionButton({ icon, label, description, onClick }: QuickActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all text-left group"
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
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
