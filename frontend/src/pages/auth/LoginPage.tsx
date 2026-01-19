import { AnimatedPage } from "@/app/AnimatedPage";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function LoginPage() {
  return (
    <AnimatedPage>
      <div className="grid min-h-screen place-items-center bg-zinc-50">
        <div className="w-full max-w-sm rounded-2xl border bg-white p-6">
          <h1 className="text-xl font-semibold">Giriş Yap</h1>
          <p className="mt-1 text-sm text-zinc 600">
            Kimlik doğrulama 3. günde uygulanacaktır.
          </p>
          <Button className="mt-6 w-full" asChild>
            <Link to="/app">Continue</Link>
          </Button>
        </div>
      </div>
    </AnimatedPage>
  );
}
