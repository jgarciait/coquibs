'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { Hospital } from '@/app/types';
import 'leaflet/dist/leaflet.css';

type Props = {
  hospitals?: Hospital[];
  title?: string;

  /* Pines rojos (con sombra) */
  pinUrl2x?: string;
  pinShadowUrl?: string;
  pinSize?: [number, number];
  pinAnchor?: [number, number];
  popupAnchor?: [number, number];

  /* Pulsos */
  pulseColor?: string; ringColor?: string; durationMs?: number; flyToZoom?: number;
  hoverPulseColor?: string; hoverRingColor?: string; hoverDurationMs?: number;

  /* Tiles (remueve líneas marítimas) */
  tileUrl?: string;

  /* Layout */
  className?: string;
};

const DEFAULTS: Required<Omit<Props, 'hospitals' | 'title' | 'className'>> = {
  // Red pin estilo Leaflet
  pinUrl2x: 'https://unpkg.com/leaflet-color-markers@1.1.1/img/marker-icon-2x-red.png',
  pinShadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  pinSize: [25, 41],
  pinAnchor: [12, 41],
  popupAnchor: [1, -34],

  // Pulsos
  pulseColor: 'rgba(210, 35, 42, 0.70)',
  ringColor: 'rgba(210, 35, 42, 0.45)',
  durationMs: 2400,
  flyToZoom: 13,
  hoverPulseColor: 'rgba(210, 35, 42, 0.55)',
  hoverRingColor: 'rgba(210, 35, 42, 0.35)',
  hoverDurationMs: 900,

  // CartoDB Positron (sin líneas marítimas de OSM Standard)
  tileUrl: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
};

const DEFAULT_HOSPITALS: Hospital[] = [
  { name: 'Hospital Clínica Perea', municipality: 'Mayagüez, PR', lat: 18.20278, lon: -67.13972 },
  { name: 'Hospital Ryder Memorial', municipality: 'Humacao, PR', lat: 18.15528, lon: -65.83444 },
  { name: 'Hospital Metropolitano de Yauco', municipality: 'Yauco, PR', lat: 18.03143, lon: -66.85755 },
  { name: 'Hospital Buen Samaritano', municipality: 'Aguadilla, PR', lat: 18.44255, lon: -67.15081 },
  { name: 'Hospital Santa Rosa', municipality: 'Guayama, PR', lat: 17.97913, lon: -66.10128 },
  { name: 'Hospital Centro Médico', municipality: 'Río Piedras, PR', lat: 18.39361, lon: -66.07639 },
  { name: 'Hospital de la Concepción', municipality: 'San Germán, PR', lat: 18.09861, lon: -67.03806 },
  { name: 'Hospital Bella Vista', municipality: 'Mayagüez, PR', lat: 18.18218, lon: -67.15379 },
  { name: 'Hospital Auxilio Mutuo', municipality: 'San Juan, PR', lat: 18.40972, lon: -66.05111 },
  { name: "Doctor's Center Hospital", municipality: 'Santurce, PR', lat: 18.44598, lon: -66.07358 },
  { name: "Doctor's Center Hospital", municipality: 'Bayamón, PR', lat: 18.39803, lon: -66.16641 },
  { name: "Children's Hospital", municipality: 'Bayamón, PR', lat: 18.39697, lon: -66.16316 },
];

/* Helpers de enlaces */
const buildGoogleMapsUrl = (lat: number, lon: number, _label?: string) =>
  `https://www.google.com/maps?q=${lat},${lon}`;

const buildAppleMapsUrl = (lat: number, lon: number, _label?: string) =>
  `https://maps.apple.com/?q=${lat},${lon}`;

/* Detección para decidir entre Apple Maps y Google Maps
   - iOS/iPadOS: Apple Maps
   - macOS Safari (no Chrome/Edge/Firefox): Apple Maps
   - Resto: Google Maps
*/
function preferAppleMaps(): boolean {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent || '';
  const isIOS = /iPhone|iPad|iPod/.test(ua);
  const isMac = /Macintosh/.test(ua);
  const isSafari = /Safari/.test(ua) && !/Chrome|CriOS|Edg|OPR|Firefox/.test(ua);
  return isIOS || (isMac && isSafari);
}

