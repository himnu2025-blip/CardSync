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
  PieChart,
  Tag,
  Sun,
  Moon,
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
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const t = setInterval(
      () => setActiveFeatureIdx((s) => (s + 1) % featuresData.length),
      3000
    );
    return () => clearInterval(t);
  }, []);

  const activeFeature = featuresData[activeFeatureIdx];
  const ActiveIcon = activeFeature.icon;

  const isDark = theme === "dark";

  const rootClass =
    "min-h-screen transition-colors duration-300 " +
    (isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900");

  return (
    <div className={rootClass}>
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
          {/* Theme toggle */}
          <button
            type="button"
            onClick={() =>
              setTheme((prev) => (prev === "dark" ? "light" : "dark"))
            }
            className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs transition-colors ${
              isDark
                ? "border-slate-700 bg-slate-900 text-slate-100 hover:bg-slate-800"
                : "border-slate-200 bg-white text-slate-900 hover:bg-slate-100"
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          <button
            type="button"
            onClick={() => onNavigate("login")}
            className={
              "text-xs font-medium transition-colors " +
              (isDark
                ? "text-slate-300 hover:text-white"
                : "text-slate-600 hover:text-slate-900")
            }
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
          <p
            className={
              "text-xs uppercase tracking-[0.25em] " +
              (isDark ? "text-blue-300" : "text-blue-500")
            }
          >
            The future of networking
          </p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Your Smart Digital{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Business Card
            </span>
          </h1>
          <p
            className={
              "max-w-xl text-sm " +
              (isDark ? "text-slate-300" : "text-slate-600")
            }
          >
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
              className={
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-colors " +
                (isDark
                  ? "border-slate-700 bg-white/5 text-slate-100 hover:bg-white/10"
                  : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50")
              }
            >
              <Play className="h-3.5 w-3.5" />
              Watch demo
            </button>
          </div>

          <p
            className={
              "text-xs " +
              (isDark ? "text-slate-400" : "text-slate-500")
            }
          >
            Trusted by 10,000+ professionals worldwide — secure, private,
            and fast.
          </p>

          <div
            className={
              "flex items-center gap-4 text-[11px] " +
              (isDark ? "text-slate-400" : "text-slate-500")
            }
          >
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
              <div
                className={
                  "space-y-4 rounded-3xl p-5 " +
                  (isDark ? "bg-slate-950/95" : "bg-white")
                }
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div
                      className={
                        "inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-[0.25em] " +
                        (isDark ? "text-blue-300" : "text-blue-500")
                      }
                    >
                      Live
                    </div>
                    <div
                      className={
                        "text-sm font-semibold " +
                        (isDark ? "text-slate-100" : "text-slate-900")
                      }
                    >
                      Nitesh Vohra
                    </div>
                    <p
                      className={
                        "text-xs " +
                        (isDark ? "text-slate-400" : "text-slate-500")
                      }
                    >
                      Founder, CardSync
                    </p>
                  </div>
                  <div
                    className={
                      "flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold " +
                      (isDark
                        ? "bg-blue-500/20 text-blue-100"
                        : "bg-blue-100 text-blue-700")
                    }
                  >
                    NV
                  </div>
                </div>

                <div className="grid gap-2 text-[11px]">
                  <div className="flex items-center justify-between">
                    <span
                      className={
                        isDark ? "text-slate-400" : "text-slate-500"
                      }
                    >
                      Tap, scan or share
                    </span>
                    <span
                      className={
                        "rounded-full px-2 py-0.5 text-[10px] " +
                        (isDark
                          ? "bg-slate-900 text-slate-200"
                          : "bg-slate-100 text-slate-700")
                      }
                    >
                      No app needed
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div
                      className={
                        "rounded-lg p-2 " +
                        (isDark
                          ? "bg-slate-900/80"
                          : "bg-slate-100 text-slate-800")
                      }
                    >
                      <div
                        className={
                          "text-[10px] " +
                          (isDark
                            ? "text-slate-400"
                            : "text-slate-500")
                        }
                      >
                        Phone
                      </div>
                      <div
                        className={
                          "text-[11px] font-medium " +
                          (isDark
                            ? "text-slate-100"
                            : "text-slate-800")
                        }
                      >
                        +91 ••••• ••••
                      </div>
                    </div>
                    <div
                      className={
                        "rounded-lg p-2 " +
                        (isDark
                          ? "bg-slate-900/80"
                          : "bg-slate-100 text-slate-800")
                      }
                    >
                      <div
                        className={
                          "text-[10px] " +
                          (isDark
                            ? "text-slate-400"
                            : "text-slate-500")
                        }
                      >
                        Email
                      </div>
                      <div
                        className={
                          "text-[11px] font-medium " +
                          (isDark
                            ? "text-slate-100"
                            : "text-slate-800")
                        }
                      >
                        hello@cardsync.app
                      </div>
                    </div>
                  </div>

                  <div
                    className={
                      "flex items-center justify-between text-[10px] " +
                      (isDark
                        ? "text-slate-400"
                        : "text-slate-500")
                    }
                  >
                    <span>124 views • 38 saves</span>
                    <span
                      className={
                        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] " +
                        (isDark
                          ? "bg-slate-900 text-slate-200"
                          : "bg-slate-100 text-slate-700")
                      }
                    >
                      <ActiveIcon className="h-3 w-3" />
                      {activeFeature.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* tiny analytics pill */}
            <div
              className={
                "pointer-events-none absolute -bottom-6 left-6 rounded-full border px-3 py-1 text-[10px] shadow-lg " +
                (isDark
                  ? "border-slate-800 bg-slate-950/95 text-slate-300"
                  : "border-slate-200 bg-white text-slate-600")
              }
            >
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
        <h2
          className={
            "mb-2 text-sm font-semibold " +
            (isDark ? "text-slate-100" : "text-slate-900")
          }
        >
          Everything you need to network smarter
        </h2>
        <p
          className={
            "mb-6 text-xs " +
            (isDark ? "text-slate-400" : "text-slate-500")
          }
        >
          Powerful features designed for modern professionals who value
          meaningful connections.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {featuresData.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={
                  "rounded-xl border p-4 transition-colors " +
                  (isDark
                    ? "border-slate-800 bg-slate-950/80"
                    : "border-slate-200 bg-white")
                }
              >
                <div
                  className={
                    "mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg " +
                    (isDark
                      ? "bg-slate-900 text-slate-100"
                      : "bg-slate-100 text-slate-800")
                  }
                >
                  <Icon className="h-4 w-4" />
                </div>
                <h3
                  className={
                    "text-sm font-semibold " +
                    (isDark ? "text-slate-100" : "text-slate-900")
                  }
                >
                  {f.title}
                </h3>
                <p
                  className={
                    "mt-1 text-xs " +
                    (isDark ? "text-slate-400" : "text-slate-600")
                  }
                >
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA footer */}
        <div
          className={
            "mt-10 flex flex-col items-center gap-3 rounded-2xl border px-4 py-6 text-center transition-colors " +
            (isDark
              ? "border-slate-800 bg-gradient-to-r from-blue-500/10 via-cyan-400/5 to-purple-500/10"
              : "border-slate-200 bg-gradient-to-r from-blue-50 via-cyan-50 to-purple-50")
          }
        >
          <p
            className={
              "text-sm font-semibold " +
              (isDark ? "text-slate-100" : "text-slate-900")
            }
          >
            Ready to transform your networking?
          </p>
          <p
            className={
              "max-w-xl text-xs " +
              (isDark ? "text-slate-300" : "text-slate-600")
            }
          >
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
              className={
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-colors " +
                (isDark
                  ? "border-white/20 bg-transparent text-slate-100 hover:bg-white/10"
                  : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50")
              }
            >
              Sign In
            </button>
          </div>
        </div>

        {/* Simple footer */}
        <footer
          className={
            "mt-10 border-t pt-6 text-[11px] " +
            (isDark
              ? "border-slate-800 text-slate-500"
              : "border-slate-200 text-slate-500")
          }
        >
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