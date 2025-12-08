import { LayoutDashboard, Users, CreditCard, Settings } from 'lucide-react';
import { Page } from '@/App';

interface MobileNavProps {
  currentPage: string;
  onNavigate: (page: Page) => void;
}

export default function MobileNav({ currentPage, onNavigate }: MobileNavProps) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="grid grid-cols-4 gap-1 p-2">
        <NavItem
          icon={<LayoutDashboard className="w-5 h-5" />}
          label="Dashboard"
          active={currentPage === 'dashboard'}
          onClick={() => onNavigate('dashboard')}
        />
        <NavItem
          icon={<CreditCard className="w-5 h-5" />}
          label="Card"
          active={currentPage === 'card-builder'}
          onClick={() => onNavigate('card-builder')}
        />
        <NavItem
          icon={<Users className="w-5 h-5" />}
          label="CRM"
          active={currentPage === 'crm'}
          onClick={() => onNavigate('crm')}
        />
        <NavItem
          icon={<Settings className="w-5 h-5" />}
          label="Settings"
          active={currentPage === 'settings'}
          onClick={() => onNavigate('settings')}
        />
      </div>
    </nav>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

function NavItem({ icon, label, active, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
        active
          ? 'text-primary bg-primary/10'
          : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
      }`}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}
