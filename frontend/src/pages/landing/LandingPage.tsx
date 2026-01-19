import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedPage } from "@/app/AnimatedPage";

export function LandingPage() {
  return (
    <AnimatedPage>
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight">
          The admin dashboard your SaaS deserves.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-zinc-600">
          Authentication, organizations, roles and metrics — all in one clean
          interface.
        </p>

        <div className="mt-10 flex gap-4">
          <Button size="lg" asChild>
            <Link to="/login">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/app">Live Demo</Link>
          </Button>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 bg-white p-6">
            <div className="font-medium">Multi-tenant</div>
            <p className="mt-2 text-sm text-zinc-600">
              Built for real SaaS organizations.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-6">
            <div className="font-medium">Role-based</div>
            <p className="mt-2 text-sm text-zinc-600">
              Fine-grained permission system.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-6">
            <div className="font-medium">Production-ready</div>
            <p className="mt-2 text-sm text-zinc-600">
              Clean architecture, scalable design.
            </p>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
