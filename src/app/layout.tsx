'use client';

import { StrictMode, useEffect } from 'react';
import '../index.css';
import ScrollToTopButton from '../components/generated/ScrollToTopButton';
import Loader from '../components/ui/Loader';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Force light mode by removing dark class and preventing it from being added
    document.documentElement.classList.remove('dark');

    // Override the system preference detection
    const forceLightMode = () => {
      // Always set dark mode to false regardless of localStorage or system preference
      document.documentElement.classList.toggle('dark', false);
    };

    // Run immediately
    forceLightMode();

    // Also run when the DOM is loaded to ensure it applies
    document.addEventListener('DOMContentLoaded', forceLightMode);

    // Override system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', forceLightMode);

    return () => {
      document.removeEventListener('DOMContentLoaded', forceLightMode);
      mediaQuery.removeEventListener('change', forceLightMode);
    };
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </head>
      <body>
        <StrictMode>
          <Loader>
            {children}
            <ScrollToTopButton />
          </Loader>
        </StrictMode>
      </body>
    </html>
  );
}
