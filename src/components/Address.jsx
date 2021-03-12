import React, { useContext } from 'react'
import { AddressIpContext } from '../store/AddressIPContext'

export default function Address() {

    const { ipInput } = useContext(AddressIpContext)

    return (
        <div id="address">
            <div className="container">
                <div className="box">
                    <h2>IP adress</h2>
                    { ipInput && (
                        <p>{ipInput.ip}</p>
                    )}
                </div>
                <div className="box location">
                    <h2>Location</h2>
                    {ipInput && (
                        <p>{ipInput.location.city} - {ipInput.location.country}</p>
                    )}
                </div>
                <div className="box timezone">
                    <h2>Timezone</h2>
                    {ipInput && (
                        <p>{ipInput.location.timezone}</p>
                    )}
                </div>
                <div className="box">
                    <h2>ISP</h2>
                    { ipInput && (
                        <p>{ipInput.isp}</p>
                    ) }
                </div>
            </div>
        </div>
    )
}
