export type User = {
  id: string;
  email: string;
  role: "admin" | "user";
};

export type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
};
