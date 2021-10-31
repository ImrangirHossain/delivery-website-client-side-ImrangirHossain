import React from 'react';

const AllBookingDetails = (props) => {
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
                    const remainingOrders = orders.filter(user => user._id !== id);
                    setOrders(remainingOrders);
                }
            });
           }
      }

      const HandleUpdateBooking = id => {
        const updateStatus = {img:order.img, title:order.title, discription:order.discription, status: 'Approved'  }
        console.log(updateStatus)

        const url = `https://nameless-island-48040.herokuapp.com/orders/${id}`;
        console.log(url);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStatus)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    window.location.reload(false)
                }
            })
    }

    return (
        <div>
            <div className="card h-100">
                    <img height="225" src={order?.img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{order?.title}</h5>
                     <p><small> {order?.discription}</small></p>   
                     <p className="text-muted text-start">Book By: {order?.email}</p>
                     <div className="d-flex justify-content-between align-items-end">
                           <div>
                           <button className="btn btn-success me-1">{order.status}</button>
                            <button  onClick={() => handleDeleteUser(order._id)} className="btn btn-danger ">Delete</button>
                           </div>
                           <div>
                               <button onClick={() => HandleUpdateBooking(order._id)} className="btn btn-success">Approved Booking</button>
                           </div>
                        </div>
                    </div>
                    </div>
        </div>
    );
};
export default AllBookingDetails;