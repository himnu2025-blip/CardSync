import { Mail, Phone, Globe, Linkedin, Twitter } from "lucide-react";

export default function BusinessCardPreview() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 p-[1px] shadow-2xl">
      <div className="flex flex-col justify-between gap-4 rounded-2xl bg-slate-950/90 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Alex Johnson
            </h3>
            <p className="text-sm text-slate-300">
              Senior Product Designer
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Innovation Labs Inc.
            </p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
            AJ
          </div>
        </div>

        <div className="grid gap-3 text-xs text-slate-200">
          <ContactInfo
            icon={<Phone className="h-3.5 w-3.5" />}
            text="+1 (555) 123-4567"
          />
          <ContactInfo
            icon={<Mail className="h-3.5 w-3.5" />}
            text="alex@innovationlabs.com"
          />
          <ContactInfo
            icon={<Globe className="h-3.5 w-3.5" />}
            text="alexjohnson.design"
          />
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex gap-2">
            <SocialIcon icon={<Linkedin className="h-4 w-4" />} />
            <SocialIcon icon={<Twitter className="h-4 w-4" />} />
          </div>
          <p className="text-xs text-slate-400">
            124 views • 38 saves
          </p>
        </div>
      </div>
    </div>
  );
}

interface ContactInfoProps {
  icon: React.ReactNode;
  text: string;
}

function ContactInfo({ icon, text }: ContactInfoProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/80 text-slate-200">
        {icon}
      </span>
      <span>{text}</span>
    </div>
  );
}

interface SocialIconProps {
  icon: React.ReactNode;
}

function SocialIcon({ icon }: SocialIconProps) {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80 text-slate-100">
      {icon}
    </div>
  );
}