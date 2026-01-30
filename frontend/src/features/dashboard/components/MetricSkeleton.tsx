import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function MetricSkeleton() {
  return (
    <Card className="border-[hsl(var(--border))] bg-[hsl(var(--card))]">
      <CardContent className="space-y-3 p-6">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-9 w-40" />
        <Skeleton className="h-3 w-20" />
      </CardContent>
    </Card>
  );
}
