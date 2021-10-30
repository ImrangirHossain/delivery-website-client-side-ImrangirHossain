import React from 'react';
import img from '../../image/delibary-boy.jpg'
const AboutHome = () => {
    return (
        <div>
        <h2 className="mt-3">ABOUT US</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4 mx-5 d-flex align-items-center">
           <div className="col">
               <img className="img-fluid" src={img} />
           </div>
           <div className="col text-start">
            <h3>Why Choose Us</h3>
               <p className="text-muted">We believe the skillset  experience we possess not only shall bring value to you, but in turn shall also help us to acquire experience  sharpen our skills amidst you professional work. If given an opportunity we positively look forward to give our best to you.</p>
           </div>
       </div>
   </div>
    );
};

export default AboutHome;