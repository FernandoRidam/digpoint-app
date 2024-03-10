import { User } from "@/types/user";
import { useMemo, useState } from "react";

export function useLoading() {
  const [loading, setLoading] = useState<boolean>(false);

  const loadingStart = () => setLoading(true);
  const loadingEnd = () => setLoading(false);

  return useMemo(() => ({
    loading,
    loadingStart,
    loadingEnd,
  }), [
    loading,
    loadingStart,
    loadingEnd
  ]);
};
