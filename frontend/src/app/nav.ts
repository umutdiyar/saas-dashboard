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
  label: string;
  to: string;
  icon: any;
  roles?: Role[];
  plans?: Plan[];
};

export const NAV_ITEMS: navItems[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    to: "/app",
    icon: LayoutDashboard,
    roles: ["admin", "user"],
    plans: ["free", "pro", "enterprise"],
  },
  {
    key: "notifications",
    label: "Bildirimler",
    to: "/app/notifications",
    icon: Bell,
    roles: ["admin", "user"],
  },
  {
    key: "profile",
    label: "Profil",
    to: "/app/profile",
    icon: User,
    roles: ["admin", "user"],
  },
  {
    key: "users",
    label: "Kullanıcılar",
    to: "/app/users",
    icon: Users,
    roles: ["admin"],
    plans: ["pro", "enterprise"],
  },
  {
    key: "billing",
    label: "Faturalandırma",
    to: "/app/billing",
    icon: CreditCard,
    roles: ["admin"],
    plans: ["pro", "enterprise"],
  },
  {
    key: "audit",
    label: "Denetim Günlükleri",
    to: "/app/audit-logs",
    icon: Shield,
    roles: ["admin"],
    plans: ["enterprise"],
  },
  {
    key: "settings",
    label: "Ayarlar",
    to: "/app/settings",
    icon: Settings,
    roles: ["admin", "user"],
    plans: ["free", "pro", "enterprise"],
  },
];
