import React from 'react';
import './Bnner.css'
import back2 from '../../Image/back2.jpg'
import back3 from '../../Image/back3.jpg'
const Banner = () => {
    return (
        <div>
            {/* <div className='background-img d-flex justify-content-left align-items-center text-white'>
                <div className='m-5 p-5'>
                    <h1 className='text'>New Arrivals</h1>
                    <h2 className='text'>Upto 20% <span className='text-danger'>Discount</span></h2>
                </div>
            </div> */}
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className='background-image2 d-flex justify-content-end align-items-center text-white'>
                            <div className='banner-text-2'>
                                <h1 className='text'>Get Up to <span className='text-danger'>30%</span>off</h1>
                                <h1 className='text'>In All New Arrivals </h1>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={back2} class="d-block w-100" style={{ height: "80vh" }} alt="..." />
                    </div>
                    <div class="carousel-item">
                        <div className='background-img d-flex justify-content-left align-items-center text-white'>
                            <div className='banner-text-1'>
                                <h1 className='text'>Every Purchase</h1>
                                <h1 className='text'> Will Be Made</h1>
                                <h1 className='text'> With Pleasure</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;