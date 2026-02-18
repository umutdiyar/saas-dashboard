import { motion } from "framer-motion";

export function NotificationsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="space-y-2"
    >
      <h1 className="text-2xl font-semibold tracking-tight">Bildirimler</h1>
      <p className="text-sm text-zinc-500">Henüz bildirim yok.</p>
    </motion.div>
  );
}
