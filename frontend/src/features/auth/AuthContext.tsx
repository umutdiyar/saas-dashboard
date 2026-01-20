import React, { createContext, useContext, useState } from "react";
import { AuthState, User } from "./auth.types";
import { tokenService } from "@/services/token.service";

type AuthContextType = {
  auth: AuthState;
  login: (email: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const fakeUser: User = {
  id: "1",
  email: "admin@saas.com",
  role: "admin",
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<AuthState>(() => {
    const token = tokenService.get();
    return {
      user: token ? fakeUser : null,
      token,
      isAuthenticated: Boolean(token),
    };
  });

  const login = (email: string) => {
    const fakeToken = "fake-jwt-token";
    tokenService.set(fakeToken);

    setAuth({
      user: { ...fakeUser, email },
      token: fakeToken,
      isAuthenticated: true,
    });
  };

  const logout = () => {
    tokenService.clear();
    setAuth({
      user: null,
      token: null,
      isAuthenticated: false,
    });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return ctx;
}
