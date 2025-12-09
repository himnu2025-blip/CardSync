import {
  ArrowLeft,
  Phone,
  Mail,
  MessageCircle,
  Trash2,
  Edit,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Page } from "@/App";
import DashboardHeader from "@/components/layout/DashboardHeader";
import MobileNav from "@/components/layout/MobileNav";
import ContactNotes from "@/components/features/ContactNotes";
import ContactTags from "@/components/features/ContactTags";
import { useTheme } from "@/contexts/ThemeContext";

interface ContactDetailPageProps {
  contactId: string | null;
  onNavigate: (page: Page) => void;
}

export default function ContactDetailPage({
  contactId,
  onNavigate,
}: ContactDetailPageProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const rootClass =
    "min-h-screen " +
    (isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900");

  const name = "Sarah Johnson";

  return (
    <div className={rootClass}>
      <div className="mx-auto max-w-6xl px-4 pb-24 pt-4">
        <DashboardHeader onNavigate={onNavigate} />

        <button
          type="button"
          onClick={() => onNavigate("crm")}
          className="mt-4 mb-4 inline-flex items-center gap-2 text-xs text-slate-400 hover:text-slate-100"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Contacts
        </button>

        <section className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-5 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-base font-semibold text-slate-100">
              SJ
            </div>
            <div>
              <h1 className="text-base font-semibold text-slate-100">
                {name}
              </h1>
              <p className="text-xs text-slate-400">
                Product Manager at Tech Corp
              </p>
              <p className="mt-1 text-[11px] text-slate-500">
                Last contacted: 2 days ago
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-1 rounded-full border-slate-700 text-xs"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              WhatsApp
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-1 rounded-full border-slate-700 text-xs"
            >
              <Phone className="h-3.5 w-3.5" />
              Call
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-1 rounded-full border-slate-700 text-xs"
            >
              <Mail className="h-3.5 w-3.5" />
              Email
            </Button>
          </div>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
              <h2 className="mb-3 text-sm font-semibold text-slate-100">
                Contact Information
              </h2>
              <div className="grid gap-3 text-xs text-slate-300">
                <InfoField label="Phone" value="+1 234 567 890" />
                <InfoField label="Email" value="sarah@techcorp.com" />
                <InfoField label="Company" value="Tech Corp" />
                <InfoField label="Role" value="Product Manager" />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-slate-500">
                Created: 12 Jan 2024 • Updated: 14 Jan 2024
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 gap-1 rounded-full border-slate-700 text-xs"
                >
                  <Edit className="h-3.5 w-3.5" />
                  Edit Contact
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 gap-1 rounded-full border-red-500/40 text-xs text-red-400 hover:bg-red-500/10"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  Delete
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
              <h2 className="mb-3 text-sm font-semibold text-slate-100">
                Tags
              </h2>
              <ContactTags />
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
              <h2 className="mb-3 text-sm font-semibold text-slate-100">
                Notes
              </h2>
              <ContactNotes />
            </div>
          </div>
        </section>
      </div>

      <MobileNav currentPage="crm" onNavigate={onNavigate} />
    </div>
  );
}

interface InfoFieldProps {
  label: string;
  value: string;
}

function InfoField({ label, value }: InfoFieldProps) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-slate-400">{label}</span>
      <span className="text-slate-100">{value}</span>
    </div>
  );
}