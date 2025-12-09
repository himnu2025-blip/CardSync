import {
  Phone,
  Mail,
  Globe,
  MapPin,
  Download,
  Share2,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Page } from "@/App";
import { useTheme } from "@/contexts/ThemeContext";

interface PublicCardPageProps {
  onNavigate: (page: Page) => void;
}

export default function PublicCardPage({ onNavigate }: PublicCardPageProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const rootClass =
    "min-h-screen " +
    (isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900");

  return (
    <div className={rootClass}>
      <div className="flex min-h-screen items-center justify-center px-4 py-8">
        <div className="w-full max-w-md space-y-6">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 p-[1px] shadow-2xl">
            <div className="space-y-4 rounded-3xl bg-slate-950/95 p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-base font-semibold text-white">
                  AJ
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-white">
                    Alex Johnson
                  </h1>
                  <p className="text-xs text-slate-200">
                    Senior Product Designer
                  </p>
                  <p className="text-[11px] text-slate-300">
                    Innovation Labs Inc.
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-300">
                Passionate about creating beautiful, user-centered digital
                experiences. 10+ years in product design and UX strategy.
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <ContactButton
                  icon={<Phone className="h-3.5 w-3.5" />}
                  label="Call"
                />
                <ContactButton
                  icon={<Mail className="h-3.5 w-3.5" />}
                  label="Email"
                />
                <ContactButton
                  icon={<Globe className="h-3.5 w-3.5" />}
                  label="Website"
                />
                <ContactButton
                  icon={<Download className="h-3.5 w-3.5" />}
                  label="Save"
                />
              </div>

              <div className="space-y-2 text-xs text-slate-200">
                <ContactDetail
                  icon={<Phone className="h-3.5 w-3.5" />}
                  text="+1 (555) 123-4567"
                />
                <ContactDetail
                  icon={<Mail className="h-3.5 w-3.5" />}
                  text="alex.johnson@innovationlabs.com"
                />
                <ContactDetail
                  icon={<Globe className="h-3.5 w-3.5" />}
                  text="www.alexjohnson.design"
                />
                <ContactDetail
                  icon={<MapPin className="h-3.5 w-3.5" />}
                  text="San Francisco, CA"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex gap-2">
                  <SocialButton icon={<Linkedin className="h-4 w-4" />} />
                  <SocialButton icon={<Twitter className="h-4 w-4" />} />
                  <SocialButton icon={<Instagram className="h-4 w-4" />} />
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 gap-1 rounded-full border-slate-600 bg-slate-950/80 text-[11px]"
                >
                  <Share2 className="h-3.5 w-3.5" />
                  Share This Card
                </Button>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onNavigate("dashboard")}
            className="block w-full text-center text-[11px] text-slate-400 hover:text-slate-100"
          >
            Create your own digital card →
          </button>
        </div>
      </div>
    </div>
  );
}

interface ContactButtonProps {
  icon: React.ReactNode;
  label: string;
}

function ContactButton({ icon, label }: ContactButtonProps) {
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-2 rounded-xl bg-slate-900/80 px-3 py-2 text-slate-100"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

interface ContactDetailProps {
  icon: React.ReactNode;
  text: string;
}

function ContactDetail({ icon, text }: ContactDetailProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-slate-100">
        {icon}
      </span>
      <span>{text}</span>
    </div>
  );
}

interface SocialButtonProps {
  icon: React.ReactNode;
}

function SocialButton({ icon }: SocialButtonProps) {
  return (
    <button
      type="button"
      className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-slate-100"
    >
      {icon}
    </button>
  );
}