import React from 'react';
import img1 from '../../image/delibary-price.png'
import img2 from '../../image/delibary-term.png'
import img3 from '../../image/nearest-depot.png'
import img4 from '../../image/curior.png'

const AboutDelibary = () => {
    const aboutDElibaryStyle={
        backgroundColor: '#F5F7FA'
    }
    return (
        <div style={aboutDElibaryStyle}>
            <div className="row row-cols-md-4 row-cols-1 p-4 gx-1 gy-3">
            <div className="col">
                <img src={img1} alt="" />
                <h3 className="my-2">Delivery Price</h3>
                <p className="text-muted">Our prices depend on the size of your parcel.</p>
            </div>
            <div className="col">
                <img src={img2} alt="" />     
                <h3 className="my-2">Delivery Term</h3>
                <p className="text-muted">All deliveries are carried within several days.</p>
            </div>
            <div className="col">
                <img src={img3} alt="" />   
                <h3 className="my-2">Nearest Depot</h3>
                <p className="text-muted">We got depots in 56 countries worldwide.</p>
            </div>
            <div className="col">
                <img src={img4} alt="" />  
                <h3 className="my-2">Call for a Courier</h3>
                <p className="text-muted">Cannot receive your delivery? Let us send it to you with a mail guy.</p>
            </div>
            </div>
        </div>
    );
};

export default AboutDelibary;