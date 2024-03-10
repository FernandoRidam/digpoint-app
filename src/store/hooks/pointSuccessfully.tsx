import { useMemo, useState } from "react";

export function usePointSuccessfully() {
  const [name, setName] = useState<string>("");

  const open = (name: string, seconds: number) => {
    setName(name);

    setTimeout(() => {
      close();
    }, seconds * 1000);
  };

  const close = () => setName("");

  return useMemo(() => ({
    name,
    open,
    close,
  }), [
    name,
    open,
    close
  ]);
};
