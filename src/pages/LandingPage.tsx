import { ArrowRight, QrCode, Users, Zap, Sparkles, Smartphone, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Page } from '@/App';
import SampleCardCarousel from '@/components/features/SampleCardCarousel';

interface LandingPageProps {
  onNavigate: (page: Page) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-md z-50">
        <div className="container-custom py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">CardSync</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" onClick={() => onNavigate('login')}>
              Login
            </Button>
            <Button onClick={() => onNavigate('signup')} className="gradient-primary">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Professional Networking Reimagined</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
              Smart Digital Business Card
              <br />
              <span className="gradient-text">& CRM Platform</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Share instantly. Track leads. Manage contacts effortlessly.
              The modern way to network and grow your professional connections.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => onNavigate('signup')} className="gradient-primary text-lg h-12 px-8">
                Create Your Card <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => onNavigate('login')} className="text-lg h-12 px-8">
                Login
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Cards Carousel */}
      <section className="py-12 bg-secondary/30">
        <div className="container-custom">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-foreground">
            Beautiful Card Templates
          </h2>
          <SampleCardCarousel />
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
            Everything You Need to Network Smarter
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Sparkles className="w-6 h-6" />}
              title="Customizable Cards"
              description="Create stunning business cards with multiple templates, colors, and layouts"
            />
            <FeatureCard
              icon={<QrCode className="w-6 h-6" />}
              title="QR Code & NFC"
              description="Share your card instantly via QR code scan or NFC tap technology"
            />
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="Contact Management"
              description="Organize contacts with tags, notes, and custom fields"
            />
            <FeatureCard
              icon={<BarChart3 className="w-6 h-6" />}
              title="Track Engagement"
              description="See who viewed your card and track your networking metrics"
            />
            <FeatureCard
              icon={<Smartphone className="w-6 h-6" />}
              title="Mobile Optimized"
              description="Works perfectly on all devices - desktop, tablet, and mobile"
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="Quick Follow-ups"
              description="WhatsApp and email templates for instant professional communication"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Ready to Transform Your Networking?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professionals using CardSync to grow their network
          </p>
          <Button size="lg" onClick={() => onNavigate('signup')} className="gradient-primary text-lg h-12 px-8">
            Get Started Free <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg gradient-primary flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold gradient-text">CardSync</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">About</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
