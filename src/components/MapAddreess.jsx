import React, { useContext } from 'react'
import { Marker,  TileLayer, MapContainer, Popup } from "react-leaflet";
import { AddressIpContext } from '../store/AddressIPContext';

export default function MapAddreess() {

    const { latitude, longitude } = useContext(AddressIpContext)

    return (
        <div id="map_id">
            <MapContainer 
                center={[latitude, longitude]} 
                zoom={13}
                scrollWheelZoom={false} 
            >
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/esilva644/ckm3kto7vbpxw17opfjou2vyz/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`}
                />
                    <Marker position={[latitude, longitude]}>
                        <Popup>
                            <ul>
                                <li>IP: <span>000.000.000.000</span></li>
                                <li>Location: <span>Mogi das Cruzes</span></li>
                                <li>Timezone: <span>UTC-05:00</span></li>
                                <li>ISP: <span>SpaceX</span></li>
                            </ul>
                        </Popup>
                    </Marker>
            </MapContainer>
        </div>
    )
}
