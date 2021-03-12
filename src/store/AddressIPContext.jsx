import { createContext, useState } from 'react'
import ipAddress from '../api/ipAddress'

export const AddressIpContext = createContext()

export default function AddressIpProvider ({ children }) {
    const [ipInput, setIpInput] = useState('')
    const [x, setX] = useState(0)

    const [isMap, setIsMap] = useState(false)

    const [locationMap, setLocationMap] = useState({
        lat: -22.2154042, 
        lng: -54.8331331
    });

    
    async function inputIp(value) {
        const result = await ipAddress(value)
        setIsMap(true)

        setLocationMap({
            lat: result.location.lat,
            lng: result.location.lng
        })
        setX(1)
        setIpInput(result)
    }

    console.log(locationMap)

    const store = {
        isMap,
        ipInput,
        inputIp,
        x,
        locationMap
    }

    return (
        <AddressIpContext.Provider value={store}>
            { children }
        </AddressIpContext.Provider>
    )
}