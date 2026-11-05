"use client";

import { useEffect } from "react";

type ToastProps = {
  message: string;
  open: boolean;
  onClose: () => void;
};

export function Toast({ message, open, onClose }: ToastProps) {
  useEffect(() => {
    if (!open) return;
    const id = window.setTimeout(onClose, 3200);
    return () => window.clearTimeout(id);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="status"
      className="fixed left-1/2 top-6 z-[500] w-[min(92vw,24rem)] -translate-x-1/2 border-[3px] border-ink bg-plate px-4 py-3 text-center font-display text-sm text-ink shadow-card"
    >
      {message}
    </div>
  );
}
