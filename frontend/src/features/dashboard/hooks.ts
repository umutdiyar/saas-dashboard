import { use, useEffect, useState } from "react";
import type { DashboardMetrics } from "./types";
import { toast } from "sonner";
import { getDashboardMetrics } from "./api";

export function useDashboardMetrics() {
  const [data, setData] = useState<DashboardMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = () => {
    setLoading(true);
    setError(null);

    getDashboardMetrics()
      .then((res) => setData(res.data))
      .catch(() => {
        setError("Dashboard verileri yüklenemedi");
        toast.error("Dashboard verileri alınamadı!");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  return { data, loading, error, reload: load };
}
