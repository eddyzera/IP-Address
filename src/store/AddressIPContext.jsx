import { createContext, useState } from 'react'
import ipAddress from '../api/ipAddress'

export const AddressIpContext = createContext()

export default function AddressIpProvider ({ children }) {

    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongetude] = useState(0)
    const [ipInput, setIpInput] = useState('')
    const [location, setLocation] = useState({
        city: '', 
        country: '', 
        timezone: ''
    })
    const [isMap, setIsMap] = useState(false)

    async function inputIp(value) {
        const result = await ipAddress(value)
        setIsMap(true)
        setMap(result)
        setLocationIP(result)
        setIpInput(result)
    }


    function setMap(value) {
        const { location } = value
        setLatitude(location.lat)
        setLongetude(location.lng)
    }

    function setLocationIP (value) {
        setLocation({
            city: value.location.city,
            country: value.location.country,
            timezone: value.location.timezone
        })
    }

    const { isp, ip } = ipInput
    const store = {
        latitude,
        longitude,
        inputIp,
        isp,
        ip,
        isMap,
        location
    }

    console.log(ipInput.location)

    return (
        <AddressIpContext.Provider value={store}>
            { children }
        </AddressIpContext.Provider>
    )
}