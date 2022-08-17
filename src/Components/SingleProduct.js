import React from 'react';
import grocary from '../Image/grocary.jpg'
const SingleProduct = ({ product }) => {
    return (

        <div className='col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2 mb-3 '>
            <div className='border'>
                <div className=' box-height'>
                    <img src={grocary} alt="" style={{ width: "140px", height: "200px" }} />
                    <h5> {product.name}</h5>
                    <h6>Stock: {product.stock}</h6>
                    <h6>Price: {product.selling_price} $</h6>

                </div>
                <button className='btn mb-2 ms-5'>Buy Now</button>
            </div>
        </div>
    );
};

export default SingleProduct;