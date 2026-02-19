import { useOrg } from "@/features/organization/OrgContext";
import { Navigate } from "react-router-dom";
import { toast } from "sonner";

export function PlanGuard({
  children,
  required,
}: {
  children: JSX.Element;
  required: "pro" | "enterprise";
}) {
  const { activeOrg } = useOrg();

  const allowed =
    required === "enterprise"
      ? activeOrg.plan === "enterprise"
      : activeOrg.plan === "pro" || activeOrg.plan === "enterprise";

  if (!allowed) {
    toast.error("Bu özellik planınıza dahil değil.");
    return <Navigate to="/app/settings" replace />;
  }
  return children;
}
