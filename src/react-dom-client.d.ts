declare module 'react-dom/client' {
  import React from 'react';

  export function createRoot(
    container: Element | DocumentFragment,
    options?: any
  ): any;
}
