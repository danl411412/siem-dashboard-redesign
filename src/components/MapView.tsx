import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { mockMapData } from './mockMapData';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef } from 'react';

const center: [number, number] = [51.505, -0.09];

// Fix Leaflet's default icon path for production
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/marker-icon-2x.png',
  iconUrl: '/marker-icon.png',
  shadowUrl: '/marker-shadow.png',
});

const MapView = () => {
  // Create refs for each marker
  const markerRefs = useRef<Record<number, any>>({});

  const handleLinkClick = (item: typeof mockMapData[0]) => {
    const markerRef = markerRefs.current[item.id];
    if (markerRef && markerRef.current) {
      markerRef.current.openPopup();
    }
  };

  return (
    <div>
      <MapContainer center={center} zoom={13} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        {mockMapData.map((item) => {
          if (!markerRefs.current[item.id]) {
            markerRefs.current[item.id] = useRef(null);
          }
          return (
            <Marker
              key={item.id}
              position={[item.lat, item.lng]}
              ref={markerRefs.current[item.id]}
            >
              <Popup>
                <strong>{item.event}</strong><br />
                Severity: {item.severity}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
      <div style={{ marginTop: "1rem" }}>
        <h3>Event Links</h3>
        <ul>
          {mockMapData.map((item) => (
            <li key={item.id}>
              <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick(item); }}>
                {item.event} (Severity: {item.severity})
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MapView;