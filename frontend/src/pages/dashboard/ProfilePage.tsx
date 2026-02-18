import { motion } from "framer-motion";
import { useAuth } from "@/features/auth/AuthContext";
import { useOrg } from "@/features/organization/OrgContext";
import { Button } from "@/components/ui/button";

export function ProfilePage() {
  const { auth, logout } = useAuth();
  const { activeOrg } = useOrg();

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="space-y-4"
    >
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Profil</h1>
        <p className="text-sm text-zinc-500">Hesap bilgilerin.</p>
      </div>

      <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-5 text-sm">
        <div>
          <span className="text-zinc-500">Email:</span>{" "}
          {auth.user?.email ?? "-"}
        </div>
        <div className="mt-2">
          <span className="text-zinc-500">Role:</span> {auth.user?.role ?? "-"}
        </div>
        <div className="mt-2">
          <span className="text-zinc-500">Organization:</span> {activeOrg.name}{" "}
          ({activeOrg.plan.toUpperCase()})
        </div>
      </div>

      <Button variant="outline" onClick={logout}>
        Çıkış yap
      </Button>
    </motion.div>
  );
}
