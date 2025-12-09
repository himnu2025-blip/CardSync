import {
  LayoutDashboard,
  Users,
  CreditCard,
  Settings as SettingsIcon,
} from "lucide-react";
import { Page } from "@/App";

interface MobileNavProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function MobileNav({ currentPage, onNavigate }: MobileNavProps) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-md items-center justify-around px-4 py-2">
        <NavItem
          icon={<LayoutDashboard className="h-5 w-5" />}
          label="Dashboard"
          active={currentPage === "dashboard"}
          onClick={() => onNavigate("dashboard")}
        />
        <NavItem
          icon={<CreditCard className="h-5 w-5" />}
          label="Card"
          active={currentPage === "card-builder"}
          onClick={() => onNavigate("card-builder")}
        />
        <NavItem
          icon={<Users className="h-5 w-5" />}
          label="CRM"
          active={currentPage === "crm"}
          onClick={() => onNavigate("crm")}
        />
        <NavItem
          icon={<SettingsIcon className="h-5 w-5" />}
          label="Settings"
          active={currentPage === "settings"}
          onClick={() => onNavigate("settings")}
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
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center gap-1 text-xs ${
        active ? "text-blue-400" : "text-slate-400"
      }`}
    >
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full ${
          active ? "bg-blue-500/20" : "bg-slate-900"
        }`}
      >
        {icon}
      </span>
      <span>{label}</span>
    </button>
  );
}