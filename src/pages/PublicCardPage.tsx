import { Phone, Mail, Globe, MapPin, Download, Share2, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Page } from '@/App';

interface PublicCardPageProps {
  onNavigate: (page: Page) => void;
}

export default function PublicCardPage({ onNavigate }: PublicCardPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
          {/* Card Header with Gradient */}
          <div className="h-32 gradient-primary"></div>

          {/* Profile Section */}
          <div className="px-6 pb-6">
            <div className="flex flex-col items-center -mt-16 mb-6">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-card flex items-center justify-center text-white text-4xl font-bold mb-4">
                AJ
              </div>
              <h1 className="text-3xl font-bold mb-1">Alex Johnson</h1>
              <p className="text-lg text-muted-foreground mb-2">Senior Product Designer</p>
              <p className="text-muted-foreground">Innovation Labs Inc.</p>
            </div>

            {/* About Section */}
            <div className="mb-6 text-center">
              <p className="text-muted-foreground max-w-lg mx-auto">
                Passionate about creating beautiful, user-centered digital experiences. 
                10+ years in product design and UX strategy.
              </p>
            </div>

            {/* Contact Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <ContactButton icon={<Phone className="w-4 h-4" />} label="Call" />
              <ContactButton icon={<Mail className="w-4 h-4" />} label="Email" />
              <ContactButton icon={<Globe className="w-4 h-4" />} label="Website" />
              <ContactButton icon={<Download className="w-4 h-4" />} label="Save" />
            </div>

            {/* Contact Details */}
            <div className="space-y-3 mb-6">
              <ContactDetail icon={<Phone />} text="+1 (555) 123-4567" />
              <ContactDetail icon={<Mail />} text="alex.johnson@innovationlabs.com" />
              <ContactDetail icon={<Globe />} text="www.alexjohnson.design" />
              <ContactDetail icon={<MapPin />} text="San Francisco, CA" />
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-3 mb-6">
              <SocialButton icon={<Linkedin className="w-5 h-5" />} />
              <SocialButton icon={<Twitter className="w-5 h-5" />} />
              <SocialButton icon={<Instagram className="w-5 h-5" />} />
            </div>

            {/* Share Button */}
            <Button className="w-full gradient-primary">
              <Share2 className="w-4 h-4 mr-2" />
              Share This Card
            </Button>
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => onNavigate('dashboard')}
            className="text-muted-foreground hover:text-foreground text-sm"
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
    <button className="flex flex-col items-center gap-2 p-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors">
      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
        {icon}
      </div>
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}

interface ContactDetailProps {
  icon: React.ReactNode;
  text: string;
}

function ContactDetail({ icon, text }: ContactDetailProps) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
      <div className="text-muted-foreground">{icon}</div>
      <span className="text-sm">{text}</span>
    </div>
  );
}

interface SocialButtonProps {
  icon: React.ReactNode;
}

function SocialButton({ icon }: SocialButtonProps) {
  return (
    <button className="w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all flex items-center justify-center">
      {icon}
    </button>
  );
}
