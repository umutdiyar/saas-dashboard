import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "@/app/router";
import { AuthProvider } from "@/features/auth/AuthContext";
import "./index.css";
import { Toaster } from "sonner";
import { OrgProvider } from "./features/organization/OrgContext";
import { SettingsProvider } from "./features/settings/SettingContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <OrgProvider>
        <SettingsProvider>
          <RouterProvider router={router} />
          <Toaster richColors position="top-right" />
        </SettingsProvider>
      </OrgProvider>
    </AuthProvider>
  </React.StrictMode>,
);
