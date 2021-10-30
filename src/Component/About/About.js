import React from 'react';
import img from '../../image/about.jpg'
const About = () => {
    return (
        <div>
             <div className="row row-cols-1 row-cols-md-2 g-4 mt-5 mx-5 d-flex align-items-center">
                <div className="col">
                    <img className="img-fluid w-75" src={img} />
                </div>
                <div className="col text-start">
                    <h3>SOME WORDS ABOUT US</h3>
                    <p className="text-muted">Why using our delivery services? We guarantee that your sending will be delivered safely and in time to any point of our planet. Our delivery company built thousands of depots in dozens of countries all around the Globe to provide our clients with high-quality international delivery services.</p>
                    <p className="text-muted">Each our employee loves what he or she does. That’s why our services are the best for any despatch goal.</p>
                </div>
            </div>
        </div>
    );
};

export default About;