'use client';

import { StrictMode, useEffect } from 'react';
import Script from 'next/script';
import { Poppins } from 'next/font/google';
import '../index.css';
import ScrollToTopButton from '../components/generated/ScrollToTopButton';
import Loader from '../components/ui/Loader';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

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
        <Script
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={poppins.className} suppressHydrationWarning>
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
