import React from 'react';

const Email = () => {
    return (
        <div style={{ backgroundColor: "#FAE5E5" }}>
            <div className='d-flex align-items-center justify-content-center col-12 col-sm-12 col-md-12 col-lg-12 mt-4 p-5'>
                <div>
                    <h1>LET'S STAY IN TOUCH</h1>
                    <p>Get updates on sales, specials and more</p>
                    <input className="form-control" type="email" placeholder="PLEASE ENTER YOUR EMAIL" />
                    <br />
                    <button className='btn btn-primary'>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Email;