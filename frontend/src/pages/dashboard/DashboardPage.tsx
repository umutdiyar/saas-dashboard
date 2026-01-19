import { AnimatedPage } from "@/app/AnimatedPage";

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5">
      <div className="text-sm text-zinc-500">{label}</div>
      <div className="mt-2 text-3xl font-bold tracking-tight">{value}</div>
    </div>
  );
}

export function DashboardPage() {
  return (
    <AnimatedPage>
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <MetricCard label="Active Users" value="1,284" />
          <MetricCard label="Monthly Revenue" value="$12,480" />
          <MetricCard label="API Requests" value="98,312" />
        </div>

        <div className="mt-8 rounded-xl border border-zinc-200 bg-white p-6">
          <div className="text-sm font-medium text-zinc-500">Activity</div>
          <div className="mt-4 text-sm text-zinc-600">
            Charts & logs will be implemented on Day 4.
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
