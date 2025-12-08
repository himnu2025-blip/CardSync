import { notifyToastListeners } from '@/components/ui/toast';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

let toastCounter = 0;

export function showToast(message: string, type: 'success' | 'error' | 'info' = 'info') {
  const toast: Toast = {
    id: `toast-${toastCounter++}`,
    message,
    type,
  };
  
  notifyToastListeners(toast);
}

export function useToast() {
  return {
    success: (message: string) => showToast(message, 'success'),
    error: (message: string) => showToast(message, 'error'),
    info: (message: string) => showToast(message, 'info'),
  };
}
