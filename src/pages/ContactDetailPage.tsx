import { ArrowLeft, Phone, Mail, MessageCircle, Trash2, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Page } from '@/App';
import DashboardHeader from '@/components/layout/DashboardHeader';
import MobileNav from '@/components/layout/MobileNav';
import ContactNotes from '@/components/features/ContactNotes';
import ContactTags from '@/components/features/ContactTags';

interface ContactDetailPageProps {
  contactId: string | null;
  onNavigate: (page: Page) => void;
}

export default function ContactDetailPage({ onNavigate }: ContactDetailPageProps) {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <DashboardHeader onNavigate={onNavigate} />

      <main className="container-custom py-6 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => onNavigate('crm')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Contacts
        </Button>

        {/* Contact Header */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold">
              SJ
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h1 className="text-2xl font-bold mb-1">Sarah Johnson</h1>
                  <p className="text-muted-foreground">Product Manager at Tech Corp</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                  <Phone className="w-4 h-4" />
                  +1 234 567 890
                </a>
                <a href="mailto:sarah@techcorp.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                  <Mail className="w-4 h-4" />
                  sarah@techcorp.com
                </a>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button size="sm" className="gradient-primary">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button size="sm" variant="outline">
                  <Phone className="w-4 h-4 mr-2" />
                  Call
                </Button>
                <Button size="sm" variant="outline">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Tags */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Tags</h2>
          <ContactTags />
        </div>

        {/* Contact Information */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <InfoField label="Lead Source" value="LinkedIn" />
            <InfoField label="Relationship" value="Client" />
            <InfoField label="Temperature" value="Hot Lead" />
            <InfoField label="Last Contacted" value="2 days ago" />
          </div>
        </div>

        {/* Notes Section */}
        <ContactNotes />
      </main>

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
    <div>
      <label className="text-sm text-muted-foreground">{label}</label>
      <p className="font-medium">{value}</p>
    </div>
  );
}
