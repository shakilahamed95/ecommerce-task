import React from 'react';
import useUser from '../Hooks/useUser';
import SingleReview from './SingleReview';

const CustomerReview = () => {
    const [users, setUsers] = useUser()
    return (
        <div className='container'>
            <div className="row container">
                <h1 className="text-primary text-center mt-5 mb-5">All Customer Review</h1>
                {
                    users.map(user => <SingleReview
                        key={user._id}
                        user={user}
                    ></SingleReview>)
                }
            </div>
        </div>
    );
};

export default CustomerReview;