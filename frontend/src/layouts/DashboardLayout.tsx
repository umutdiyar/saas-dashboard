import { Outlet, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/features/auth/AuthContext";

export function DashboardLayout() {
  const { logout } = useAuth();

  return (
    <div className="flex min-h-screen bg-zinc-100">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-200 bg-white px-4 py-6">
        <div className="mb-8 text-lg font-semibold tracking-tight">
          SaaS Dashboard
        </div>

        <nav className="flex flex-col gap-1">
          <Button variant="ghost" className="justify-start" asChild>
            <Link to="/app">Dashboard</Link>
          </Button>
          <Button variant="ghost" className="justify-start" asChild>
            <Link to="/">Landing</Link>
          </Button>
        </nav>
      </aside>

      {/* Main */}
      <div className="flex flex-1 flex-col">
        {/* Topbar */}
        <header className="flex h-14 items-center justify-between border-b border-zinc-200 bg-white px-6">
          <div className="text-sm font-medium text-zinc-600">
            Dashboard Overview
          </div>
          <Button size="sm" variant="outline" onClick={logout}>
            Çıkış Yap
          </Button>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
