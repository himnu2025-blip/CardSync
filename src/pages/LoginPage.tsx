import { useState } from 'react';
import { ArrowLeft, Mail, Lock, Sparkles, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Page } from '@/App';
import { useAuth } from '@/contexts/AuthContext';
import { authService } from '@/lib/authService';
import { showToast } from '@/hooks/useToast';

interface LoginPageProps {
  mode: 'login' | 'signup';
  onNavigate: (page: Page) => void;
}

export default function LoginPage({ mode, onNavigate }: LoginPageProps) {
  const { login } = useAuth();
  const [isSignup, setIsSignup] = useState(mode === 'signup');
  const [step, setStep] = useState<'email' | 'otp' | 'complete'>('email');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [otp, setOtp] = useState('');

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      await authService.sendOtp(email);
      showToast('OTP sent to your email', 'success');
      setStep('otp');
    } catch (error: any) {
      showToast(error.message || 'Failed to send OTP', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !otp || !password || !fullName) return;

    setLoading(true);
    try {
      const user = await authService.verifyOtpAndSetPassword(email, otp, password, fullName);
      if (user) {
        login(authService.mapUser(user));
        onNavigate('dashboard');
      }
    } catch (error: any) {
      showToast(error.message || 'Verification failed', 'error');
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
        onNavigate('dashboard');
      }
    } catch (error: any) {
      showToast(error.message || 'Login failed', 'error');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Button
          variant="ghost"
          onClick={() => onNavigate('landing')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center mb-2">
            {isSignup ? (step === 'otp' ? 'Verify Your Email' : 'Create Account') : 'Welcome Back'}
          </h1>
          <p className="text-muted-foreground text-center mb-8">
            {isSignup
              ? step === 'otp' 
                ? 'Enter the code sent to your email'
                : 'Start creating your digital business card'
              : 'Sign in to manage your digital cards'}
          </p>

          <form onSubmit={isSignup ? (step === 'email' ? handleSendOtp : handleVerifyOtp) : handleLogin} className="space-y-4">
            {(!isSignup || step === 'email') && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                {!isSignup && (
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                )}
              </>
            )}

            {isSignup && step === 'otp' && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="otp">Verification Code</Label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="Enter 6-digit code"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                    required
                  />
                  <p className="text-xs text-muted-foreground">Check your email for the verification code</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Your name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newPassword">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="newPassword"
                      type="password"
                      placeholder="Create a password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </>
            )}

            <Button type="submit" className="w-full gradient-primary h-11" disabled={loading}>
              {loading ? 'Please wait...' : (isSignup ? (step === 'email' ? 'Send Verification Code' : 'Create Account') : 'Sign In')}
            </Button>
          </form>

          <div className="mt-6 text-center">
            {step === 'email' && (
              <p className="text-sm text-muted-foreground">
                {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button
                  type="button"
                  onClick={() => {
                    setIsSignup(!isSignup);
                    setStep('email');
                    setEmail('');
                    setPassword('');
                    setFullName('');
                    setOtp('');
                  }}
                  className="text-primary hover:underline font-medium"
                >
                  {isSignup ? 'Sign In' : 'Sign Up'}
                </button>
              </p>
            )}

            {isSignup && step === 'otp' && (
              <button
                type="button"
                onClick={() => {
                  setStep('email');
                  setOtp('');
                }}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                ← Back to email
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
