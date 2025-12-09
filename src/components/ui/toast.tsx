import { useEffect, useState } from "react";
import { CheckCircle, XCircle, Info, X } from "lucide-react";

interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "info";
}

const listeners: Set<(toast: Toast) => void> = new Set();

export function addToastListener(listener: (toast: Toast) => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function notifyToastListeners(toast: Toast) {
  listeners.forEach((listener) => listener(toast));
}

export function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const listener = (toast: Toast) => {
      setToasts((prev) => [...prev, toast]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
      }, 3000);
    };

    return addToastListener(listener);
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  if (!toasts.length) return null;

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="flex min-w-[260px] max-w-sm items-start gap-3 rounded-lg border border-slate-800 bg-slate-900/90 px-4 py-3 text-sm text-slate-100 shadow-lg backdrop-blur"
        >
          <div className="mt-0.5">
            {toast.type === "success" && (
              <CheckCircle className="h-4 w-4 text-emerald-400" />
            )}
            {toast.type === "error" && (
              <XCircle className="h-4 w-4 text-red-400" />
            )}
            {toast.type === "info" && (
              <Info className="h-4 w-4 text-blue-400" />
            )}
          </div>
          <div className="flex-1">{toast.message}</div>
          <button
            onClick={() => removeToast(toast.id)}
            className="ml-1 rounded-full p-1 text-slate-400 hover:bg-slate-800 hover:text-slate-100 transition-colors"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      ))}
    </div>
  );
}