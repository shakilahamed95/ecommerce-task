import React from 'react';
import useProducts from '../Hooks/useProducts';
import SingleProduct from '../Components/SingleProduct'
const AllProducts = () => {
    const [products, setProducts] = useProducts()
    return (
        <div className='container'>
            <div className="row container">
                <h1 className="text-primary text-center mt-4 mb-4">All Products</h1>
                {
                    products.map(product => <SingleProduct
                        key={product._id}
                        product={product}
                    ></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default AllProducts;