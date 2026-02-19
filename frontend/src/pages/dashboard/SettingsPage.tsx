import { motion } from "framer-motion";
import { useSettings } from "@/features/settings/SettingContext";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export function SettingsPage() {
  const { settings, setLanguage, setTheme, setEmailNotifications } =
    useSettings();

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Ayarlar</h1>
        <p className="text-sm text-zinc-500">Uygulama tercihleri.</p>
      </div>

      <section className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-5">
        <h2 className="text-sm font-semibold">Dil</h2>
        <div className="mt-3 flex gap-2">
          <Button
            variant={settings.language === "tr" ? "default" : "outline"}
            onClick={() => setLanguage("tr")}
          >
            Türkçe
          </Button>
          <Button
            variant={settings.language === "en" ? "default" : "outline"}
            onClick={() => setLanguage("en")}
          >
            English
          </Button>
        </div>
      </section>

      <section className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-5">
        <h2 className="text-sm font-semibold">Tema</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          <Button
            variant={settings.theme === "system" ? "default" : "outline"}
            onClick={() => setTheme("system")}
          >
            Sistem
          </Button>
          <Button
            variant={settings.theme === "light" ? "default" : "outline"}
            onClick={() => setTheme("light")}
          >
            Açık
          </Button>
          <Button
            variant={settings.theme === "dark" ? "default" : "outline"}
            onClick={() => setTheme("dark")}
          >
            Koyu
          </Button>
        </div>
      </section>

      <section className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-5">
        <h2 className="text-sm font-semibold">Bildirimler</h2>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Email bildirimleri
          </div>
          <Switch
            checked={settings.emailNotifications}
            onCheckedChange={setEmailNotifications}
          />
        </div>
      </section>

      <section className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-5">
        <h2 className="text-sm font-semibold">Güvenlik</h2>
        <p className="mt-2 text-sm text-zinc-500">
          Şifre değiştirme (coming soon)
        </p>
      </section>
    </motion.div>
  );
}
