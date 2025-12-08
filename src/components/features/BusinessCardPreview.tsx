import { Mail, Phone, Globe, Linkedin, Twitter } from 'lucide-react';

export default function BusinessCardPreview() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white shadow-2xl">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-1">Alex Johnson</h2>
            <p className="text-white/90 text-sm mb-1">Senior Product Designer</p>
            <p className="text-white/80 text-sm">Innovation Labs Inc.</p>
          </div>
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl font-bold">
            AJ
          </div>
        </div>

        <div className="space-y-2">
          <ContactInfo icon={<Phone className="w-4 h-4" />} text="+1 (555) 123-4567" />
          <ContactInfo icon={<Mail className="w-4 h-4" />} text="alex@innovationlabs.com" />
          <ContactInfo icon={<Globe className="w-4 h-4" />} text="www.alexjohnson.design" />
        </div>

        <div className="flex gap-3 mt-6 pt-6 border-t border-white/20">
          <SocialIcon icon={<Linkedin className="w-4 h-4" />} />
          <SocialIcon icon={<Twitter className="w-4 h-4" />} />
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
    <div className="flex items-center gap-2 text-sm text-white/90">
      {icon}
      <span>{text}</span>
    </div>
  );
}

interface SocialIconProps {
  icon: React.ReactNode;
}

function SocialIcon({ icon }: SocialIconProps) {
  return (
    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
      {icon}
    </div>
  );
}
