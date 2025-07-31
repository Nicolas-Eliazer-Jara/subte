'use client';

import dynamic from 'next/dynamic';

const MapaLeafletNoSSR = dynamic(() => import('./SubteMap'), {
  ssr: false,
});

export default function MapaLeafletWrapper() {
  return <MapaLeafletNoSSR />;
}
