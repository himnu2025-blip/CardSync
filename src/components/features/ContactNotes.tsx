import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const notes = [
  {
    id: 1,
    content: 'Met at Tech Conference 2024. Interested in our new product features.',
    date: '2 days ago',
  },
  {
    id: 2,
    content: 'Follow up scheduled for next week to discuss collaboration.',
    date: '1 week ago',
  },
];

export default function ContactNotes() {
  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Notes</h2>
        <Button size="sm" variant="outline">
          <Plus className="w-4 h-4 mr-2" />
          Add Note
        </Button>
      </div>

      <div className="mb-4">
        <Textarea
          placeholder="Add a new note..."
          rows={3}
          className="mb-2"
        />
        <Button size="sm" className="gradient-primary">
          Save Note
        </Button>
      </div>

      <div className="space-y-3">
        {notes.map((note) => (
          <div
            key={note.id}
            className="p-4 rounded-lg bg-secondary/50 border border-border"
          >
            <p className="text-sm mb-2">{note.content}</p>
            <span className="text-xs text-muted-foreground">{note.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
