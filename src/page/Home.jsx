import React from 'react'
import InputIP from '../components/InputIP'
import Address from '../components/Address'
import MapAddress from '../components/MapAddreess'

export default function Home() {

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
                <MapAddress />
            </div>
        </div>
    )
}
