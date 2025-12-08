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

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

const featuresData: { icon: React.ElementType; title: string; desc: string }[] =
  [
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

    // ✅ UPDATED FEATURE 1
    {
      icon: Users,
      title: "Contact Management",
      desc: "Every connection flows automatically into your CRM with notes, tags, and activity.",
    },

    // ✅ UPDATED FEATURE 2
    {
      icon: Smartphone,
      title: "Customizable Cards",
      desc: "Choose from premium templates, layouts and colors to match your brand perfectly.",
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
    const t = setInterval(() => {
      setActiveFeatureIdx((s) => (s + 1) % featuresData.length);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  const activeFeature = featuresData[activeFeatureIdx];

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <style>{`
        .gradient-animate {
          background-image: linear-gradient(90deg, #6B8CFF 0%, #7CC7FF 35%, #8B5CF6 70%, #EC4899 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
          animation: gradientShift 6s linear infinite;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes floatUp {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .float-anim { animation: floatUp 5s ease-in-out infinite; }

        @keyframes pop {
          0% { transform: translateY(0) scale(1); opacity: 0.98; }
          50% { transform: translateY(-6px) scale(1.02); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 0.98; }
        }
        .live-pop { animation: pop 3s ease-in-out infinite; }

        .hero-top-padding { padding-top: 3.2rem; }
      `}</style>

      <header className="sticky top-0 z-40">
        <div className="backdrop-blur-sm bg-white/40 border-b border-white/30">
          <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
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
                    "linear-gradient(90deg,#6B8CFF 0%, #7CC7FF 55%, #8B5CF6 100%)",
                }}
              >
                Get Started — It's Free
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-x-0 -top-10 h-[420px] md:h-[520px] lg:h-[560px] -z-10"
            style={{
              background:
                "radial-gradient(700px 350px at 12% 20%, rgba(139,92,246,0.11), transparent 12%), radial-gradient(520px 260px at 86% 30%, rgba(124,199,255,0.10), transparent 12%), linear-gradient(180deg,#f8fbff 0%, #f3f6ff 30%, rgba(120,100,250,0.03) 100%)",
            }}
          />

          <div className="mx-auto max-w-7xl px-6 hero-top-padding">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-3 rounded-full bg-white/50 px-3 py-1 text-xs font-medium text-indigo-700 mb-4 shadow-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" className="opacity-90">
                    <path fill="#6B8CFF" d="M12 2L14.09 8.26L20.97 8.27L15.8 11.97L17.9 18.23L12 14.53L6.09 18.24L8.19 11.97L3.03 8.27L9.91 8.26L12 2Z" />
                  </svg>
                  The future of networking
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-[64px] leading-tight font-extrabold tracking-tight text-slate-900">
                  Your Smart Digital{" "}
                  <span className="gradient-animate" aria-hidden>
                    Business Card
                  </span>
                </h1>

                <div className="mt-4 max-w-2xl text-lg text-slate-600">
                  <strong className="font-medium">Not just a card — a complete business solution.</strong>{" "}
                  Share your contact instantly with QR or NFC, capture leads automatically, and follow up with high-quality templates —
                  <strong> all inside a lightweight and powerful CRM built for modern professionals.</strong>
                </div>

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
                    onClick={() => window.scrollTo({ top: 820, behavior: "smooth" })}
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

              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative w-[340px] sm:w-[380px] md:w-[440px]">
                  <div
                    className="absolute -left-12 -top-12 w-64 h-64 rounded-3xl filter blur-3xl opacity-70 float-anim"
                    style={{ background: "linear-gradient(135deg,#6B8CFF,#8B5CF6)" }}
                  />
                  <div
                    className="absolute -right-8 -bottom-8 w-44 h-44 rounded-2xl filter blur-2xl opacity-60 float-anim"
                    style={{ background: "linear-gradient(135deg,#7CC7FF,#6B8CFF)" }}
                  />

                  <div
                    className="relative rounded-3xl p-5 shadow-[0_26px_50px_rgba(13,14,23,0.06)] bg-white border border-slate-100 overflow-hidden live-pop"
                    style={{ transform: "translateZ(0)" }}
                  >
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <div>Multiple templates • QR & NFC</div>
                      <div className="text-xs text-indigo-600 font-medium">Live</div>
                    </div>

                    <div className="mt-4 flex gap-4 items-start">
                      <div className="flex-1">
                        <div
                          className="relative rounded-xl overflow-hidden transform-gpu transition-transform duration-700"
                          style={{ boxShadow: "0 18px 40px rgba(59,58,88,0.06)" }}
                        >
                          <div
                            className="p-4"
                            style={{
                              background: "linear-gradient(135deg,#6B8CFF,#8B5CF6)",
                            }}
                          >
                            <div className="flex items-center gap-3">
                              <div className="h-12 w-12 rounded-lg flex items-center justify-center text-white font-bold">
                                NV
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-white">
                                  Nitesh Vohra
                                </div>
                                <div className="text-[12px] text-white/90">
                                  Founder, CardSync
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className="absolute -right-6 -top-6 w-20 h-20 rounded-full opacity-40"
                            style={{
                              background: "linear-gradient(135deg,#8B5CF6,#6B8CFF)",
                              filter: "blur(10px)",
                            }}
                          />
                        </div>

                        <div className="mt-3 text-[12px] text-slate-500">
                          Tap, scan or share — no app needed
                        </div>
                      </div>

                      <div className="w-[180px]">
                        <div className="rounded-xl bg-slate-50 p-3">
                          <div className="text-[11px] text-slate-500">Phone</div>
                          <div className="text-sm font-medium text-slate-900">
                            +91 ••••• ••••
                          </div>

                          <div className="mt-3 text-[11px] text-slate-500">
                            Email
                          </div>
                          <div className="text-sm font-medium text-slate-900">
                            hello@cardsync.app
                          </div>

                          <div className="mt-4 flex gap-2">
                            <button className="flex-1 rounded-full bg-slate-900 px-3 py-2 text-xs font-semibold text-white">
                              Share QR
                            </button>
                            <button className="flex-1 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-900">
                              Save
                            </button>
                          </div>

                          <div className="mt-4 rounded-lg p-3 text-xs text-white" style={{ background: "linear-gradient(90deg,#6B8CFF,#8B5CF6)" }}>
                            <div className="text-[10px] uppercase opacity-90">
                              Live analytics
                            </div>
                            <div className="text-sm font-semibold">124 views • 38 saves</div>
                          </div>
                        </div>

                        <div className="mt-3 rounded-md p-3 text-xs border border-slate-100 bg-white">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-md flex items-center justify-center" style={{ background: "linear-gradient(135deg,#6B8CFF,#8B5CF6)" }}>
                              {React.createElement(activeFeature.icon, { className: "h-4 w-4 text-white" })}
                            </div>
                            <div>
                              <div className="text-[13px] font-semibold text-slate-900">
                                {activeFeature.title}
                              </div>
                              <div className="text-[12px] text-slate-500">
                                {activeFeature.desc}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 text-[12px] text-slate-500 text-center">
                      A single card that becomes a complete business solution.
                    </div>
                  </div>

                  <div
                    className="absolute -right-6 -top-6 float-anim opacity-30 w-20 h-20 rounded-full"
                    style={{ background: "linear-gradient(135deg,#8B5CF6,#6B8CFF)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                Everything you need to network smarter
              </h2>
              <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
                Powerful features designed for modern professionals who value meaningful connections.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuresData.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition">
                    <div className="mb-4 inline-flex items-center justify-center rounded-lg h-12 w-12" style={{ background: "linear-gradient(135deg,#6B8CFF,#8B5CF6)" }}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{f.title}</h3>
                    <p className="text-sm text-slate-600">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-slate-900">Beautiful card templates</h3>
              <p className="text-sm text-slate-500">Choose a style that fits your brand</p>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
              {["Modern Blue", "Minimal White", "Luxury Dark", "Gradient Glow", "Corporate"].map((name, idx) => (
                <div key={name} className="min-w-[260px] snap-start rounded-xl p-4 shadow-lg" style={{ background: idx % 2 === 0 ? "linear-gradient(135deg,#6B8CFF,#8B5CF6)" : "linear-gradient(135deg,#ffffff,#f1f5ff)" }}>
                  <div className={`p-4 rounded-lg ${idx % 2 === 0 ? "text-white" : "text-slate-900"}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`h-12 w-12 rounded-xl flex items-center justify-center font-bold`} style={{ background: idx % 2 === 0 ? "rgba(255,255,255,0.12)" : "#eef2ff" }}>
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
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/20"
              >
                Sign In
              </button>
            </div>
          </div>
        </section>

        <footer className="bg-slate-900 text-slate-400">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-semibold text-white mb-3">Product</h4>
                <ul className="space-y-2 text-sm">
                  <li><button onClick={() => onNavigate("signup")} className="hover:text-white">Features</button></li>
                  <li><button onClick={() => onNavigate("signup")} className="hover:text-white">Pricing</button></li>
                  <li><button onClick={() => onNavigate("signup")} className="hover:text-white">Templates</button></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><button onClick={() => onNavigate("signup")} className="hover:text-white">About</button></li>
                  <li><button onClick={() => onNavigate("signup")} className="hover:text-white">Blog</button></li>
                  <li><button onClick={() => onNavigate("signup")} className="hover:text-white">Careers</button></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Support</h4>
                <ul className="space-y-2 text-sm">
                  <li><button onClick={() => onNavigate("signup")} className="hover:text-white">Help Center</button></li>
                  <li><button onClick={() => onNavigate("signup")} className="hover:text-white">Contact</button></li>
                  <li><button onClick={() => onNavigate("signup")} className="hover:text-white">Terms</button></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Connect</h4>
                <ul className="space-y-2 text-sm">
                  <li><button className="hover:text-white">Twitter</button></li>
                  <li><button className="hover:text-white">LinkedIn</button></li>
                  <li><button className="hover:text-white">Instagram</button></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
              <p>&copy; 2024 CardSync. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default LandingPage;
