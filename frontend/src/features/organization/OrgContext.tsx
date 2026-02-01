import type { Organization } from "./types";
import React, { createContext, useContext, useMemo, useState } from "react";

type OrgContextType = {
  orgs: Organization[];
  activeOrg: Organization;
  setActiveOrgById: (id: string) => void;
};

const OrgContext = createContext<OrgContextType | null>(null);

const seedOrgs: Organization[] = [
  { id: "1", name: "Alpha Corp", plan: "pro" },
  { id: "2", name: "Beta LLC", plan: "free" },
  { id: "3", name: "Gamma Inc", plan: "enterprise" },
];

export function OrgProvider({ children }: { children: React.ReactNode }) {
  const [activeOrgId, setActiveOrgId] = useState(seedOrgs[0].id);
  const value = useMemo(() => {
    const activeOrg =
      seedOrgs.find((org) => org.id === activeOrgId) || seedOrgs[0];
    return {
      orgs: seedOrgs,
      activeOrg,
      setActiveOrgById: setActiveOrgId,
    };
  }, [activeOrgId]);
  return <OrgContext.Provider value={value}>{children}</OrgContext.Provider>;
}

export function useOrg() {
  const ctx = useContext(OrgContext);
  if (!ctx) throw new Error("useOrg, OrgProvider içinde kullanılmalıdır.");
  return ctx;
}
