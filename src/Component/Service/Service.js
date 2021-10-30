import React from 'react';
import { NavLink } from 'react-router-dom';

const Service = (props) => {
    const {title,discription,img,key } = props.service;
    return (
        <div>
             <div className="col text-start">
                    <div className="card  h-100">
                    <img height="225" src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                     <p><small> {discription}</small></p>          
                     <NavLink to={`/placeOrder/${key}`}>
                          <button className="btn btn-primary"> BOOK NOW <i className="text-dark fas fa-shopping-cart"></i></button>
                    </NavLink>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Service;