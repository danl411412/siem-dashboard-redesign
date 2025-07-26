import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { mockMapData } from './mockMapData';

const position: [number, number] = [51.505, -0.09]; // Example coordinates

const MapView = () => (
  <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; OpenStreetMap contributors'
    />
    {mockMapData.map((data) => (
      <Marker key={data.id} position={[data.lat, data.lng]}>
        <Popup>
          <strong>{data.event}</strong><br />
          Severity: {data.severity}
        </Popup>
      </Marker>
    ))}

  </MapContainer>
);

export default MapView;