import { Bell, Settings, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Page } from "@/App";

interface DashboardHeaderProps {
  onNavigate: (page: Page) => void;
}

export default function DashboardHeader({ onNavigate }: DashboardHeaderProps) {
  return (
    <header className="flex items-center justify-between gap-4">
      <button
        type="button"
        onClick={() => onNavigate("dashboard")}
        className="flex items-center gap-3"
      >
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 text-xs font-bold text-white shadow-lg">
          CS
        </span>
        <div className="flex flex-col items-start">
          <span className="flex items-center gap-1 text-sm font-semibold text-slate-100">
            CardSync
            <Sparkles className="h-3 w-3 text-blue-400" />
          </span>
          <span className="text-xs text-slate-400">
            Smart digital business card
          </span>
        </div>
      </button>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full border border-slate-700"
        >
          <Bell className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full border border-slate-700"
          onClick={() => onNavigate("settings")}
        >
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}