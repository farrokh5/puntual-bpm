/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      url?: string;
      'loading-anim'?: boolean;
      class?: string;
      style?: React.CSSProperties;
    };
  }
}

interface SplineViewerElement extends HTMLElement {
  url: string;
  loadingAnim: boolean;
}

declare global {
  interface HTMLElementTagNameMap {
    'spline-viewer': SplineViewerElement;
  }
}