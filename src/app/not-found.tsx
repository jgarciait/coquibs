'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">404 - Página No Encontrada</h2>
        <p className="mb-4">La página que buscas no existe.</p>
        <Link href="/" className="text-[#d2232a] hover:underline">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
