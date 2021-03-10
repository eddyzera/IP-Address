import React, { useContext, useState, useEffect } from 'react'
import { Marker,  TileLayer, MapContainer, Popup} from "react-leaflet";
import { AddressIpContext } from '../store/AddressIPContext';

export default function MapAddreess() {

    const { latitude, longitude } = useContext(AddressIpContext)
    const [lat, setLat] = useState(latitude)
    const [lng, setLng] = useState(longitude)
    const [location, setLocation] = useState({ lat: latitude, lng: longitude })

    useEffect(() => {
        setLat(latitude)
        setLng(longitude)
    }, [latitude, longitude])

    console.log(lat)
    console.log(lng)

    return (
        <div id="map_id">
            <MapContainer 
                center={[location.lat, location.lng]} 
                zoom={13}
                scrollWheelZoom={false} 
            >
                <TileLayer
                        url={`https://api.mapbox.com/styles/v1/esilva644/ckm3kto7vbpxw17opfjou2vyz/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`}
                    />
                    <Marker position={[lat, lng]}>
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
