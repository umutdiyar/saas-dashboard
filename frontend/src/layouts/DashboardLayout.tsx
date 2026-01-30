import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Home, ChevronLeft, ChevronRight } from "lucide-react";

export function DashboardLayout() {
  const [collapsed, setCollapsed] = React.useState(false);
  const location = useLocation();

  const sidebarWidth = collapsed ? 72 : 242;

  return (
    <div className="flex min-h-screen bg-zinc-100">
      {/* Sidebar */}
      <motion.aside
        animate={{ width: sidebarWidth }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="shrink-0 border-r border-zinc-200 bg-white"
      >
        {/* Brand + Toggle */}
        <div className="flex h-14 items-center justify-between px-3">
          <div className="flex min-w-0 items-center gap-2">
            <div className="h-6 w-6 shrink-0 rounded-xl bg-zinc-900" />
            {!collapsed && (
              <div className="truncate text-sm font-semibold tracking-tight">
                SaaS Dashboard
              </div>
            )}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed((v) => !v)}
            className="h-9 w-9 p-0"
            aria-label="Toggle sidebar"
            title="Toggle sidebar"
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Nav */}
        <nav className="px-2 pb-3 pt-2">
          <div className="space-y-1">
            <NavItem
              collapsed={collapsed}
              to="/app"
              label="Dashboard"
              icon={<LayoutDashboard className="h-4 w-4" />}
              active={location.pathname === "/app"}
            />
            <NavItem
              collapsed={collapsed}
              to="/"
              label="Landing"
              icon={<Home className="h-4 w-4" />}
              active={location.pathname === "/"}
            />
          </div>
        </nav>
      </motion.aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 items-center justify-between border-b border-zinc-200 bg-white px-6">
          <div className="text-sm font-medium text-zinc-600">Overview</div>

          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline">
              Profile
            </Button>
          </div>
        </header>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function NavItem({
  collapsed,
  to,
  label,
  icon,
  active,
}: {
  collapsed: boolean;
  to: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
}) {
  return (
    <Link
      to={to}
      title={collapsed ? label : undefined}
      className={[
        "group flex items-center gap-3 rounded-xl px-3 py-2 text-sm mb-2 transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-zinc-300",
        active ? "bg-zinc-900 text-white" : "text-zinc-700 hover:bg-zinc-100",
      ].join(" ")}
    >
      <span
        className={[
          "grid h-8 w-8 place-items-center rounded-lg transition-colors",
          active ? "bg-white/10" : "bg-zinc-100 group-hover:bg-zinc-200",
        ].join(" ")}
      >
        {icon}
      </span>

      {!collapsed && <span className="truncate font-medium">{label}</span>}
    </Link>
  );
}
