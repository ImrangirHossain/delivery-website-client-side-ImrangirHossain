import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import OrderDetails from '../OrderDetails/OrderDetails';
import './Order.css';

const Order = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
        useEffect(()=>{
            fetch('https://nameless-island-48040.herokuapp.com/orders')
            .then(res => res.json())
            .then(data=> setOrders(data))
        },[]);
        const myOrders = orders.filter(order => order.email===user.email)
   console.log(orders);
    return (
        <div className="Order p-4">
        <h2 className="fw-bold text-start py-3 px-1">YOUR BOOKING</h2>
           
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-0 mx-2 ">
           {
                    myOrders.map(order => <OrderDetails 
                        key={order._id}
                        order={order}
                        orders= {orders}
                        setOrders={setOrders}
                    >
                    </OrderDetails>)
                }
                </div>
        </div>
    );
};

export default Order;