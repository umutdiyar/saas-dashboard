import {
  CreditCard,
  LayoutDashboard,
  Settings,
  Users,
  Bell,
  User,
  Shield,
} from "lucide-react";

export type Role = "admin" | "user";
export type Plan = "free" | "pro" | "enterprise";

export type navItems = {
  key: string;
  to: string;
  icon: any;
  roles?: Role[];
  plans?: Plan[];
};

export const NAV_ITEMS: navItems[] = [
  {
    key: "dashboard",
    to: "/app",
    icon: LayoutDashboard,
    roles: ["admin", "user"],
    plans: ["free", "pro", "enterprise"],
  },
  {
    key: "notifications",
    to: "/app/notifications",
    icon: Bell,
    roles: ["admin", "user"],
  },
  {
    key: "profile",
    to: "/app/profile",
    icon: User,
    roles: ["admin", "user"],
  },
  {
    key: "users",
    to: "/app/users",
    icon: Users,
    roles: ["admin"],
    plans: ["pro", "enterprise"],
  },
  {
    key: "billing",
    to: "/app/billing",
    icon: CreditCard,
    roles: ["admin"],
    plans: ["pro", "enterprise"],
  },
  {
    key: "audit",
    to: "/app/audit-logs",
    icon: Shield,
    roles: ["admin"],
    plans: ["enterprise"],
  },
  {
    key: "settings",
    to: "/app/settings",
    icon: Settings,
    roles: ["admin", "user"],
    plans: ["free", "pro", "enterprise"],
  },
];
