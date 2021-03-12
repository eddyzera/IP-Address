import React, { useEffect, useState } from 'react'
import { Marker,  TileLayer, MapContainer, Popup } from "react-leaflet";

export default function MapAddreess({ lat, lng }) {

    const [x, setX] = useState(lat)
    const [y, setY] = useState(lng)

    
    useEffect(() => {
        setX(lat)
        setY(lng)
        console.log('renderizou')
    }, [lat, lng])

    // const callbackMemo = useCallback(()=> setPositon(), [lat, lng])

    return (
        <div id="map_id">
            <MapContainer 
                center={[x, y]}
                zoom={13}
                scrollWheelZoom={false} 
            >
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/esilva644/ckm3kto7vbpxw17opfjou2vyz/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`}
                />
                <Marker position={[x, y]}>
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
