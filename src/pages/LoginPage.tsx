import { useState } from "react";
import { ArrowLeft, Mail, Lock, Sparkles, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Page } from "@/App";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { authService } from "@/lib/authService";
import { showToast } from "@/hooks/useToast";

interface LoginPageProps {
  mode: "login" | "signup";
  onNavigate: (page: Page) => void;
}

export default function LoginPage({ mode, onNavigate }: LoginPageProps) {
  const { login } = useAuth();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const rootClass =
    "min-h-screen " +
    (isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900");

  const [isSignup, setIsSignup] = useState(mode === "signup");
  const [step, setStep] = useState<"email" | "otp" | "complete">("email");
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [otp, setOtp] = useState("");

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await authService.sendOtp(email);
      showToast("OTP sent to your email", "success");
      setStep("otp");
    } catch (error: any) {
      showToast(error.message || "Failed to send OTP", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !otp || !password || !fullName) return;
    setLoading(true);
    try {
      const user = await authService.verifyOtpAndSetPassword(
        email,
        otp,
        password,
        fullName
      );
      if (user) {
        login(authService.mapUser(user));
        onNavigate("dashboard");
      }
    } catch (error: any) {
      showToast(error.message || "Verification failed", "error");
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setLoading(true);
    try {
      const user = await authService.signInWithPassword(email, password);
      if (user) {
        login(authService.mapUser(user));
        onNavigate("dashboard");
      }
    } catch (error: any) {
      showToast(error.message || "Login failed", "error");
      setLoading(false);
    }
  };

  const formSubmitHandler =
    isSignup && step === "email"
      ? handleSendOtp
      : isSignup && step === "otp"
      ? handleVerifyOtp
      : handleLogin;

  const primaryButtonLabel = loading
    ? "Please wait..."
    : isSignup
    ? step === "email"
      ? "Send Verification Code"
      : "Create Account"
    : "Sign In";

  return (
    <div className={rootClass}>
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-950/80 p-6 shadow-xl">
          <button
            type="button"
            onClick={() => onNavigate("landing")}
            className="mb-6 inline-flex items-center gap-2 text-xs text-slate-400 hover:text-slate-100"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back
          </button>

          <div className="mb-6 space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-300">
              <Sparkles className="h-3 w-3 text-blue-400" />
              CardSync
            </div>
            <h1 className="text-xl font-semibold">
              {isSignup
                ? step === "otp"
                  ? "Verify Your Email"
                  : "Create Account"
                : "Welcome Back"}
            </h1>
            <p className="text-xs text-slate-400">
              {isSignup
                ? step === "otp"
                  ? "Enter the code sent to your email"
                  : "Start creating your digital business card"
                : "Sign in to manage your digital cards and contacts"}
            </p>
          </div>

          <form onSubmit={formSubmitHandler} className="space-y-4">
            {(!isSignup || step === "email") && (
              <>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-xs text-slate-200">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <Input
                      id="email"
                      type="email"
                      className="pl-9 text-sm"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {!isSignup && (
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="password"
                      className="text-xs text-slate-200"
                    >
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <Input
                        id="password"
                        type="password"
                        className="pl-9 text-sm"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                )}
              </>
            )}

            {isSignup && step === "otp" && (
              <>
                <div className="space-y-1.5">
                  <Label htmlFor="otp" className="text-xs text-slate-200">
                    Verification Code
                  </Label>
                  <Input
                    id="otp"
                    type="text"
                    maxLength={6}
                    className="text-sm tracking-[0.3em]"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                  <p className="text-[11px] text-slate-400">
                    Check your email for the verification code.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="fullName"
                    className="text-xs text-slate-200"
                  >
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <Input
                      id="fullName"
                      type="text"
                      className="pl-9 text-sm"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="passwordSignup"
                    className="text-xs text-slate-200"
                  >
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <Input
                      id="passwordSignup"
                      type="password"
                      className="pl-9 text-sm"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="mt-2 w-full rounded-lg text-sm font-medium"
            >
              {primaryButtonLabel}
            </Button>
          </form>

          {step === "email" && (
            <div className="mt-4 text-center text-xs text-slate-400">
              {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                type="button"
                onClick={() => {
                  setIsSignup(!isSignup);
                  setStep("email");
                  setEmail("");
                  setPassword("");
                  setFullName("");
                  setOtp("");
                }}
                className="font-medium text-blue-400 hover:underline"
              >
                {isSignup ? "Sign In" : "Sign Up"}
              </button>
            </div>
          )}

          {isSignup && step === "otp" && (
            <div className="mt-3 text-center">
              <button
                type="button"
                onClick={() => {
                  setStep("email");
                  setOtp("");
                }}
                className="text-xs text-slate-400 hover:text-slate-100"
              >
                ← Back to email
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}