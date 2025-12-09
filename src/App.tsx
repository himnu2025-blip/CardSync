import { useState, useEffect } from "react";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { authService } from "./lib/authService";
import { ToastContainer } from "./components/ui/toast";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import CardBuilderPage from "./pages/CardBuilderPage";
import CRMPage from "./pages/CRMPage";
import ContactDetailPage from "./pages/ContactDetailPage";
import PublicCardPage from "./pages/PublicCardPage";
import SettingsPage from "./pages/SettingsPage";

export type Page =
  | "landing"
  | "login"
  | "signup"
  | "dashboard"
  | "card-builder"
  | "crm"
  | "contact-detail"
  | "public-card"
  | "settings";

function AppContent() {
  const { user, loading } = useAuth();
  const [currentPage, setCurrentPage] = useState<Page>("landing");
  const [selectedContactId, setSelectedContactId] = useState<string | null>(
    null
  );

  // Auto-redirect based on auth state
  useEffect(() => {
    if (user && currentPage === "landing") {
      setCurrentPage("dashboard");
    } else if (
      !user &&
      !loading &&
      !["landing", "login", "signup", "public-card"].includes(currentPage)
    ) {
      setCurrentPage("landing");
    }
  }, [user, loading, currentPage]);

  const handleLogout = async () => {
    try {
      await authService.signOut();
      setCurrentPage("landing");
    } catch (error: any) {
      console.error("Logout failed:", error.message);
    }
  };

  const handleViewContact = (contactId: string) => {
    setSelectedContactId(contactId);
    setCurrentPage("contact-detail");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "landing":
        return <LandingPage onNavigate={setCurrentPage} />;
      case "login":
        return <LoginPage mode="login" onNavigate={setCurrentPage} />;
      case "signup":
        return <LoginPage mode="signup" onNavigate={setCurrentPage} />;
      case "dashboard":
        return <DashboardPage onNavigate={setCurrentPage} />;
      case "card-builder":
        return <CardBuilderPage onNavigate={setCurrentPage} />;
      case "crm":
        return (
          <CRMPage
            onNavigate={setCurrentPage}
            onViewContact={handleViewContact}
          />
        );
      case "contact-detail":
        return (
          <ContactDetailPage
            contactId={selectedContactId}
            onNavigate={setCurrentPage}
          />
        );
      case "public-card":
        return <PublicCardPage onNavigate={setCurrentPage} />;
      case "settings":
        return (
          <SettingsPage
            onNavigate={setCurrentPage}
            onLogout={handleLogout}
          />
        );
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-100">
        <div className="text-sm text-slate-400">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <ToastContainer />
      {renderPage()}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;