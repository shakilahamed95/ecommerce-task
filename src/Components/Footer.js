import React from 'react';

const Footer = () => {
    return (
        <div>
            <div style={{ height: "170px", width: "100%" }} className='text-center bg-dark text-light p-5 '>
                <h5>E-Mart</h5>
                <p>Copyright &copy; {(new Date().getFullYear())} All rights reserved </p>
            </div>
        </div>
    );
};

export default Footer;