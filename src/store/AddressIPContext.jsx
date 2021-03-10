import { createContext, useState } from 'react'
import ipAddress from '../api/ipAddress'

export const AddressIpContext = createContext()

export default function AddressIpProvider ({ children }) {

    const [latitude, setLatitude] = useState(1.28967)
    const [longitude, setLongetude] = useState(103.85007)
    const [ipInput, setIpInput] = useState('')
    const [isMap, setIsMap] = useState(false) 

    async function inputIp(value) {
        const result = await ipAddress(value)
        setIsMap(true)
        setMap(result)
        setIpInput(result)
    }


    async function setMap(value) {
        const { location } = value
        setLatitude(location.lat)
        setLongetude(location.lng)
    }


    const { isp, ip } = ipInput

    const store = {
        latitude,
        longitude,
        inputIp,
        isp,
        ip,
        isMap
    }

    return (
        <AddressIpContext.Provider value={store}>
            { children }
        </AddressIpContext.Provider>
    )
}