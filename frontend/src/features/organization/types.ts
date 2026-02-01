export type Organization = {
  id: string;
  name: string;
  plan: "free" | "pro" | "enterprise";
};

export type OrganizationSettings = {
  orgs: Organization[];
  activeOrgId: string | null;
};
