import { useState } from "react";
import { ArrowLeft, Save, Eye, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Page } from "@/App";
import DashboardHeader from "@/components/layout/DashboardHeader";
import MobileNav from "@/components/layout/MobileNav";
import CardEditor from "@/components/features/CardEditor";
import BusinessCardPreview from "@/components/features/BusinessCardPreview";
import TemplateSelector from "@/components/features/TemplateSelector";

interface CardBuilderPageProps {
  onNavigate: (page: Page) => void;
}

export default function CardBuilderPage({ onNavigate }: CardBuilderPageProps) {
  const [showTemplates, setShowTemplates] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 pb-24 pt-4">
        <DashboardHeader onNavigate={onNavigate} />

        <div className="mt-4 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => onNavigate("dashboard")}
            className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-slate-100"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Dashboard
          </button>

          <div className="hidden items-center gap-2 sm:flex">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onNavigate("public-card")}
              className="h-8 gap-1 rounded-full border-slate-700 text-xs"
            >
              <Eye className="h-3.5 w-3.5" />
              Preview
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-1 rounded-full border-slate-700 text-xs"
            >
              <Share2 className="h-3.5 w-3.5" />
              Share
            </Button>
            <Button
              size="sm"
              className="h-8 gap-1 rounded-full text-xs"
            >
              <Save className="h-3.5 w-3.5" />
              Save Card
            </Button>
          </div>
        </div>

        <section className="mt-4 space-y-1">
          <h1 className="text-lg font-semibold">Card Builder</h1>
          <p className="text-xs text-slate-400">
            Customize your digital business card.
          </p>
        </section>

        <section className="mt-6 space-y-6">
          {showTemplates ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold">
                  Choose a Template
                </h2>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 rounded-full text-xs"
                  onClick={() => setShowTemplates(false)}
                >
                  Back to Editor
                </Button>
              </div>
              <TemplateSelector
                onSelectTemplate={() => setShowTemplates(false)}
              />
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-semibold">Edit Card</h2>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 rounded-full text-xs"
                    onClick={() => setShowTemplates(true)}
                  >
                    Change Template
                  </Button>
                </div>
                <CardEditor />
              </div>
              <div className="space-y-4">
                <h2 className="text-sm font-semibold">Live Preview</h2>
                <BusinessCardPreview />
              </div>
            </div>
          )}
        </section>

        {/* Mobile actions */}
        <div className="mt-6 flex items-center justify-between gap-3 sm:hidden">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 h-9 text-xs"
            onClick={() => onNavigate("public-card")}
          >
            Preview
          </Button>
          <Button size="sm" className="flex-1 h-9 text-xs">
            Save
          </Button>
        </div>
      </div>

      <MobileNav currentPage="card-builder" onNavigate={onNavigate} />
    </div>
  );
}