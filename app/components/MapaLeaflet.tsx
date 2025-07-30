import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const center = [-34.6037, -58.3816]; // Coordenadas de Buenos Aires

export default function MapaLeaflet() {
  return (
    <MapContainer center={center} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={center}>
        <Popup>Centro de Buenos Aires</Popup>
      </Marker>
    </MapContainer>
  );
}
