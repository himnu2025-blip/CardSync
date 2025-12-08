import { useState } from 'react';
import { Search, Plus, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Page } from '@/App';
import DashboardHeader from '@/components/layout/DashboardHeader';
import MobileNav from '@/components/layout/MobileNav';
import ContactCard from '@/components/features/ContactCard';
import TagFilter from '@/components/features/TagFilter';

interface CRMPageProps {
  onNavigate: (page: Page) => void;
  onViewContact: (contactId: string) => void;
}

const mockContacts = [
  {
    id: '1',
    name: 'Sarah Johnson',
    company: 'Tech Corp',
    designation: 'Product Manager',
    tags: ['Client', 'Hot Lead', 'LinkedIn'],
    lastContacted: '2 days ago',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
  },
  {
    id: '2',
    name: 'Michael Chen',
    company: 'Design Studio',
    designation: 'Creative Director',
    tags: ['Partner', 'Warm Lead'],
    lastContacted: '1 week ago',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
  },
  {
    id: '3',
    name: 'Emily Davis',
    company: 'Marketing Pro',
    designation: 'CMO',
    tags: ['Client', 'Conference'],
    lastContacted: '3 days ago',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
  },
];

export default function CRMPage({ onNavigate, onViewContact }: CRMPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <DashboardHeader onNavigate={onNavigate} />

      <main className="container-custom py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-1">Contacts</h1>
            <p className="text-muted-foreground">Manage your professional network</p>
          </div>
          <Button className="gradient-primary">
            <Plus className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Add Contact</span>
          </Button>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search contacts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="sm:w-auto">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Tag Filters */}
        <TagFilter selectedTags={selectedTags} onToggleTag={(tag) => {
          setSelectedTags(prev =>
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
          );
        }} />

        {/* Contacts List */}
        <div className="space-y-3">
          {mockContacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              onClick={() => onViewContact(contact.id)}
            />
          ))}
        </div>
      </main>

      <MobileNav currentPage="crm" onNavigate={onNavigate} />
    </div>
  );
}
