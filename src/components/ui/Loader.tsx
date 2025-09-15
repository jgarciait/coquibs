'use client';

import { useEffect, useState } from 'react';

interface LoaderProps {
  children: React.ReactNode;
}

export default function Loader({ children }: LoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Show loader for 0.8 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
        <div className="w-8 h-8 relative transform rotate-45">
          <div 
            className="absolute bg-red-600 w-3.5 h-3.5 animate-ping" 
            style={{top:0, left:0, animationDuration:'1.2s'}}
          ></div>
          <div 
            className="absolute bg-red-600 w-3.5 h-3.5 animate-ping" 
            style={{top:0, right:0, animationDuration:'1.2s', animationDelay:'0.15s'}}
          ></div>
          <div 
            className="absolute bg-red-600 w-3.5 h-3.5 animate-ping" 
            style={{bottom:0, right:0, animationDuration:'1.2s', animationDelay:'0.3s'}}
          ></div>
          <div 
            className="absolute bg-red-600 w-3.5 h-3.5 animate-ping" 
            style={{bottom:0, left:0, animationDuration:'1.2s', animationDelay:'0.45s'}}
          ></div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
