"use client";

import { createContext, useContext, useEffect, useRef, useSyncExternalStore, useCallback } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: "light",
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

function getThemeSnapshot(): Theme {
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getServerSnapshot(): Theme {
  return "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const listenersRef = useRef(new Set<() => void>());

  const subscribe = useCallback((callback: () => void) => {
    listenersRef.current.add(callback);
    return () => { listenersRef.current.delete(callback); };
  }, []);

  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
    listenersRef.current.forEach((cb) => cb());
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
