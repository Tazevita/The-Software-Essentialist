import { useState, useCallback } from "react";

export type Toast = {
  id: number;
  type: "success" | "error";
  title: string;
  message: string;
  code?: number;
};

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback(
    (type: Toast["type"], title: string, message: string, code?: number) => {
      const id = Date.now();
      setToasts((prev) => [{ id, type, title, message, code }, ...prev]);
      setTimeout(() => dismiss(id), 4000);
    },
    [],
  );

  const dismiss = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { toasts, showToast, dismiss };
}
