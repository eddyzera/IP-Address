import React, {useContext} from 'react'
import InputIP from '../components/InputIP'
import Address from '../components/Address'
import MapAddress from '../components/MapAddreess'
import { AddressIpContext } from '../store/AddressIPContext'

export default function Home() {

    const { isMap } = useContext(AddressIpContext)

    return (
        <div id="home">
            <div className="home-top">
                <div className="container">
                    <div className="flex-container">
                        <h1>IP Address</h1>
                        <InputIP />
                    </div>
                </div>
            </div>
            <Address />
            <div className="home-bottom">
                { isMap && <MapAddress /> }
            </div>
        </div>
    )
}
