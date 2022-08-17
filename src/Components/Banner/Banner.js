import React from 'react';
import './Bnner.css'

const Banner = () => {
    return (
        <div id='home'>
            <div className='background-img d-flex justify-content-left align-items-center text-white'>
                <div className='m-5 p-5'>
                    <h1 className='text'>New Arrivals</h1>
                    <h2 className='text'>Upto 20% <span className='text-danger'>Discount</span></h2>
                </div>

            </div>
        </div>
    );
};

export default Banner;