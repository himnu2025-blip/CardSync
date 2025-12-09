// src/contexts/ThemeContext.tsx
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useAuth } from "./AuthContext";
import {
  getUserTheme,
  setUserTheme,
  type Theme,
} from "@/lib/userPreferences";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setThemeExplicit: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [theme, setTheme] = useState<Theme>("dark");

  // Apply theme to <html> for Tailwind "dark" support (optional)
  const applyThemeToDocument = (t: Theme) => {
    if (typeof document === "undefined") return;
    if (t === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Load theme when user changes (or on first load)
  useEffect(() => {
    let cancelled = false;

    const initTheme = async () => {
      try {
        if (user) {
          const saved = await getUserTheme(user.id);
          if (!cancelled && saved) {
            setTheme(saved);
            applyThemeToDocument(saved);
            return;
          }
        }

        // Guest or no saved theme -> localStorage or default
        if (typeof window !== "undefined") {
          const local = window.localStorage.getItem("cardsync_theme");
          if (local === "light" || local === "dark") {
            if (!cancelled) {
              setTheme(local);
              applyThemeToDocument(local);
              return;
            }
          }
        }

        // Default if nothing found
        if (!cancelled) {
          setTheme("dark");
          applyThemeToDocument("dark");
        }
      } catch (err) {
        console.error("Failed to init theme", err);
      }
    };

    initTheme();

    return () => {
      cancelled = true;
    };
  }, [user]);

  const persistTheme = (next: Theme) => {
    if (user) {
      setUserTheme(user.id, next).catch((err) =>
        console.error("Failed to save theme in Supabase", err)
      );
    } else if (typeof window !== "undefined") {
      window.localStorage.setItem("cardsync_theme", next);
    }
  };

  const setThemeExplicit = (next: Theme) => {
    setTheme(next);
    applyThemeToDocument(next);
    persistTheme(next);
  };

  const toggleTheme = () => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      applyThemeToDocument(next);
      persistTheme(next);
      return next;
    });
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, setThemeExplicit }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}