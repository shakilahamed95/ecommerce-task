import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../Hooks/useProducts';
import SingleProduct from './SingleProduct';

const HomeProducts = () => {
    const [products, setProducts] = useProducts()
    const navigate = useNavigate()
    const handlenavigate = () => {
        navigate("/allproducts")
    }
    return (
        <div className='container'>
            <div className="row">
                <h1 className="text-primary text-center mt-4 mb-4">Featured Products</h1>
                {
                    products.slice(0, 12).map(product => <SingleProduct
                        key={product.product_id}
                        product={product}
                    ></SingleProduct>)
                }
            </div>
            <h5 onClick={handlenavigate} className='d-flex align-items-center justify-content-end mt-3 mb-3 text-primary cursor'>View All Products <i className="fas fa-arrow-right p-2"></i></h5>
        </div>
    );
};

export default HomeProducts;