import { Button } from "@/components/ui/button";

export function EmptyState({ onCreate }: { onCreate: () => void }) {
  return (
    <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-10 text-center">
      <div className="text-base font-medium text-zinc-500">
        Gösterilecek veri yok.
      </div>
      <div className="mt-1 text-sm text-zinc-500">
        Sayfayı yenilemeyi deneyin veya daha sonra tekrar kontrol edin.
      </div>
      <Button className="mt-4" variant="outline" onClick={onCreate}>
        Yeniden dene
      </Button>
    </div>
  );
}
