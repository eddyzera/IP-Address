import { createContext, useState, useEffect } from 'react'
import ipAddress from '../api/ipAddress'

export const AddressIpContext = createContext()

export default function AddressIpProvider ({ children }) {

    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongetude] = useState(0)
    const [ipInput, setIpInput] = useState('')

    async function inputIp(value) {
        const result = await ipAddress(value)
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
        ip
    }

    return (
        <AddressIpContext.Provider value={store}>
            { children }
        </AddressIpContext.Provider>
    )
}