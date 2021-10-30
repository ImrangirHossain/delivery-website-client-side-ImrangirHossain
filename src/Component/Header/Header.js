import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import useAuth from '../../hooks/useAuth';
const Header = () => {
    const {user,logOut} = useAuth();

    return (
        <nav className="header navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"> 
            <span className="fw-bold mx-5 fs-4">DELIVERY </span>     
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item px-3">
                <Link className="nav-link active fw-bold" aria-current="page" to="/home">HOME</Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link active fw-bold" aria-current="page" to="/services">SERVICES</Link>
              </li>
              
              <li className="nav-item px-3">
                <Link className="nav-link active fw-bold" aria-current="page" to="/contact">CONTACT</Link>
              </li>
              
              <li className="nav-item px-3">
               {user?.email && <Link className="nav-link active fw-bold" aria-current="page" to="/bookings">BOOKINGS</Link>}
              </li>
              <li className="nav-item px-3">
               {user?.email && <Link className="nav-link active fw-bold" aria-current="page" to="/manageAllOrders">MANAGE ALL BOOKINGS</Link>}
              </li>
             
             <li className="nav-link active fw-bold px-2">
                {!user?.email && <NavLink to="/Login">LOGIN</NavLink>}
                <span>{user.displayName} </span>
                {user?.email && <NavLink  onClick={logOut} to="/Login">LOGOUT</NavLink>}
             </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Header;