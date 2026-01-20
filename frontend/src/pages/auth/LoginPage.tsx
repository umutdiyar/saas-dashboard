import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/features/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { AnimatedPage } from "@/app/AnimatedPage";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // şimdilik fake login
    login(email);
    navigate("/app");
  };

  return (
    <AnimatedPage>
      <div className="grid min-h-screen place-items-center bg-[hsl(var(--background))] px-4">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full max-w-sm rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 shadow-sm"
        >
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Hoşgeldiniz
            </h1>
            <p className="mt-2 text-sm text-zinc-500">
              SaaS paneline giriş yapın
            </p>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium">Email</label>
            <Input
              type="email"
              placeholder="admin@saas.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="mb-1 block text-sm font-medium">Şifre</label>

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute inset-y-0 right-3 flex items-center text-sm text-zinc-500 hover:text-zinc-700"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Giriş Yap
          </Button>

          <div className="mt-6 text-center text-xs text-zinc-500">
            Demo kimlik bilgileri -- herhangi bir e-posta ve şifre
          </div>
        </motion.form>
      </div>
    </AnimatedPage>
  );
}
