import { motion } from "framer-motion";

export function UsersPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="space-y-2"
    >
      <h1 className="text-2xl font-semibold tracking-tight">
        Kullanıcılar Sayfası
      </h1>
      <p className="text-sm text-zinc-500">Yakında...</p>
    </motion.div>
  );
}
