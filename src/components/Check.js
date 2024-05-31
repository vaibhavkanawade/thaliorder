import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RemoveItem, ClearItems } from '../redux/slice';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';


const Check = () => {
    const navigate = useNavigate();
    const thali = useSelector(state => state.counter.thali)
    const dispatch = useDispatch();
    const Remove = (id) => {
        dispatch(RemoveItem(id));
    }
    const order = () => {
        if (thali.length < 2) {
            alert("select at least 2 item");

        } else {
            alert("Your order booked");
            // thali.length=0;
            navigate('/');
            dispatch(ClearItems());


        }
    }

    let sum = 0;
    for (const item of thali) {
        sum = sum + item.totalPrice;
    }
    return (
        <>

            <Navbar />

            <div className='container mx-3'>
                <h1 className='text-center text-danger'>Check Your Food</h1>
                <div className='row'>
                    {
                        thali.map((ele, i) => (
                            <div className='col-4' key={i}>
                                <div className='card'>
                                    <img src={ele.image} className="card-img-top" alt="..." width="100px" height="200px" />
                                    <div className="card-body  ">
                                        <h5 className="card-title">{ele.name}</h5>
                                        <p>Price :${ele.price}</p>
                                        <p>Quantity:{ele.quantity}</p>
                                        <p>TotalPrice:${ele.totalPrice}</p>
                                        <button onClick={() => Remove(i)} className="btn btn-primary">Remove</button>
                                    </div>


                                </div>
                            </div>
                        ))

                    }

                    <div className='conatainer text-center m-2 p-2'>
                        <button className='btn btn-info' onClick={order}>order Now<span className='text-warning'>${sum} </span></button>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Check;