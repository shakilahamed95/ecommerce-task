import React from 'react';
import './Summery.css'

const Summery = () => {
    return (
        <div className='summery'>
            <div className='container'>
                <div className='row  p-4'>
                    <div className='col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3'>
                        <div>
                            <i className="fas fa-gift font"></i>
                        </div>
                        <div>
                            <h3>Free Shipping</h3>
                            <p>For all oders over $500</p>
                        </div>
                    </div>
                    <div className='col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3'>
                        <div>
                            <i className="fas fa-exchange font"></i>
                        </div>
                        <div>
                            <h3>Free Return</h3>
                            <p>Free Return within 5 days</p>
                        </div>
                    </div>
                    <div className='col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3'>
                        <div>
                            <i className="fas fa-shield font"></i>
                        </div>
                        <div>
                            <h3>Secure Payment</h3>
                            <p>100% secure payment</p>
                        </div>
                    </div>
                    <div className='col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3'>
                        <div>
                            <i className="fas fa-headset font"></i>
                        </div>
                        <div>
                            <h3>24/7 Support</h3>
                            <p>Online top quality support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summery;