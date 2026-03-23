"use client";

import { useState, useEffect, useCallback } from "react";

const TOAST_LIMIT = 5;
const TOAST_REMOVE_DELAY = 5000;

type ToasterToast = {
  id: string;
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
};

let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}

type ToastState = {
  toasts: ToasterToast[];
};

const listeners: Array<(state: ToastState) => void> = [];
let memoryState: ToastState = { toasts: [] };

function dispatch(action: { type: "ADD_TOAST" | "REMOVE_TOAST"; toast?: ToasterToast; toastId?: string }) {
  if (action.type === "ADD_TOAST" && action.toast) {
    memoryState = {
      toasts: [action.toast, ...memoryState.toasts].slice(0, TOAST_LIMIT),
    };
  } else if (action.type === "REMOVE_TOAST") {
    memoryState = {
      toasts: memoryState.toasts.filter((t) => t.id !== action.toastId),
    };
  }
  listeners.forEach((listener) => listener(memoryState));
}

export function toast(props: Omit<ToasterToast, "id">) {
  const id = genId();
  const newToast: ToasterToast = { ...props, id };
  dispatch({ type: "ADD_TOAST", toast: newToast });
  setTimeout(() => dispatch({ type: "REMOVE_TOAST", toastId: id }), TOAST_REMOVE_DELAY);
  return id;
}

export function useToast() {
  const [state, setState] = useState<ToastState>(memoryState);

  useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  return { toasts: state.toasts, toast };
}
