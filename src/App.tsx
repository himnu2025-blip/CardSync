import { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { authService } from './lib/authService';
import { ToastContainer } from './components/ui/toast';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import CardBuilderPage from './pages/CardBuilderPage';
import CRMPage from './pages/CRMPage';
import ContactDetailPage from './pages/ContactDetailPage';
import PublicCardPage from './pages/PublicCardPage';
import SettingsPage from './pages/SettingsPage';

export type Page =
  | 'landing'
  | 'login'
  | 'signup'
  | 'dashboard'
  | 'card-builder'
  | 'crm'
  | 'contact-detail'
  | 'public-card'
  | 'settings';

function AppContent() {
  const { user, loading } = useAuth();
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [selectedContactId, setSelectedContactId] = useState<string | null>(null);

  // AUTO-REDIRECT LOGIC
  useEffect(() => {
    if (user && currentPage === 'landing') {
      setCurrentPage('dashboard');
    } else if (
      !user &&
      !loading &&
      currentPage !== 'landing' &&
      currentPage !== 'login' &&
      currentPage !== 'signup' &&
      currentPage !== 'public-card'
    ) {
      setCurrentPage('landing');
    }
  }, [user, loading]);

  // LOGOUT HANDLER
  const handleLogout = async () => {
    try {
      await authService.signOut();
      setCurrentPage('landing');
    } catch (error: any) {
      console.error('Logout failed:', error.message);
    }
  };

  const handleViewContact = (contactId: string) => {
    setSelectedContactId(contactId);
    setCurrentPage('contact-detail');
  };

  // PAGE RENDERER
  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={setCurrentPage} />;

      case 'login':
        return <LoginPage mode="login" onNavigate={setCurrentPage} />;

      case 'signup':
        return <LoginPage mode="signup" onNavigate={setCurrentPage} />;

      case 'dashboard':
        return <DashboardPage onNavigate={setCurrentPage} />;

      case 'card-builder':
        return <CardBuilderPage onNavigate={setCurrentPage} />;

      case 'crm':
        return (
          <CRMPage
            onNavigate={setCurrentPage}
            onViewContact={handleViewContact}
          />
        );

      case 'contact-detail':
        return (
          <ContactDetailPage
            contactId={selectedContactId}
            onNavigate={setCurrentPage}
          />
        );

      case 'public-card':
        return <PublicCardPage onNavigate={setCurrentPage} />;

      case 'settings':
        return (
          <SettingsPage
            onNavigate={setCurrentPage}
            onLogout={handleLogout}
          />
        );

      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  // LOADING STATE
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return <div className="min-h-screen">{renderPage()}</div>;
}

function App() {
  return (
    <AuthProvider>
      <ToastContainer />
      <AppContent />
    </AuthProvider>
  );
}

export default App;