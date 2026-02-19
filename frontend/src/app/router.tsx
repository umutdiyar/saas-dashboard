import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { PublicLayout } from "@/layouts/PublicLayout";
import { AuthGuard } from "@/app/AuthGuard";

import { LoginPage } from "@/pages/auth/LoginPage";
import { DashboardPage } from "@/pages/dashboard/DashboardPage";
import { LandingPage } from "@/pages/landing/LandingPage";

import { NotificationsPage } from "@/pages/dashboard/NotificationsPage";
import { ProfilePage } from "@/pages/dashboard/ProfilePage";
import { SettingsPage } from "@/pages/dashboard/SettingsPage";
import { PlanGuard } from "./PlanGuard";
import { AuditLogsPage } from "@/pages/dashboard/AuditLogsPage";
import { UsersPage } from "@/pages/dashboard/UsersPage";
import { BillingPage } from "@/pages/dashboard/BillingPage";

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
  {
    path: "/app",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "notifications", element: <NotificationsPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "users", element: <UsersPage /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "billing", element: <BillingPage /> },
      {
        path: "audit-logs",
        element: (
          <PlanGuard required="enterprise">
            <AuditLogsPage />
          </PlanGuard>
        ),
      },
    ],
  },
]);
