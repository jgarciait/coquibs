'use client';

import PRHospitalsMap from '@/components/PRHospitalsMap';

export default function HospitalsPage() {
  return (
    <PRHospitalsMap
      title="Hospitales Afiliados"
      /* Si prefieres otro tileset limpio:
      tileUrl="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      */
    />
  );
}