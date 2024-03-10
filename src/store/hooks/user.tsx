import { User } from "@/types/user";
import { useMemo, useState } from "react";

export function useUser() {
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => setUser(user);
  const logout = () => setUser(null);

  return useMemo(() => ({
    user,
    login,
    logout
  }), [
    user,
    login,
    logout
  ]);
};
