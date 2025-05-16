import { ReactNode, useEffect } from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Force dark mode
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Apply dark mode to the document
    const root = window.document.documentElement;
    root.classList.remove("light");
    root.classList.add("dark");
  }, []);

  return <>{children}</>;
}
