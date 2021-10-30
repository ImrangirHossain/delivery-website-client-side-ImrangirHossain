import React from 'react';
import AboutDelibary from '../About-Delibary/AboutDelibary';
import AboutHome from '../About-Delibary/AboutHome';
import Popularity from '../About-Delibary/Popularity';
import Banner from '../Banner/Banner';
import useAuth from '../../hooks/useAuth';
import Services from '../Services/Services';


const Home = () => {
    const {isLoading} = useAuth();
    if (isLoading) {
        return<div className="spinner-border text-info" role="status"></div>
         }
    return (
        <div>
            <Banner></Banner>
            <AboutDelibary></AboutDelibary>
            <Services></Services>
            <AboutHome></AboutHome>
            <Popularity></Popularity>
        </div>
    );
};

export default Home;