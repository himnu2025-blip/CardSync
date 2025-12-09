import { Phone, Mail, MessageCircle } from "lucide-react";

interface Contact {
  id: string;
  name: string;
  company: string;
  designation: string;
  tags: string[];
  lastContacted: string;
  avatar?: string;
}

interface ContactCardProps {
  contact: Contact;
  onClick: () => void;
}

export default function ContactCard({ contact, onClick }: ContactCardProps) {
  const initials = contact.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full flex-col gap-3 rounded-xl border border-slate-800 bg-slate-950/80 p-4 text-left hover:border-blue-500/60 hover:bg-slate-900/80 transition-colors"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-xs font-semibold text-slate-100">
          {initials}
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-slate-100">
            {contact.name}
          </h3>
          <p className="text-xs text-slate-400">
            {contact.designation} at {contact.company}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1">
        {contact.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-medium text-slate-300"
          >
            {tag}
          </span>
        ))}
        {contact.tags.length > 3 && (
          <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-medium text-slate-400">
            +{contact.tags.length - 3}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>Last contacted: {contact.lastContacted}</span>
        <div className="flex gap-1.5">
          <IconButton
            icon={<MessageCircle className="h-3.5 w-3.5" />}
            label="Message"
          />
          <IconButton
            icon={<Phone className="h-3.5 w-3.5" />}
            label="Call"
          />
          <IconButton
            icon={<Mail className="h-3.5 w-3.5" />}
            label="Email"
          />
        </div>
      </div>
    </button>
  );
}

interface IconButtonProps {
  icon: React.ReactNode;
  label: string;
}

function IconButton({ icon }: IconButtonProps) {
  return (
    <button
      type="button"
      onClick={(e) => e.stopPropagation()}
      className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-slate-100 transition-colors"
    >
      {icon}
    </button>
  );
}