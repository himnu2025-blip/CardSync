import { useState } from 'react';
import { ArrowLeft, Save, Eye, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Page } from '@/App';
import DashboardHeader from '@/components/layout/DashboardHeader';
import MobileNav from '@/components/layout/MobileNav';
import CardEditor from '@/components/features/CardEditor';
import BusinessCardPreview from '@/components/features/BusinessCardPreview';
import TemplateSelector from '@/components/features/TemplateSelector';

interface CardBuilderPageProps {
  onNavigate: (page: Page) => void;
}

export default function CardBuilderPage({ onNavigate }: CardBuilderPageProps) {
  const [showTemplates, setShowTemplates] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <DashboardHeader onNavigate={onNavigate} />

      <main className="container-custom py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onNavigate('dashboard')}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Card Builder</h1>
              <p className="text-sm text-muted-foreground">Customize your digital business card</p>
            </div>
          </div>

          <div className="hidden md:flex gap-2">
            <Button variant="outline" onClick={() => onNavigate('public-card')}>
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button variant="outline">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button className="gradient-primary">
              <Save className="w-4 h-4 mr-2" />
              Save Card
            </Button>
          </div>
        </div>

        {showTemplates ? (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Choose a Template</h2>
              <Button variant="ghost" onClick={() => setShowTemplates(false)}>
                Back to Editor
              </Button>
            </div>
            <TemplateSelector onSelectTemplate={() => setShowTemplates(false)} />
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Edit Card</h2>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowTemplates(true)}
                >
                  Change Template
                </Button>
              </div>
              <CardEditor />
            </div>

            <div className="hidden lg:block">
              <h2 className="text-lg font-semibold mb-4">Live Preview</h2>
              <div className="sticky top-24">
                <BusinessCardPreview />
              </div>
            </div>
          </div>
        )}

        {/* Mobile Action Buttons */}
        <div className="fixed bottom-20 left-0 right-0 p-4 bg-background border-t border-border md:hidden flex gap-2">
          <Button variant="outline" className="flex-1" onClick={() => onNavigate('public-card')}>
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button className="flex-1 gradient-primary">
            <Save className="w-4 h-4 mr-2" />
            Save
          </Button>
        </div>
      </main>

      <MobileNav currentPage="dashboard" onNavigate={onNavigate} />
    </div>
  );
}
