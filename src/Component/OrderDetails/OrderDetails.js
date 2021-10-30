import React, { useState } from 'react';

const OrderDetails = (props) => {
   const {order, orders, setOrders} =props;

   const handleDeleteUser = id => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if (proceed) {
        const url = `https://nameless-island-48040.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remainingUsers = orders.filter(user => user._id !== id);
                    setOrders(remainingUsers);
                }
            });
    }
}
    return (
        <div>
            <div className="card h-100">
                    <img height="225" src={order?.img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{order?.title}</h5>
                     <p><small> {order?.discription}</small></p>   
                     <div className="d-flex justify-content-between align-items-end">
                            <button className="btn btn-success">pending</button>
                            <button  onClick={() => handleDeleteUser(order._id)} className="btn btn-danger ">Cannel</button>
                        </div>
                    </div>
                    </div>
        </div>
    );
};
export default OrderDetails;