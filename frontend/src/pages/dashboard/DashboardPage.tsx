import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useDashboardMetrics } from "@/features/dashboard/hooks";
import { MetricCard } from "@/features/dashboard/components/MetricCard";
import { MetricSkeleton } from "@/features/dashboard/components/MetricSkeleton";
import { EmptyState } from "@/features/dashboard/components/EmptyState";

export function DashboardPage() {
  const { data, loading, error, reload } = useDashboardMetrics();

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <Button variant="outline" size="sm" onClick={reload}>
          Refresh
        </Button>
      </div>

      {error ? (
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-600">
          {error}
        </div>
      ) : null}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {loading ? (
          <>
            <MetricSkeleton />
            <MetricSkeleton />
            <MetricSkeleton />
            <MetricSkeleton />
          </>
        ) : data ? (
          <>
            <MetricCard
              title="Active Users"
              value={data.activeUsers.toLocaleString()}
              subtitle="Last 30 days"
            />
            <MetricCard
              title="Monthly Revenue"
              value={`$${data.monthlyRevenue.toLocaleString()}`}
              subtitle="MRR"
            />
            <MetricCard
              title="API Requests"
              value={data.apiRequests.toLocaleString()}
              subtitle="This month"
            />
            <MetricCard
              title="Churn Rate"
              value={`${data.churnRate}%`}
              subtitle="Monthly"
            />
          </>
        ) : (
          <div className="md:col-span-2 xl:col-span-4">
            <EmptyState onCreate={reload} />
          </div>
        )}
      </div>
    </motion.div>
  );
}
