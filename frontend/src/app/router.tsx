import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { PublicLayout } from "@/layouts/PublicLayout";
import { AuthGuard } from "@/app/AuthGuard";

import { LoginPage } from "@/pages/auth/LoginPage";
import { DashboardPage } from "@/pages/dashboard/DashboardPage";
import { LandingPage } from "@/pages/landing/LandingPage";
import { SettingsPage } from "@/pages/dashboard/SettingsPage";
import { BillingPage } from "@/pages/dashboard/BillingPage";
import { UsersPage } from "@/pages/dashboard/UsersPage";

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
      { path: "users", element: <UsersPage /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "billing", element: <BillingPage /> },
    ],
  },
]);
