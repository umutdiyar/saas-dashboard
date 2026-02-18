import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Language = "tr" | "en";
export type ThemeMode = "system" | "light" | "dark";

type Settings = {
  language: Language;
  theme: ThemeMode;
  emailNotifications: boolean;
};

type SettingContextType = {
  settings: Settings;
  setLanguage: (l: Language) => void;
  setTheme: (t: ThemeMode) => void;
  setEmailNotifications: (v: boolean) => void;
};

const SettingsContext = createContext<SettingContextType | null>(null);

const STORAGE_KEY = "saas_settings";

function readInitial(): Settings {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      return JSON.parse(raw) as Settings;
    } catch {}
  }
  return { language: "tr", theme: "system", emailNotifications: true };
}

function applyTheme(theme: ThemeMode) {
  const root = document.documentElement;

  const resolved =
    theme === "system"
      ? window.matchMedia?.("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme;

  root.classList.remove("light", "dark");
  root.classList.add(resolved);
}

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<Settings>(() => readInitial());
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    applyTheme(settings.theme);
  }, [settings]);

  useEffect(() => {
    if (settings.theme !== "system") return;
    const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mq) return;

    const handler = () => applyTheme("system");
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, [settings.theme]);

  const value = useMemo<SettingContextType>(
    () => ({
      settings,
      setLanguage: (l) => setSettings((s) => ({ ...s, language: l })),
      setTheme: (t) => setSettings((s) => ({ ...s, theme: t })),
      setEmailNotifications: (v) =>
        setSettings((s) => ({ ...s, emailNotifications: v })),
    }),
    [settings],
  );
  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx)
    throw new Error("useSettings, SettingsProvider içinde kullanılmalıdır.");
  return ctx;
}
