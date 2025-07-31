'use client';

import dynamic from 'next/dynamic';

const MapaLeafletNoSSR = dynamic(() => import('./MapaLeaflet').then(mod => mod.MapaLeaflet), {
  ssr: false,
});

export default function MapaLeafletWrapper() {
  return <MapaLeafletNoSSR />;
}
