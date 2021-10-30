import React from 'react';
import img1 from '../../image/thams-up.png'
import img3 from '../../image/delibary-term.png'
import img4 from '../../image/nearest-depot.png'
import img2 from '../../image/curior.png'

const Popularity = () => {
    const aboutDElibaryStyle={
        backgroundColor: '#F5F7FA'
    }
    return (
        <div style={aboutDElibaryStyle}>
            <div className="row row-cols-md-4 row-cols-1 p-4 mt-1 gy-3">
            <div className="col">
                    <img src={img1} alt="" />
                    <h3 className="my-2">8042</h3>
                    <p className="text-muted">Clients who trust in us</p>
            </div>
            <div className="col">
                    <img src={img2} alt="" />
                    <h3 className="my-2">10932</h3>
                    <p className="text-muted">Miles per day</p>
            </div>
            <div className="col ">

                    <img src={img3} alt="" />
                    <h3 className="my-2">5721</h3>
                    <p className="text-muted">Tons of goods</p>
            </div>
            <div className="col ">
                    <img src={img4} alt="" />
                    <h3 className="my-2">759</h3>
                    <p className="text-muted">Depots worldwide</p>
            </div>
            </div>
        </div>
    );
};

export default Popularity;