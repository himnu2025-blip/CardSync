import { useEffect, useState } from 'react';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

const listeners: Set<(toast: Toast) => void> = new Set();

export function addToastListener(listener: (toast: Toast) => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function notifyToastListeners(toast: Toast) {
  listeners.forEach(listener => listener(toast));
}

export function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const listener = (toast: Toast) => {
      setToasts(prev => [...prev, toast]);
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== toast.id));
      }, 3000);
    };

    return addToastListener(listener);
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 max-w-md">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`flex items-center gap-3 p-4 rounded-lg shadow-lg border backdrop-blur-sm animate-in slide-in-from-right ${
            toast.type === 'success'
              ? 'bg-green-50 border-green-200 text-green-900 dark:bg-green-900/20 dark:border-green-800 dark:text-green-100'
              : toast.type === 'error'
              ? 'bg-red-50 border-red-200 text-red-900 dark:bg-red-900/20 dark:border-red-800 dark:text-red-100'
              : 'bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-100'
          }`}
        >
          {toast.type === 'success' && <CheckCircle className="w-5 h-5" />}
          {toast.type === 'error' && <XCircle className="w-5 h-5" />}
          {toast.type === 'info' && <Info className="w-5 h-5" />}
          <p className="flex-1 text-sm font-medium">{toast.message}</p>
          <button
            onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
            className="hover:opacity-70 transition-opacity"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
