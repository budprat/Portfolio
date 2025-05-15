import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: ReactNode;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

// Create context
const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

// Hook for using the theme context
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Initialize theme from localStorage if available, otherwise use system
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as Theme;
      return savedTheme || "system";
    }
    return "system";
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const root = window.document.documentElement;
    
    // Function to apply theme
    const applyTheme = (newTheme: Theme) => {
      root.classList.remove("light", "dark");
      
      if (newTheme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches 
          ? "dark" 
          : "light";
        root.classList.add(systemTheme);
      } else {
        root.classList.add(newTheme);
      }
    };
    
    // Apply theme initially
    applyTheme(theme);
    
    // Function to handle system preference changes
    const handleSystemPreferenceChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        root.classList.remove("light", "dark");
        root.classList.add(e.matches ? "dark" : "light");
      }
    };

    // Handle system theme preference changes
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    
    // Use the correct method based on browser support
    if (prefersDarkMode.addEventListener) {
      prefersDarkMode.addEventListener("change", handleSystemPreferenceChange);
    } else {
      // Fallback for Safari
      prefersDarkMode.addListener(handleSystemPreferenceChange);
    }

    // Cleanup
    return () => {
      if (prefersDarkMode.removeEventListener) {
        prefersDarkMode.removeEventListener("change", handleSystemPreferenceChange);
      } else {
        // Fallback for Safari
        prefersDarkMode.removeListener(handleSystemPreferenceChange);
      }
    };
  }, [theme]);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem("theme", newTheme);
      setTheme(newTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
