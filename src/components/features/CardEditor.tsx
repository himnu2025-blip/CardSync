import {
  User,
  Building,
  Briefcase,
  Phone,
  Mail,
  Globe,
  MapPin,
  FileText,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function CardEditor() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-6">
        <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-6">
          <h3 className="mb-4 text-sm font-semibold text-slate-100">
            Basic Information
          </h3>
          <div className="space-y-4">
            <FormField
              icon={<User className="h-4 w-4" />}
              label="Full Name"
              placeholder="Alex Johnson"
            />
            <FormField
              icon={<Building className="h-4 w-4" />}
              label="Company"
              placeholder="Innovation Labs Inc."
            />
            <FormField
              icon={<Briefcase className="h-4 w-4" />}
              label="Job Title"
              placeholder="Senior Product Designer"
            />
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-6">
          <h3 className="mb-4 text-sm font-semibold text-slate-100">
            Contact Details
          </h3>
          <div className="space-y-4">
            <FormField
              icon={<Phone className="h-4 w-4" />}
              label="Phone"
              placeholder="+1 (555) 123-4567"
              type="tel"
            />
            <FormField
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              placeholder="alex@company.com"
              type="email"
            />
            <FormField
              icon={<Globe className="h-4 w-4" />}
              label="Website"
              placeholder="www.yourwebsite.com"
            />
            <FormField
              icon={<MapPin className="h-4 w-4" />}
              label="Location"
              placeholder="San Francisco, CA"
            />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-6">
          <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-100">
            <FileText className="h-4 w-4" />
            About
          </h3>
          <div className="space-y-2">
            <Label htmlFor="bio" className="text-xs text-slate-300">
              Bio
            </Label>
            <Textarea
              id="bio"
              rows={5}
              placeholder="Short, sharp intro about who you are and how you help."
            />
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-6">
          <h3 className="mb-4 text-sm font-semibold text-slate-100">
            Design Customization
          </h3>
          <div className="space-y-4">
            <div>
              <Label className="mb-2 block text-xs text-slate-300">
                Card Color
              </Label>
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
    </div>
  );
}

interface FormFieldProps {
  icon: React.ReactNode;
  label: string;
  placeholder: string;
  type?: string;
}

function FormField({
  icon,
  label,
  placeholder,
  type = "text",
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label className="flex items-center gap-2 text-xs text-slate-200">
        <span className="text-slate-400">{icon}</span>
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
    <button
      type="button"
      className={`h-10 w-10 rounded-lg border-2 border-transparent ${color} hover:border-slate-100 transition-colors`}
    />
  );
}