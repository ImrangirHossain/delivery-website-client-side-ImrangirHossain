import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

    const {serviceId} = useParams();
    const [details, setDetails] = useState([]);
    useEffect(()=>(
        fetch('https://nameless-island-48040.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setDetails(data))
    ),[])

        const singleDetails = details.find(singleDetail => singleDetail.key === serviceId);

        const onSubmit = data => {  
          const {img, title, discription, key} = singleDetails;
          const email = user.email;
          const status ='Pending';
          const newOrder = {img, title, discription, email, key, status};
          fetch('https://nameless-island-48040.herokuapp.com/orders/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    reset();
                }
            })
      };
    return (
        <div >
            <div className="d-flex justify-content-center my-3">
              <div className="col-md-4 col-sm-12 text-start">
                    <div className="card  h-100">
                    <img height="225" src={singleDetails?.img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{singleDetails?.title}</h5>
                     <p><small> {singleDetails?.discription}</small></p>       
                    </div>
                    </div>
                 </div>
                 </div>

             <h2>Booking Information</h2>
                <form onSubmit={handleSubmit(onSubmit)} className=" form text-start mx-auto col-12 col-md-6">
                 <div className="row row-cols-md-13 row-cols-1 g-4 mx-3  my-2">
                            
                 <div className="col">
                 <label className="form-label">Service Name</label>
                 <input defaultValue={singleDetails?.title} {...register("text")} className="form-control"  placeholder="Your Name*" required/>
        
                </div>

                <div className="col">
                 <label className="form-label">Your Name</label>
                 <input defaultValue={user.displayName} {...register("name")} className="form-control"  placeholder="Your Name*" required/>
        
                </div>

              <div className="col">
                <label className="form-label">Your Email address</label>
                <input defaultValue={user.email} {...register("email")} className="form-control"    placeholder="Your Email Address*" required />
              </div>
                
                <div className="col">
                  <label className="form-label">Your Phone Number</label>
                  <input type="number" {...register("number")} className="form-control"  placeholder="Your Number*"  required />
                 </div>
                <div className="col">
                  <label className="form-label">Your Address</label>
                  <input {...register("address")} className="form-control"  placeholder="Your Address*"/>
                 </div>
            </div>
              <input className="btn btn-primary mx-4  my-3" type="submit" value="BOOK SERVICE" />
                  
                 </form>
        </div>
    );
};

export default PlaceOrder;