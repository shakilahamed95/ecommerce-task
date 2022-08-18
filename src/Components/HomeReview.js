import React from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from '../Hooks/useUser';
import SingleReview from './SingleReview';

const HomeReview = () => {
    const [users] = useUser()
    const navigate = useNavigate()
    const handlenavigate = () => {
        navigate("/allreview")
    }
    return (
        <div className='container'>
            <div className="row">
                <h1 className="text-primary text-center mt-4 mb-4"> Client Review</h1>
                {
                    users.slice(0, 6).map(user => <SingleReview
                        key={user.user_id}
                        user={user}
                    ></SingleReview>)
                }
            </div>
            <h5 onClick={handlenavigate} className='d-flex align-items-center justify-content-end  text-primary cursor'>View All Review <i className="fas fa-arrow-right p-2"></i></h5>
        </div>
    );
};

export default HomeReview;