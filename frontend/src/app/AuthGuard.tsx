import { useAuth } from "@/features/auth/AuthContext";
import { Navigate } from "react-router-dom";

export function AuthGuard({ children }: { children: JSX.Element }) {
  const { auth } = useAuth();
  if (!auth.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
