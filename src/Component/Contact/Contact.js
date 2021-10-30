import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <div className="my-3 ">
                <div>
                     <h1 className="text-start ps-3">CONTACT US</h1>
                </div>

            {/* location and numbers for contact */}

              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-0 mx-2 mb-3">
              <div className="col location text-start text-center">
                    <div className="card  h-100">
                    <div className="card-body">
                    <i className="fas fa-map-marker-alt"></i>
                    <h5 className="card-title">Our Location</h5>
                    <p><small>350 Fifth Avenue, 34th floor New York NY 10118-3299 USA</small></p>
                    </div>
                    </div>
                </div>
              <div className="col location text-start text-center">
                    <div className="card  h-100">
                    <div className="card-body">
                    <i className="far fa-id-badge"></i>
                    <h5 className="card-title">Contact us Anytime</h5>
                    <p><small>Mobile: (+1) 800 555 888 <br /> Fax: (+1) 800 666 999</small></p>
                    </div>
                    </div>
                </div>
              <div className="col location text-start text-center">
                    <div className="card  h-100">
                    <div className="card-body">
                    <i className="fas fa-envelope-open-text"></i>
                    <h5 className="card-title">Write Some Words</h5>
                    <p><small>Support24/7@domain.com <br /> Info@domain.com</small></p>
                    </div>
                    </div>
                </div>
              </div>

              <div>
            <div className="my-5">
            <h3>YOUR INFORMATION</h3>

            <div className="form text-start">
                <div className="row row-cols-md-3 row-cols-1 g-4 mx-3 my-2">
                    <div className="col">
                        <input type="text" className="form-control"  placeholder="Your Name*" />
                    </div>
                    <div className="col">
                        <input type="email" className="form-control"  placeholder="Your Email Address*" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control"  placeholder="Your Phone Number" />
                    </div>
                </div>
                <div className="form-floating mx-4">
                    <textarea className="form-control" placeholder="Massage" id="floatingTextarea2" style={{height: '150px'}}></textarea>
                    <label htmlFor="floatingTextarea2"><small className="text-muted">Comments / Question* </small> </label>
                </div>
                <button className="text-start btn btn-primary mx-4 my-3">SEND MASSAGE</button>
            </div>
        </div>
        </div>

            </div>
    );
};

export default Contact;