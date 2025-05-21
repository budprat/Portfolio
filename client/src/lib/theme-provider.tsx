import { ReactNode, useEffect } from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Force light mode
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Apply light mode to the document
    const root = window.document.documentElement;
    root.classList.remove("dark");
    root.classList.add("light");
  }, []);

  return <>{children}</>;
}
