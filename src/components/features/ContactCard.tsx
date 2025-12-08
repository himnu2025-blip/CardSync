import { Phone, Mail, MessageCircle } from 'lucide-react';

interface Contact {
  id: string;
  name: string;
  company: string;
  designation: string;
  tags: string[];
  lastContacted: string;
  avatar: string;
}

interface ContactCardProps {
  contact: Contact;
  onClick: () => void;
}

export default function ContactCard({ contact, onClick }: ContactCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-card border border-border rounded-xl p-4 hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer group"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold shrink-0">
          {contact.name.split(' ').map(n => n[0]).join('')}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold truncate">{contact.name}</h3>
          <p className="text-sm text-muted-foreground truncate">{contact.designation} at {contact.company}</p>
          <div className="flex flex-wrap gap-1 mt-2">
            {contact.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary"
              >
                {tag}
              </span>
            ))}
            {contact.tags.length > 3 && (
              <span className="px-2 py-0.5 text-xs rounded-full bg-secondary text-muted-foreground">
                +{contact.tags.length - 3}
              </span>
            )}
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="p-2 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="p-2 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="p-2 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="mt-2 text-xs text-muted-foreground">
        Last contacted: {contact.lastContacted}
      </div>
    </div>
  );
}
