import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "@/app/router";
import { AuthProvider } from "@/features/auth/AuthContext";
import "./index.css";
import { Toaster } from "sonner";
import { OrgProvider } from "./features/organization/OrgContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <OrgProvider>
        <RouterProvider router={router} />
        <Toaster richColors position="top-right" />
      </OrgProvider>
    </AuthProvider>
  </React.StrictMode>,
);
