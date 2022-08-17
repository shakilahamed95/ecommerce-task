import React from 'react';
import customer from '../Image/customer.webp'
const SingleReview = ({ user }) => {
    return (
        <div className='col-12 col-sm-12 col-md-6 col-lg-4  gap-5 mb-5 '>
            <div className='border'>
                <div className='d-flex align-items-center justify-content-start'>
                    <img src={customer} alt="" className='' style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                    <div>
                        <p className='ms-2'>Name: {user.name}</p>
                        <h6 className='ms-2'>Rating : <span style={{ color: "#F6B900" }}>
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                        </span></h6>
                    </div>
                </div>
                <p className='mt-2'>A fantastic E-commerce site. Great cutomer support from beginning to end of the process. They sent me product on time and the exact product I wanted. They do not compromise with the quality. I will order again.</p>
            </div>
        </div>
    );
};

export default SingleReview;