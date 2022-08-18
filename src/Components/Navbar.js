import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <h3 className="navbar-brand ms-5 text-white fs-4" href="#">E-Mart</h3>
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link navigation active text-white me-4 " aria-current="page" as={Link} to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navigation active text-white me-4 " aria-current="page" as={Link} to="/allproducts">All Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navigation active text-white me-4 " aria-current="page" as={Link} to="/allreview">Customer Review</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navigation active text-white" aria-current="page" as={Link} to="/all-order">All Order</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;