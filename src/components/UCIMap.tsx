import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// UCI coordinates
const UCI_POSITION: LatLngExpression = [33.6461, -117.8427]; // [latitude, longitude]
const APS_POSITION: LatLngExpression = [33.6433, -117.8379];

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 1] // pixels from the left edge, pixels from the top edge
});
L.Marker.prototype.options.icon = DefaultIcon;

const UCIMap = () => {
  return (
    <MapContainer 
      center={UCI_POSITION}
      zoom={17} 
      style={{ height: "1000px", width: "100%" }} 
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={UCI_POSITION}>
        <Popup>
          University of California, Irvine
        </Popup>
      </Marker>
      <Marker position={APS_POSITION}>
        <Popup>
            Anteater Parking Structure
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default UCIMap;