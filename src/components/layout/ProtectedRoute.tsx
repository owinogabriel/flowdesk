import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useAuth();

  // Still checking localStorage — don't flash the login page yet
  if (isLoading) {
    return (
      <div className="min-h-screen bg-paper flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-border border-t-accent rounded-full animate-spin" />
          <p className="text-sm text-muted">Loading…</p>
        </div>
      </div>
    );
  }

  // Not logged in — redirect to login, remember where they were trying to go
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Logged in — render the protected page
  return <Outlet />;
}
