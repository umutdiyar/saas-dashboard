import { Button } from "@/components/ui/button";
import { useOrg } from "./OrgContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Check, ChevronsUpDown } from "lucide-react";

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "0";
  const second = parts.length > 1 ? parts[1][0] : "";
  return (first + second).toUpperCase();
}

export function OrgSwitcher({ collapsed }: { collapsed?: boolean }) {
  const { orgs, activeOrg, setActiveOrgById } = useOrg();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={[
            "w-full justify-between rounded-xl px-2 py-2",
            collapsed ? "justify-center" : "",
          ].join(" ")}
        >
          <div className="flex min-w-0 items-center gap-2">
            <Avatar className="h-9 w-9">
              <AvatarFallback className="text-xs font-semibold">
                {initials(activeOrg.name)}
              </AvatarFallback>
            </Avatar>

            {!collapsed && <ChevronsUpDown className="h-4 w-4 text-zinc-500" />}
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="w-64">
        <DropdownMenuLabel>Organizasyonlar</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {orgs.map((org) => {
          const isActive = org.id === activeOrg.id;
          return (
            <DropdownMenuItem
              key={org.id}
              onClick={() => setActiveOrgById(org.id)}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Avatar className="h-7 w-7">
                  <AvatarFallback className="font-semibold text-[10px]">
                    {initials(org.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="leading-tight">
                  <div className="text-sm">{org.name}</div>
                  <div className="text-xs text-zinc-500">
                    {org.plan.toUpperCase()}
                  </div>
                </div>
              </div>

              {isActive && <Check className="h-4 w-4" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
