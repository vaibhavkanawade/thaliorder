import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Product from './Product'

function Menu() {
    const productData = useSelector(state => state.counter.products)
    return (
        <>

            <Navbar />

            <div className='container'>
                <h1 className='text-center'>Menu</h1>
                <div className='row my-2 text-center'>
                    {
                        productData.map((ele, i) => (
                            <Product key={i} data={ele} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Menu;