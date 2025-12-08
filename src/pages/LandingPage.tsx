// src/pages/LandingPage.tsx
import React from "react";
import { ArrowRight, Play } from "lucide-react";

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* TOP BACKDROP / NAV */}
      <header className="sticky top-0 z-40">
        <div className="backdrop-blur-sm bg-white/40 border-b border-white/30">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                aria-hidden
                className="h-10 w-10 rounded-full flex items-center justify-center shadow-md"
                style={{
                  background:
                    "linear-gradient(135deg,#6B8CFF 0%, #7CC7FF 50%, #8B5CF6 100%)",
                }}
              >
                <span className="text-white font-bold">✧</span>
              </div>
              <span className="font-bold text-lg tracking-tight">CardSync</span>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => onNavigate("login")}
                className="text-sm font-medium text-slate-700 hover:text-slate-900"
              >
                Login
              </button>

              <button
                onClick={() => onNavigate("signup")}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg"
                style={{
                  background:
                    "linear-gradient(90deg,#6B8CFF 0%, #7CC7FF 50%, #8B5CF6 100%)",
                }}
              >
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="relative overflow-hidden">
          {/* big soft gradient background like screenshot */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-[420px] md:h-[520px] lg:h-[640px] -z-10"
            style={{
              background:
                "radial-gradient(800px 400px at 10% 20%, rgba(139,92,246,0.12), transparent 12%), radial-gradient(600px 300px at 90% 30%, rgba(124,199,255,0.10), transparent 12%), linear-gradient(180deg,#f8fbff 0%, #f3f6ff 30%, rgba(120,100,250,0.03) 100%)",
            }}
          />

          <div className="mx-auto max-w-7xl px-6 pt-24 pb-12 md:pt-32 md:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left: Text */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-3 rounded-full bg-white/50 px-3 py-1 text-xs font-medium text-indigo-700 mb-6 shadow-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" className="opacity-90">
                    <path fill="#6B8CFF" d="M12 2L14.09 8.26L20.97 8.27L15.8 11.97L17.9 18.23L12 14.53L6.09 18.24L8.19 11.97L3.03 8.27L9.91 8.26L12 2Z" />
                  </svg>
                  The future of networking
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-[64px] leading-tight font-extrabold tracking-tight text-slate-900">
                  Your Smart Digital <span className="bg-clip-text text-transparent" style={{background: "linear-gradient(90deg,#6B8CFF,#8B5CF6)"}}>Business Card</span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg text-slate-600">
                  Share your contact instantly with QR or NFC, capture leads automatically, and follow up with high-quality templates — all inside a lightweight CRM built for modern professionals.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                  <button
                    onClick={() => onNavigate("signup")}
                    className="inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-2xl"
                    style={{
                      background:
                        "linear-gradient(90deg,#6B8CFF 0%, #7CC7FF 55%, #8B5CF6 100%)",
                    }}
                  >
                    Get Started Free
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <button
                    onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium bg-white border border-slate-200 shadow-sm"
                  >
                    <Play className="h-4 w-4 text-indigo-600" />
                    Watch demo
                  </button>
                </div>

                <p className="mt-4 text-sm text-slate-500">
                  Trusted by <strong>10,000+</strong> professionals worldwide — secure, private, and fast.
                </p>
              </div>

              {/* Right: Visual / card preview */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative w-[340px] sm:w-[380px] md:w-[420px]">
                  {/* floating gradient shape */}
                  <div className="absolute -left-10 -top-10 w-56 h-56 rounded-3xl filter blur-3xl opacity-70" style={{background: "linear-gradient(135deg,#6B8CFF,#8B5CF6)"}} />
                  <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-2xl filter blur-2xl opacity-60" style={{background: "linear-gradient(135deg,#7CC7FF,#6B8CFF)"}} />

                  <div className="relative rounded-3xl bg-white border border-slate-100 shadow-[0_30px_60px_rgba(13,14,23,0.07)] overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="h-16 w-16 rounded-2xl flex items-center justify-center font-bold text-lg text-white" style={{background: "linear-gradient(135deg,#6B8CFF,#8B5CF6)"}}>
                          NV
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-slate-900">Nitesh Vohra</div>
                          <div className="text-xs text-slate-500">Founder, CardSync</div>
                        </div>
                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
                        <div className="rounded-xl bg-slate-50 p-3">
                          <div className="text-[11px] text-slate-500">Phone</div>
                          <div className="text-sm font-medium text-slate-900">+91 ••••• ••••</div>
                        </div>
                        <div className="rounded-xl bg-slate-50 p-3">
                          <div className="text-[11px] text-slate-500">Email</div>
                          <div className="text-sm font-medium text-slate-900">hello@cardsync.app</div>
                        </div>
                      </div>

                      <div className="mt-5 flex gap-3">
                        <button className="flex-1 rounded-full bg-slate-900 px-3 py-2 text-xs font-semibold text-white">Share QR</button>
                        <button className="flex-1 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-900">Save</button>
                      </div>

                      <div className="mt-4 rounded-xl bg-gradient-to-r from-indigo-700 to-sky-500 p-3 text-white text-xs flex items-center justify-between">
                        <div>
                          <div className="text-[10px] uppercase opacity-90">Live analytics</div>
                          <div className="text-sm font-semibold">124 views • 38 saves</div>
                        </div>
                        <div className="h-8 w-12 rounded-md bg-white/20" />
                      </div>
                    </div>
                  </div>

                  {/* small caption */}
                  <div className="mt-4 text-[12px] text-slate-500 text-center">
                    Multiple templates • QR & NFC • Track engagement
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Everything you need to network smarter</h2>
              <p className="mt-3 text-slate-500 max-w-2xl mx-auto">Powerful features designed for modern professionals who value meaningful connections.</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Instant Sharing", "Share your card via QR, NFC or link — recipients don't need an app."],
                ["Track Engagement", "See who viewed your card, when, and where. Actionable analytics."],
                ["Smart Follow-ups", "One-tap WhatsApp & email templates to convert leads faster."],
                ["Secure & Private", "Data encrypted in transit and at rest. Full privacy controls."],
                ["Works Everywhere", "Optimized for mobile, tablet and desktop."],
                ["Team Management", "Share cards and contacts across your team with access controls."],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition">
                  <div className="h-12 w-12 rounded-lg mb-4 flex items-center justify-center" style={{background: "linear-gradient(135deg,#6B8CFF,#8B5CF6)"}}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 12h18" stroke="white" strokeWidth="1.6" strokeLinecap="round"/></svg>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
                  <p className="text-sm text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEMPLATES CAROUSEL (simple scroll) */}
        <section className="bg-slate-50 border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-slate-900">Beautiful card templates</h3>
              <p className="text-sm text-slate-500">Choose a style that fits your brand</p>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
              {["Modern Blue", "Minimal White", "Luxury Dark", "Gradient Glow", "Corporate"].map((name, idx) => (
                <div key={name} className="min-w-[260px] snap-start rounded-xl p-4 shadow-lg" style={{background: idx % 2 === 0 ? "linear-gradient(135deg,#6B8CFF,#8B5CF6)" : "linear-gradient(135deg,#ffffff,#f1f5ff)"}}>
                  <div className={`p-4 rounded-lg ${idx % 2 === 0 ? "text-white" : "text-slate-900"}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`h-12 w-12 rounded-xl flex items-center justify-center font-bold`} style={{background: idx % 2 === 0 ? "rgba(255,255,255,0.12)" : "#eef2ff"}}>
                        JD
                      </div>
                      <div>
                        <div className="font-semibold">{name} Template</div>
                        <div className="text-[12px] opacity-80">Product Designer</div>
                      </div>
                    </div>
                    <div className="text-[12px] opacity-90">{idx % 2 === 0 ? "Phone • Email • Website • Social" : "Phone • Email • Website"}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL / TRUST */}
        <section className="bg-white border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <div className="text-sm text-slate-500 mb-3">Trusted by</div>
              <div className="flex flex-wrap items-center gap-6">
                <div className="opacity-60">Acme</div>
                <div className="opacity-60">BlueWave</div>
                <div className="opacity-60">StudioPro</div>
                <div className="opacity-60">FinCore</div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-slate-50 rounded-2xl p-6">
              <div className="text-lg font-semibold text-slate-900">“CardSync changed how we network — leads doubled and follow-ups are effortless.”</div>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-md bg-indigo-600 flex items-center justify-center text-white font-semibold">AM</div>
                <div>
                  <div className="text-sm font-medium">Aman Mehta</div>
                  <div className="text-xs text-slate-500">Growth Lead, StudioPro</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-r from-indigo-600 to-sky-500 text-white">
          <div className="mx-auto max-w-7xl px-6 py-12 text-center">
            <h3 className="text-2xl md:text-3xl font-extrabold">Ready to transform your networking?</h3>
            <p className="mt-2 text-sm opacity-90">Set up your first card in under 2 minutes — share instantly, follow up smarter.</p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={() => onNavigate("signup")}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-700 shadow-xl"
              >
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => onNavigate("login")}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-medium text-white"
              >
                Login
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md" style={{background: "linear-gradient(135deg,#6B8CFF,#8B5CF6)"}} />
            <div>
              <div className="font-semibold">CardSync</div>
              <div className="text-xs text-slate-500">Secure digital business cards & CRM</div>
            </div>
          </div>

          <div className="flex gap-6 text-sm text-slate-600">
            <a className="hover:text-slate-900">Product</a>
            <a className="hover:text-slate-900">Company</a>
            <a className="hover:text-slate-900">Pricing</a>
            <a className="hover:text-slate-900">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;