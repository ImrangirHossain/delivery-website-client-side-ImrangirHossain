import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import OrderDetails from '../BookingDetails/BookingDetails';
import AllBookingDetails from './AllBookingDetails';

const ManageAllBooking = () => {
    const [orders, setOrders] = useState([]);
    const {isLoading} = useAuth();
        useEffect(()=>{
            fetch('https://nameless-island-48040.herokuapp.com/orders')
            .then(res => res.json())
            .then(data=> setOrders(data))
        },[]);
        if (isLoading) {
            return<div className="spinner-border text-info" role="status"></div>
            }

        return (
            <div className="Order p-4">
            <h2 className="fw-bold text-start py-3 px-1">MANAGE ALL BOOKING</h2>
               
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-0 mx-2 ">
               {
                        orders.map(order => <AllBookingDetails 
                            key={order._id}
                            order={order}
                            orders= {orders}
                            setOrders={setOrders}
                        >
                        </AllBookingDetails>)
                    }
                    </div>
            </div>
        );
    };
export default ManageAllBooking;