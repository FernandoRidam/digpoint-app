import { useMemo, useState } from "react";

export function useConfirmExit() {
  const [show, setShow] = useState<boolean>(false);

  const open = () => setShow(true);

  const close = () => setShow(false);

  return useMemo(() => ({
    show,
    open,
    close,
  }), [
    show,
    open,
    close
  ]);
};
