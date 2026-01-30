import { mockGet } from "@/services/api";
import type { DashboardMetrics } from "./types";

export function getDashboardMetrics() {
  const data: DashboardMetrics = {
    activeUsers: 1284,
    monthlyRevenue: 12480,
    apiRequests: 98312,
    churnRate: 2.1,
  };

  return mockGet(data, { failRate: 0.15 });
}
