// src/pages/LandingPage.tsx
import React from "react";
import { ArrowRight } from "lucide-react";

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center shadow-md">
              <span className="text-white text-xl font-semibold">✧</span>
            </div>
            <span className="font-semibold text-lg tracking-tight text-slate-900">
              CardSync
            </span>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate("login")}
              className="text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              Login
            </button>

            <button
              onClick={() => onNavigate("signup")}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 transition"
            >
              Get Started — It's Free
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-white to-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 lg:py-20 grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                Digital business card + built-in CRM
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
                Your Smart Digital Business Card
                <span className="block text-sky-600">
                  Share instantly. Follow up smarter.
                </span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base max-w-xl mb-6">
                Replace paper cards forever. Create a beautiful digital card,
                share via QR or NFC tap, and manage every contact in a simple,
                powerful CRM.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <button
                  onClick={() => onNavigate("signup")}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-sky-700 transition"
                >
                  Create Your Card — Free
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href="#templates"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
                >
                  View Card Templates
                </a>
              </div>

              <p className="text-xs sm:text-sm text-slate-500">
                Trusted by professionals worldwide. No credit card required.
              </p>
            </div>

            {/* Hero Card Preview */}
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-sky-100 blur-2xl" />
              <div className="absolute -right-6 -bottom-8 h-32 w-32 rounded-full bg-indigo-100 blur-2xl" />

              <div className="relative mx-auto w-full max-w-sm rounded-3xl bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.12)] border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center text-white font-semibold text-xl">
                    NV
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      Nitesh Vohra
                    </div>
                    <div className="text-xs text-slate-500">
                      Founder, CardSync
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="text-[11px] font-medium text-slate-500 mb-1">
                      Phone
                    </div>
                    <div className="text-slate-900 font-medium">
                      +91 98XXX XXXX
                    </div>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="text-[11px] font-medium text-slate-500 mb-1">
                      Email
                    </div>
                    <div className="text-slate-900 font-medium">
                      hello@cardsync.app
                    </div>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="text-[11px] font-medium text-slate-500 mb-1">
                      Website
                    </div>
                    <div className="text-slate-900 font-medium">
                      cardsync.app
                    </div>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="text-[11px] font-medium text-slate-500 mb-1">
                      Location
                    </div>
                    <div className="text-slate-900 font-medium">
                      New Delhi, India
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button className="flex-1 rounded-full bg-sky-600 px-3 py-2 text-xs font-semibold text-white hover:bg-sky-700 transition">
                    Share QR
                  </button>
                  <button className="flex-1 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-50 transition">
                    Save Contact
                  </button>
                </div>

                <div className="mt-4 rounded-2xl bg-slate-900 px-4 py-3 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-wide text-slate-400">
                      Live Analytics
                    </div>
                    <div className="text-xs font-medium text-slate-50">
                      124 views • 38 saves this week
                    </div>
                  </div>
                  <div className="h-10 w-16 rounded-xl bg-gradient-to-tr from-emerald-400 to-sky-400 opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature cards */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-6">
              Everything you need to network smarter
            </h2>

            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Customizable Cards",
                  desc: "Choose from premium templates, colors, and layouts to match your brand.",
                },
                {
                  title: "QR Code & NFC",
                  desc: "Share instantly using QR or a tap of your NFC card—no app needed.",
                },
                {
                  title: "Contact Management",
                  desc: "Every saved contact flows into your CRM with notes, tags, and activity.",
                },
                {
                  title: "Track Engagement",
                  desc: "See who viewed your card and which channels perform best.",
                },
                {
                  title: "Quick Follow-ups",
                  desc: "Send WhatsApp and email templates with one tap from your CRM.",
                },
                {
                  title: "Works Everywhere",
                  desc: "Optimized for mobile, tablet, and desktop—your card always looks great.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white p-5 shadow-sm border border-slate-100 hover:shadow-md transition"
                >
                  <div className="mb-3 h-9 w-9 rounded-2xl bg-sky-100 flex items-center justify-center text-sky-700 text-lg">
                    ✧
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Templates section */}
        <section id="templates" className="bg-white border-y border-slate-100">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-semibold text-slate-900">
                Beautiful card templates
              </h2>
              <span className="hidden sm:inline text-xs text-slate-500">
                Swipe to explore styles
              </span>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
              {[
                "Modern Blue",
                "Minimal White",
                "Luxury Dark",
                "Gradient Glow",
              ].map((name, i) => (
                <div
                  key={name}
                  className="min-w-[260px] max-w-[260px] snap-start rounded-3xl p-4 text-slate-50 shadow-lg"
                  style={{
                    backgroundImage:
                      i === 0
                        ? "linear-gradient(135deg,#2563EB,#4F46E5)"
                        : i === 1
                        ? "linear-gradient(135deg,#0F172A,#020617)"
                        : i === 2
                        ? "linear-gradient(135deg,#111827,#1F2937)"
                        : "linear-gradient(135deg,#4F46E5,#EC4899)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-2xl bg-white/10 flex items-center justify-center text-sm font-semibold">
                      NV
                    </div>
                    <div>
                      <div className="text-sm font-semibold">John Doe</div>
                      <div className="text-[11px] text-slate-200">
                        Product Designer
                      </div>
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-100 mb-3">
                    {name} Template
                  </div>
                  <div className="text-[10px] text-slate-200/80">
                    Phone • Email • Website • Social links
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
            <div className="rounded-3xl bg-gradient-to-r from-sky-600 to-indigo-600 px-6 py-8 sm:px-8 sm:py-10 text-center text-slate-50 shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Ready to transform your networking?
              </h2>
              <p className="text-sm sm:text-base text-slate-100/80 mb-5 max-w-xl mx-auto">
                Join professionals worldwide using CardSync to share their
                digital identity, track engagement, and never lose a contact
                again.
              </p>

              <button
                onClick={() => onNavigate("signup")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-700 shadow-md hover:bg-slate-50 transition"
              >
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </button>

              <p className="mt-3 text-xs text-slate-100/80">
                Set up your first card in under 2 minutes.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 text-sm">
              ✧
            </div>
            <span className="text-sm font-semibold text-slate-800">
              CardSync
            </span>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-slate-500">
            <a className="hover:text-slate-800">About</a>
            <a className="hover:text-slate-800">Privacy Policy</a>
            <a className="hover:text-slate-800">Terms</a>
            <a className="hover:text-slate-800">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;