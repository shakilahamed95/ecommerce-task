import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-dark">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <h3 class="navbar-brand ms-5 text-white" href="#">E-Mart</h3>
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link className="nav-link navigation active text-primary me-4" aria-current="page" as={Link} to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link navigation active text-primary me-4" aria-current="page" as={Link} to="/all-User">All User</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link navigation active text-primary" aria-current="page" as={Link} to="/all-order">All Order</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;