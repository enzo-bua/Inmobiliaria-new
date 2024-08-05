import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Maps = ({ location }) => {
  const { center, markerPosition } = location;

  return (
    <div className='-z-10'>
      <div className='border border-gray-300 rounded-lg p-6 shadow-md bg-white'>
        <MapContainer
          center={center} // Utiliza las coordenadas del centro del mapa desde la prop
          zoom={13}
          style={{ height: '400px' }}
        >
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Marcador utilizando las coordenadas de markerPosition */}
          <Marker position={markerPosition}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Maps;
