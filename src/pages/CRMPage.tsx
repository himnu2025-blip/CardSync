import { useMemo, useState } from "react";
import { Search, Plus, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Page } from "@/App";
import DashboardHeader from "@/components/layout/DashboardHeader";
import MobileNav from "@/components/layout/MobileNav";
import ContactCard from "@/components/features/ContactCard";
import TagFilter from "@/components/features/TagFilter";
import { useTheme } from "@/contexts/ThemeContext";

interface CRMPageProps {
  onNavigate: (page: Page) => void;
  onViewContact: (contactId: string) => void;
}

const mockContacts = [
  {
    id: "1",
    name: "Sarah Johnson",
    company: "Tech Corp",
    designation: "Product Manager",
    tags: ["Client", "Hot Lead", "LinkedIn"],
    lastContacted: "2 days ago",
    avatar: "",
  },
  {
    id: "2",
    name: "Michael Chen",
    company: "Design Studio",
    designation: "Creative Director",
    tags: ["Partner", "Warm Lead"],
    lastContacted: "1 week ago",
    avatar: "",
  },
  {
    id: "3",
    name: "Emily Davis",
    company: "Marketing Pro",
    designation: "CMO",
    tags: ["Client", "Conference"],
    lastContacted: "3 days ago",
    avatar: "",
  },
];

export default function CRMPage({
  onNavigate,
  onViewContact,
}: CRMPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const rootClass =
    "min-h-screen " +
    (isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900");

  const filteredContacts = useMemo(() => {
    return mockContacts.filter((c) => {
      const matchQuery =
        !searchQuery ||
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.company.toLowerCase().includes(searchQuery.toLowerCase());
      const matchTags =
        !selectedTags.length ||
        selectedTags.every((t) => c.tags.includes(t));
      return matchQuery && matchTags;
    });
  }, [searchQuery, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className={rootClass}>
      <div className="mx-auto max-w-6xl px-4 pb-24 pt-4">
        <DashboardHeader onNavigate={onNavigate} />

        <section className="mt-4 flex items-center justify-between gap-2">
          <div>
            <h1 className="text-lg font-semibold">Contacts</h1>
            <p className="text-xs text-slate-400">
              Manage your professional network.
            </p>
          </div>
          <Button size="sm" className="h-8 gap-1 rounded-full text-xs">
            <Plus className="h-3.5 w-3.5" />
            Add Contact
          </Button>
        </section>

        <section className="mt-6 space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-xs">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <Input
                placeholder="Search by name or company..."
                className="pl-9 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button
              variant="outline"
              size="sm"
              className="inline-flex h-9 items-center gap-2 rounded-full border-slate-700 text-xs"
            >
              <Filter className="h-3.5 w-3.5" />
              Advanced Filters
            </Button>
          </div>

          <TagFilter selectedTags={selectedTags} onToggleTag={toggleTag} />

          <div className="mt-4 grid gap-3">
            {filteredContacts.map((contact) => (
              <ContactCard
                key={contact.id}
                contact={contact}
                onClick={() => onViewContact(contact.id)}
              />
            ))}
            {!filteredContacts.length && (
              <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950/80 p-6 text-center text-xs text-slate-400">
                No contacts found. Try changing your filters.
              </div>
            )}
          </div>
        </section>
      </div>

      <MobileNav currentPage="crm" onNavigate={onNavigate} />
    </div>
  );
}