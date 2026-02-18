import { motion } from "framer-motion";

export function AuditLogsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="space-y-2"
    >
      <h1 className="text-2xl font-semibold tracking-tight">Denetim Günlüğü</h1>
      <p className="text-sm text-zinc-500">Kurumsal Özellik, çok yakında!</p>
    </motion.div>
  );
}
