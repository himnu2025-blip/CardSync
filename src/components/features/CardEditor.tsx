import { User, Building, Briefcase, Phone, Mail, Globe, MapPin, FileText } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function CardEditor() {
  return (
    <div className="space-y-6">
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="font-semibold mb-4">Basic Information</h3>
        <div className="space-y-4">
          <FormField icon={<User />} label="Full Name" placeholder="Alex Johnson" />
          <FormField icon={<Building />} label="Company" placeholder="Innovation Labs Inc." />
          <FormField icon={<Briefcase />} label="Job Title" placeholder="Senior Product Designer" />
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="font-semibold mb-4">Contact Details</h3>
        <div className="space-y-4">
          <FormField icon={<Phone />} label="Phone" placeholder="+1 (555) 123-4567" type="tel" />
          <FormField icon={<Mail />} label="Email" placeholder="alex@company.com" type="email" />
          <FormField icon={<Globe />} label="Website" placeholder="www.yourwebsite.com" />
          <FormField icon={<MapPin />} label="Location" placeholder="San Francisco, CA" />
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="font-semibold mb-4">About</h3>
        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-muted-foreground" />
            Bio
          </Label>
          <Textarea
            placeholder="Tell people about yourself and what you do..."
            rows={4}
          />
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="font-semibold mb-4">Design Customization</h3>
        <div className="space-y-4">
          <div>
            <Label className="mb-2 block">Card Color</Label>
            <div className="flex gap-2">
              <ColorOption color="bg-gradient-to-br from-blue-500 to-cyan-500" />
              <ColorOption color="bg-gradient-to-br from-purple-500 to-pink-500" />
              <ColorOption color="bg-gradient-to-br from-orange-500 to-red-500" />
              <ColorOption color="bg-gradient-to-br from-green-500 to-teal-500" />
              <ColorOption color="bg-gradient-to-br from-indigo-900 to-purple-900" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface FormFieldProps {
  icon: React.ReactNode;
  label: string;
  placeholder: string;
  type?: string;
}

function FormField({ icon, label, placeholder, type = 'text' }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label className="flex items-center gap-2">
        <span className="text-muted-foreground">{icon}</span>
        {label}
      </Label>
      <Input type={type} placeholder={placeholder} />
    </div>
  );
}

interface ColorOptionProps {
  color: string;
}

function ColorOption({ color }: ColorOptionProps) {
  return (
    <button className={`w-12 h-12 rounded-lg ${color} border-2 border-transparent hover:border-foreground transition-colors`} />
  );
}
