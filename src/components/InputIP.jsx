import React, { useState, useContext } from 'react'
import { FaAngleRight } from "react-icons/fa";
import { AddressIpContext } from '../store/AddressIPContext';

export default function InputIP() {

    const [value, setValue] = useState('')
    const { inputIp } = useContext(AddressIpContext)

    return (
        <div id="input_IP">
            <input 
                type="text" 
                placeholder="Search for any IP address or domain" 
                onChange={(event) => setValue(event.target.value)} 
            />
            <button type="button" onClick={() => inputIp(value)}>
                <FaAngleRight />
            </button>
        </div>
    )
}
