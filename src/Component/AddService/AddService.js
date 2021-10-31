import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { useEffect } from 'react/cjs/react.development';
import useAuth from '../../hooks/useAuth';

const AddService = () => {
    const { register, handleSubmit, reset,  formState: { errors } } = useForm();

    const {serviceId} = useParams();
    const [details, setDetails] = useState([]);
    useEffect(()=>(
        fetch('https://nameless-island-48040.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setDetails(data))
    ),[])

        const singleDetails = details.find(singleDetail => singleDetail.key === serviceId);

        const onSubmit = data => {  
            
          fetch('https://nameless-island-48040.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
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
        <div className="mb-4">
              <h2 className="my-2">ADD SERVICE</h2>
                <form onSubmit={handleSubmit(onSubmit)} className=" form text-start mx-auto  w-50">
                 <div className="row row-cols-md-13 row-cols-1 g-4 mx-3  my-2">
                            
                 <div className="col">
                 <label className="form-label">Image URL</label>
                 <input {...register("img")} className="form-control"  placeholder="Image URL" required/>
                </div>
                 <div className="col">
                 <label className="form-label">Service Name</label>
                 <input {...register("title")} className="form-control"  placeholder="Service Name" required/>
                </div>
        

                <div className="col">
                 <label className="form-label">Key Number</label>
                 <input {...register("key")} className="form-control"  placeholder="Number of Service" required/>
                </div>

                <div className="col">
                 <label className="form-label">Description</label>
                 <textarea {...register("discription")} className="form-control" required/>
                </div>
             

            </div>
              <input className="btn btn-primary mx-4  my-3" type="submit" value="ADD SERVICE" />
                  
                 </form>
        </div>
    );
};

export default AddService;