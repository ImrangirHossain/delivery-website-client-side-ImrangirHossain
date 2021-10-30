import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [someServices, setSomeServices] = useState([]);
    useEffect(()=>{
        fetch('http://nameless-island-48040.herokuapp.com/services')
        .then(res => res.json())
        .then(data=> setSomeServices(data))
    },[])
    return (
        <div className="my-3">
             <h2 className="fw-bold text-start p-3">ALL SERVICES</h2>

            {/* services */}

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-0 mx-2 ">
            {
                someServices.map(service => <Service
                    key={service.key} service={service}></Service>)
            }
            </div>
        </div>
    );
};

export default Services;