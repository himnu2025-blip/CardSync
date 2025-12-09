import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Play,
  Zap,
  BarChart2,
  Share2,
  Lock,
  Smartphone,
  Users,
  Calendar,
  PieChart,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Page } from "@/App";

interface LandingPageProps {
  onNavigate: (page: Page) => void;
}

const featuresData: {
  icon: React.ElementType;
  title: string;
  desc: string;
}[] = [
  {
    icon: Zap,
    title: "Instant Sharing",
    desc: "Share via QR, NFC or link — recipients don’t need an app.",
  },
  {
    icon: BarChart2,
    title: "Track Engagement",
    desc: "See who viewed your card, when and where — actionable analytics.",
  },
  {
    icon: Share2,
    title: "Smart Follow-ups",
    desc: "One-tap WhatsApp & email templates to convert leads faster.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    desc: "Encryption and privacy controls you can trust.",
  },
  {
    icon: Smartphone,
    title: "Works Everywhere",
    desc: "Optimized for mobile, tablet and desktop.",
  },
  {
    icon: Users,
    title: "Team Management",
    desc: "Share cards and contacts across your team with access control.",
  },
  // Updated features
  {
    icon: Users,
    title: "Contact Management",
    desc: "Every connection flows automatically into your CRM with notes, tags, and activity.",
  },
  {
    icon: Smartphone,
    title: "Customizable Cards",
    desc: "Choose templates and colors to match your brand perfectly.",
  },
  {
    icon: Tag,
    title: "Smart Tags & Filters",
    desc: "Segment your contacts and follow-ups with intelligent tagging.",
  },
];

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const [activeFeatureIdx, setActiveFeatureIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () =>
        setActiveFeatureIdx((s) => (s + 1) % featuresData.length),
      3000
    );
    return () => clearInterval(t);
  }, []);

  const activeFeature = featuresData[activeFeatureIdx];
  const ActiveIcon = activeFeature.icon;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-purple-500 text-xs font-bold text-white">
            ✧
          </span>
          <span className="text-sm font-semibold tracking-tight">
            CardSync
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onNavigate("login")}
            className="text-xs font-medium text-slate-300 hover:text-white"
          >
            Login
          </button>
          <Button
            onClick={() => onNavigate("signup")}
            className="rounded-full px-4 py-2 text-xs font-semibold text-white shadow-lg"
            style={{
              background:
                "linear-gradient(90deg,#6B8CFF 0%, #7CC7FF 55%, #8B5CF6 100%)",
            }}
          >
            Get Started — It&apos;s Free
          </Button>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-24 pt-6 md:flex-row md:items-center">
        <section className="flex-1 space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-300">
            The future of networking
          </p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Your Smart Digital{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Business Card
            </span>
          </h1>
          <p className="max-w-xl text-sm text-slate-300">
            Not just a card — a complete business solution. Share your
            contact instantly with QR or NFC, capture leads automatically,
            and follow up with high-quality templates — all inside a
            lightweight and powerful CRM built for modern professionals.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              onClick={() => onNavigate("signup")}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-white shadow-2xl"
              style={{
                background:
                  "linear-gradient(90deg,#6B8CFF 0%, #7CC7FF 55%, #8B5CF6 100%)",
              }}
            >
              Get Started Free
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
            <button
              type="button"
              onClick={() =>
                window.scrollTo({ top: 820, behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-white/5 px-4 py-2 text-xs font-medium text-slate-100 hover:bg-white/10"
            >
              <Play className="h-3.5 w-3.5" />
              Watch demo
            </button>
          </div>

          <p className="text-xs text-slate-400">
            Trusted by 10,000+ professionals worldwide — secure, private,
            and fast.
          </p>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Multiple templates</span>
            <span>•</span>
            <span>QR & NFC</span>
            <span>•</span>
            <span>Built-in CRM</span>
          </div>
        </section>

        {/* Live card */}
        <section className="flex-1">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 p-[1px] shadow-[0_0_70px_rgba(56,189,248,0.45)]">
              <div className="space-y-4 rounded-3xl bg-slate-950/95 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-[0.25em] text-blue-300">
                      Live
                    </div>
                    <div className="text-sm font-semibold text-slate-100">
                      Nitesh Vohra
                    </div>
                    <p className="text-xs text-slate-400">
                      Founder, CardSync
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-xs font-semibold text-blue-100">
                    NV
                  </div>
                </div>

                <div className="grid gap-2 text-[11px] text-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Tap, scan or share</span>
                    <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] text-slate-200">
                      No app needed
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="rounded-lg bg-slate-900/80 p-2">
                      <div className="text-[10px] text-slate-400">
                        Phone
                      </div>
                      <div className="text-[11px] font-medium text-slate-100">
                        +91 ••••• ••••
                      </div>
                    </div>
                    <div className="rounded-lg bg-slate-900/80 p-2">
                      <div className="text-[10px] text-slate-400">
                        Email
                      </div>
                      <div className="text-[11px] font-medium text-slate-100">
                        hello@cardsync.app
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span>124 views • 38 saves</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-2 py-0.5 text-[10px] text-slate-200">
                      <ActiveIcon className="h-3 w-3 text-white" />
                      {activeFeature.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* tiny analytics pill */}
            <div className="pointer-events-none absolute -bottom-6 left-6 rounded-full border border-slate-800 bg-slate-950/95 px-3 py-1 text-[10px] text-slate-300 shadow-lg">
              <span className="inline-flex items-center gap-1">
                <PieChart className="h-3 w-3 text-blue-400" />
                Live analytics enabled
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Feature grid */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="mb-2 text-sm font-semibold text-slate-100">
          Everything you need to network smarter
        </h2>
        <p className="mb-6 text-xs text-slate-400">
          Powerful features designed for modern professionals who value
          meaningful connections.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {featuresData.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="rounded-xl border border-slate-800 bg-slate-950/80 p-4"
              >
                <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-slate-100">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-semibold text-slate-100">
                  {f.title}
                </h3>
                <p className="mt-1 text-xs text-slate-400">{f.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA footer */}
        <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-slate-800 bg-gradient-to-r from-blue-500/10 via-cyan-400/5 to-purple-500/10 px-4 py-6 text-center">
          <p className="text-sm font-semibold text-slate-100">
            Ready to transform your networking?
          </p>
          <p className="max-w-xl text-xs text-slate-300">
            Set up your first card in under 2 minutes — share instantly,
            follow up smarter.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate("signup")}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-semibold text-indigo-700 shadow-xl"
            >
              Get Started Free
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate("login")}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-4 py-2 text-xs font-medium text-slate-100 hover:bg-white/10"
            >
              Sign In
            </button>
          </div>
        </div>

        {/* Simple footer */}
        <footer className="mt-10 border-t border-slate-800 pt-6 text-[11px] text-slate-500">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex gap-4">
              <span>Product</span>
              <span>Company</span>
              <span>Support</span>
            </div>
            <span>© 2024 CardSync. All rights reserved.</span>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default LandingPage;