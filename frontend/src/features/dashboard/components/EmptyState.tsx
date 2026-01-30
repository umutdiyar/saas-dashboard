import { Button } from "@/components/ui/button";

export function EmptyState({ onCreate }: { onCreate: () => void }) {
  return (
    <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-10 text-center">
      <div className="text-sm text-zinc-500">Gösterilecek veri yok.</div>
      <Button className="mt-4" variant="outline" onClick={onCreate}>
        Yeniden dene
      </Button>
    </div>
  );
}
