import { CreditCard, LayoutDashboard, Settings, Users } from "lucide-react";

export type navItems = {
  key: string;
  label: string;
  to: string;
  icon: any;
  roles?: Array<"admin" | "user">;
};

export const NAV_ITEMS: navItems[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    to: "/app",
    icon: LayoutDashboard,
    roles: ["admin", "user"],
  },
  {
    key: "users",
    label: "Users",
    to: "/app/users",
    icon: Users,
    roles: ["admin"],
  },
  {
    key: "billing",
    label: "Billing",
    to: "/app/billing",
    icon: CreditCard,
    roles: ["admin"],
  },
  {
    key: "settings",
    label: "Settings",
    to: "/app/settings",
    icon: Settings,
    roles: ["admin", "user"],
  },
];
