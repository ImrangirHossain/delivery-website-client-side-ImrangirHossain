import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../image/banner.jpg'
const Banner = () => {
    return (
        <div className="bg-info d-md-flex  align-items-center">
            <div className="col-md-6 col-sm-12 p-5">
            <img src={image} className="d-block w-75 pe-5  ms-auto " alt="..."/>
            </div>
            <div className="col-md-6 col-sm-12 ps-5 p-5">
            <div className="text-start mb-auto text-white">
                    <h1>PROVIDING THE HIGHEST</h1>
                      <p className="fs-3"><i>quality service 24 hours a day</i></p>
                        <p className="text-muted">Delivesse provides international express delivery of documents, parcels and freight to more than 150 countries around the world with a choice of delivery periods of 4 or 7 days.</p>
                        <Link to="/contact">
                        <button className="btn btn-outline-light fw-bold">CONTACT US <i className="fas fa-chevron-right"></i></button>
                        </Link>
                    </div>
            </div>
            
        </div>
    );
};

export default Banner;