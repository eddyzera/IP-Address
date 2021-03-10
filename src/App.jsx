import React from 'react'
import Home from './page/Home'
import AddressIpProvider from './store/AddressIPContext'

export default function App() {
    return (
        <div>
            <AddressIpProvider>
                <Home />
            </AddressIpProvider>
        </div>
    )
}
