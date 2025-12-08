import { Bell, Settings, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Page } from '@/App';

interface DashboardHeaderProps {
  onNavigate: (page: Page) => void;
}

export default function DashboardHeader({ onNavigate }: DashboardHeaderProps) {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container-custom py-4 flex items-center justify-between">
        <button 
          onClick={() => onNavigate('dashboard')}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold gradient-text hidden sm:inline">CardSync</span>
        </button>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full"></span>
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => onNavigate('settings')}
          >
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
