import { motion } from "framer-motion";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";

export function MetricCard({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: string;
  subtitle: string;
}) {
  return (
    <motion.div>
      <Card className="border-[hsl(var(--border))] bg-[hsl(var(--card))]">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-zinc-500">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-semibold tracking-tight">{value}</div>
          {subtitle ? (
            <div className="mt-1 text-sm text-zinc-500">{subtitle}</div>
          ) : null}
        </CardContent>
      </Card>
    </motion.div>
  );
}
