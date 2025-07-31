'use client'; // For Next.js App Router client-side only

import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import { LineaA , LineaB , LineaC , LineaD , LineaE, LineaH } from '../data/lineas';

const customIcon = new L.Icon({
  iconUrl: '/markerIcon.png', // Ruta relativa al public/
  iconSize: [12, 12],
  iconAnchor: [6, 6],
});


const center = [-34.6037, -58.3816]; // Centro de Buenos Aires

export default function SubteMap() {
  return (
    <div className="m-5 rounded-[30px] h-[95%]">
      <MapContainer
        center={center}
        zoom={13}
        style={{ height: '100%', width: '100%', borderRadius: '30px' }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />



        {/* Marcadores estaciones Línea A */}
        {LineaA.estaciones.map((est, i) => (
          <Marker key={i} position={est.coords} icon={customIcon}>
            <Popup>{est.nombre}</Popup>
          </Marker>
        ))}
        {LineaB.estaciones.map((est, i) => (
          <Marker key={i} position={est.coords} icon={customIcon}>
            <Popup>{est.nombre}</Popup>
          </Marker>
        ))}
        {LineaC.estaciones.map((est, i) => (
          <Marker key={i} position={est.coords} icon={customIcon}>
            <Popup>{est.nombre}</Popup>
          </Marker>
        ))}
        {LineaD.estaciones.map((est, i) => (
          <Marker key={i} position={est.coords} icon={customIcon}>
            <Popup>{est.nombre}</Popup>
          </Marker>
        ))}
        {LineaE.estaciones.map((est, i) => (
          <Marker key={i} position={est.coords} icon={customIcon}>
            <Popup>{est.nombre}</Popup>
          </Marker>
        ))}
        {LineaH.estaciones.map((est, i) => (
          <Marker key={i} position={est.coords} icon={customIcon}>
            <Popup>{est.nombre}</Popup>
          </Marker>
        ))}

        {/* Polilínea recorrido Línea A */}
        <Polyline positions={LineaA.estaciones.map(e => e.coords)} pathOptions={{ color: LineaA.color , weight: 7 }} />
        <Polyline positions={LineaB.estaciones.map(e => e.coords)} pathOptions={{ color: LineaB.color , weight: 7 }} />
        <Polyline positions={LineaC.estaciones.map(e => e.coords)} pathOptions={{ color: LineaC.color , weight: 7 }} />
        <Polyline positions={LineaD.estaciones.map(e => e.coords)} pathOptions={{ color: LineaD.color , weight: 7 }} />
        <Polyline positions={LineaE.estaciones.map(e => e.coords)} pathOptions={{ color: LineaE.color , weight: 7 }} />
        <Polyline positions={LineaH.estaciones.map(e => e.coords)} pathOptions={{ color: LineaH.color , weight: 7 }} />

      </MapContainer>
    </div>
  );
}
