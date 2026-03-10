"use client";

import { useEffect } from "react";

/**
 * Handles chunk loading errors gracefully by reloading the page
 */
export default function ChunkErrorHandler() {
  useEffect(() => {
    // Handle script loading errors
    const handleError = (event: ErrorEvent) => {
      const target = event.target as HTMLElement;
      if (target && (target.tagName === 'SCRIPT' || target.tagName === 'LINK')) {
        const src = (target as HTMLScriptElement).src || (target as HTMLLinkElement).href;
        if (src && (src.includes('_next/static') || src.includes('chunk'))) {
          console.warn('Chunk loading error detected, reloading page...', src);
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      }
    };

    // Handle unhandled promise rejections (chunk errors often come as promises)
    const handleRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      if (reason && (
        (typeof reason === 'string' && reason.includes('chunk')) ||
        (reason?.message && reason.message.includes('chunk')) ||
        (reason?.message && reason.message.includes('ChunkLoadError'))
      )) {
        console.warn('Chunk loading error detected, reloading page...', reason);
        event.preventDefault();
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    };

    window.addEventListener('error', handleError, true);
    window.addEventListener('unhandledrejection', handleRejection);

    return () => {
      window.removeEventListener('error', handleError, true);
      window.removeEventListener('unhandledrejection', handleRejection);
    };
  }, []);

  return null;
}

