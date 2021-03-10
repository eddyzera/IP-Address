import React, { useContext } from 'react'
import { AddressIpContext } from '../store/AddressIPContext'

export default function Address() {

    const { ip, isp } = useContext(AddressIpContext)

    return (
        <div id="address">
            <div className="container">
                <div className="box">
                    <h2>IP adress</h2>
                    <p>{ip}</p>
                </div>
                <div className="box location">
                    <h2>Location</h2>
                    <p>Mogi das Cruzes - SP</p>
                </div>
                <div className="box timezone">
                    <h2>Timezone</h2>
                    <p>UTC-05:00</p>
                </div>
                <div className="box">
                    <h2>ISP</h2>
                    <p>{isp}</p>
                </div>
            </div>
        </div>
    )
}