export default function PRHospitalsMap({
  hospitals = DEFAULT_HOSPITALS,
  title = 'Hospitales Afiliados',
  pinUrl2x = DEFAULTS.pinUrl2x,
  pinShadowUrl = DEFAULTS.pinShadowUrl,
  pinSize = DEFAULTS.pinSize,
  pinAnchor = DEFAULTS.pinAnchor,
  popupAnchor = DEFAULTS.popupAnchor,
  pulseColor = DEFAULTS.pulseColor,
  ringColor = DEFAULTS.ringColor,
  durationMs = DEFAULTS.durationMs,
  flyToZoom = DEFAULTS.flyToZoom,
  hoverPulseColor = DEFAULTS.hoverPulseColor,
  hoverRingColor = DEFAULTS.hoverRingColor,
  hoverDurationMs = DEFAULTS.hoverDurationMs,
  tileUrl = DEFAULTS.tileUrl,
  className,
}: Props) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [useApple, setUseApple] = useState<boolean>(false);

  const boundsData = useMemo(() => {
    const lats = hospitals.map(h => h.lat);
    const lons = hospitals.map(h => h.lon);
    return {
      minLat: Math.min(...lats),
      maxLat: Math.max(...lats),
      minLon: Math.min(...lons),
      maxLon: Math.max(...lons),
    };
  }, [hospitals]);

  useEffect(() => {
    setUseApple(preferAppleMaps());
  }, []);

  useEffect(() => {
    let L: any;
    (async () => {
      const leaflet = await import('leaflet');
      L = leaflet;

      if (!mapRef.current) return;

      const map = L.map(mapRef.current);
      mapInstance.current = map;

      const { minLat, maxLat, minLon, maxLon } = boundsData;
      const bounds = L.latLngBounds(L.latLng(minLat, minLon), L.latLng(maxLat, maxLon));
      map.fitBounds(bounds.pad(0.2));

      // Tiles sin líneas marítimas
      L.tileLayer(tileUrl, {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      }).addTo(map);

      // Icono PIN rojo (2x + shadow)
      const redIcon = L.icon({
        iconUrl: pinUrl2x,
        shadowUrl: pinShadowUrl,
        iconSize: pinSize,
        iconAnchor: pinAnchor,
        popupAnchor,
        shadowSize: [41, 41],
      });

      // Crear marcadores y sus popups con botón principal segun detección
      markersRef.current = hospitals.map((h) => {
        const fullLabel = `${h.name}, ${h.municipality}`;
        const gmaps = buildGoogleMapsUrl(h.lat, h.lon, fullLabel);
        const amaps = buildAppleMapsUrl(h.lat, h.lon, fullLabel);

        const primaryUrl = useApple ? amaps : gmaps;
        const primaryLabel = useApple ? 'Abrir en Apple Maps' : 'Abrir en Google Maps';
        const altUrl = useApple ? gmaps : amaps;
        const altLabel = useApple ? 'Abrir en Google Maps' : 'Abrir en Apple Maps';

        const popupHtml = `
          <div style="min-width:240px">
            <div style="font-weight:700; font-size:14px; margin-bottom:2px">${h.name}</div>
            <div style="color:#6b7280; font-size:12px; margin-bottom:10px">${h.municipality}</div>

            <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center">
              <a href="${primaryUrl}" target="_blank" rel="noopener noreferrer"
                 style="display:inline-flex;align-items:center;gap:8px;background:#d2232a;color:#fff;padding:8px 10px;border-radius:8px;text-decoration:none;font-weight:600;box-shadow:0 4px 10px rgba(210,35,42,.25);pointer-events:auto">
                ${primaryLabel}
              </a>
              <a href="${altUrl}" target="_blank" rel="noopener noreferrer"
                 style="font-size:12px; color:#0b2a6f; text-decoration:underline; margin-left:4px;pointer-events:auto">
                ${altLabel}
              </a>
            </div>

            <div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:8px">
              <button
                 data-addr="${fullLabel.replace(/"/g, '&quot;')}"
                 class="leaflet-copy-addr"
                 style="display:inline-flex;align-items:center;gap:8px;background:#0f3b9e;color:#fff;padding:8px 10px;border-radius:8px;border:none;cursor:pointer;font-weight:600">
                 Copiar dirección
              </button>
              <button
                 data-lat="${h.lat}" data-lon="${h.lon}"
                 class="leaflet-copy-coords"
                 style="display:inline-flex;align-items:center;gap:8px;background:#374151;color:#fff;padding:8px 10px;border-radius:8px;border:none;cursor:pointer;font-weight:600">
                 Copiar coordenadas
              </button>
            </div>

            <div class="leaflet-copy-toast" style="margin-top:8px;color:#16a34a;font-size:12px;display:none">Copiado ✓</div>
          </div>
        `;

        const m = L.marker([h.lat, h.lon], { icon: redIcon })
          .addTo(map)
          .bindPopup(popupHtml);

        // Al abrir el popup, enganchar handlers de copia
        m.on('popupopen', () => {
          const el = m.getPopup()?.getElement();
          if (!el) return;

          const toast = el.querySelector('.leaflet-copy-toast') as HTMLDivElement | null;

          function showToast() {
            if (!toast) return;
            toast.style.display = 'block';
            setTimeout(() => (toast.style.display = 'none'), 1000);
          }

          const onCopy = async (text: string) => {
            try {
              await navigator.clipboard.writeText(text);
              showToast();
            } catch {
              const ta = document.createElement('textarea');
              ta.value = text;
              document.body.appendChild(ta);
              ta.select();
              try { document.execCommand('copy'); } catch {}
              document.body.removeChild(ta);
              showToast();
            }
          };

          const addrBtn = el.querySelector('.leaflet-copy-addr') as HTMLButtonElement | null;
          const coordBtn = el.querySelector('.leaflet-copy-coords') as HTMLButtonElement | null;

          addrBtn?.addEventListener('click', () => {
            const addr = addrBtn.getAttribute('data-addr') || '';
            onCopy(addr);
          });

          coordBtn?.addEventListener('click', () => {
            const lat = coordBtn.getAttribute('data-lat') || '';
            const lon = coordBtn.getAttribute('data-lon') || '';
            onCopy(`${lat}, ${lon}`);
          });
        });

        return m;
      });
    })();

    return () => {
      try { mapInstance.current?.remove(); } catch {}
    };
  }, [boundsData, hospitals, pinUrl2x, pinShadowUrl, pinSize, pinAnchor, popupAnchor, tileUrl, useApple]);

  // Utilitario: pulso en latlng
  async function spawnPulse(latlng: { lat: number; lng: number }, color: string, ring: string, ms: number) {
    const leaflet = await import('leaflet');
    const L = leaflet;
    const html = `<div class="pulse" style="--pulse-duration:${ms}ms; --pulse-color:${color}; --ring-color:${ring};"></div>`;
    const icon = L.divIcon({ html, className: '', iconSize: [20, 20], iconAnchor: [10, 10] });
    const p = L.marker(latlng as any, { icon, interactive: false }).addTo(mapInstance.current);
    setTimeout(() => { mapInstance.current?.removeLayer(p); }, ms);
  }

  // Hover: pulso suave
  const previewMarker = async (idx: number) => {
    const m = markersRef.current[idx];
    if (!m) return;
    await spawnPulse(m.getLatLng(), hoverPulseColor!, hoverRingColor!, hoverDurationMs!);
  };

  // Click en lista: centra + popup + pulso fuerte
  const selectMarker = async (idx: number) => {
    setActiveIdx(idx);
    const m = markersRef.current[idx];
    if (!m) return;
    const latlng = m.getLatLng();
    mapInstance.current.flyTo(latlng, Math.max(mapInstance.current.getZoom(), flyToZoom!), { duration: 0.8 });
    m.openPopup();
    await spawnPulse(latlng, pulseColor!, ringColor!, durationMs!);
  };

  return (
    <div className={`grid gap-0 h-[calc(100vh-0px)] ${className ?? ''}`} style={{ gridTemplateColumns: '460px 1fr' }}>
      {/* Lista estilo screenshot */}
      <aside className="h-full overflow-auto border-r border-gray-200 bg-white text-[#0a1630] p-8">
        <h2 className="text-3xl font-extrabold tracking-tight mb-6">{title}</h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-6">
          {hospitals.map((h, i) => (
            <li
              key={i}
              onMouseEnter={() => previewMarker(i)}
              onClick={() => selectMarker(i)}
              className="group cursor-pointer"
            >
              <div className="flex items-start gap-3">
                {/* Check circular azul */}
                <span
                  className={`mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
                    activeIdx === i ? 'border-[#0b2a6f] bg-[#0b2a6f]' : 'border-[#0b2a6f] bg-transparent'
                  }`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke={activeIdx === i ? '#ffffff' : '#0b2a6f'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>

                <div>
                  <div className={`font-semibold text-lg leading-tight ${activeIdx === i ? 'text-[#0b2a6f]' : 'text-[#0a1630]'}`}>
                    {h.name}
                  </div>
                  <div className="text-sm text-[#7c8aa5]">{h.municipality}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </aside>

      {/* Mapa */}
      <div ref={mapRef} id="map" className="h-full w-full" />

      {/* CSS global: pulso rojo */}
      <style jsx global>{`
        .leaflet-container { outline: none; }
        .pulse {
          width: 20px; height: 20px; border-radius: 50%;
          position: relative; border: 2px solid white;
          background: var(--pulse-color, rgba(210, 35, 42, 0.70));
          box-shadow: 0 0 0 0 var(--pulse-color, rgba(210, 35, 42, 0.70));
          animation: pulse var(--pulse-duration, 1200ms) ease-out infinite;
        }
        .pulse:after {
          content: ''; position: absolute; inset: -8px; border-radius: 50%;
          border: 2px solid var(--ring-color, rgba(210, 35, 42, 0.45));
          animation: ring var(--pulse-duration, 1200ms) ease-out infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.95; }
          70% { transform: scale(1.9); opacity: 0.2; }
          100% { transform: scale(2.3); opacity: 0; }
        }
        @keyframes ring {
          0% { transform: scale(0.8); opacity: 0.8; }
          80% { transform: scale(2.4); opacity: 0; }
          100% { transform: scale(2.6); opacity: 0; }
        }
      `}</style>

      {/* Responsive: lista arriba en móviles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          div.grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto 60vh;
          }
        }
      `}</style>
    </div>
  );
}