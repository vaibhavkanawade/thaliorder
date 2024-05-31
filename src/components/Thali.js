import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';

function Thali() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div className='home' >

                <button onClick={() => { navigate("/Menu") }}>Menu</button>

            </div>

        </>
    )
}
export default Thali;
