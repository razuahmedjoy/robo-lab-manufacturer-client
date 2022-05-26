import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewSlider = ({review}) => {

    return (
        <div className="card md:max-w-sm bg-gray-100 mx-5">
            <div className="card-body items-center text-center">
                
                <div className="card-actions justify-end">
                    I loved there service very much. It's a great pleasure to get there service
                </div>
                <p>{review.rating} <FontAwesomeIcon className="text-yellow-500" icon={faStar}/></p>
                <h2 className="text-sm">{review.name}</h2>
            </div>
        </div>
    );
};

export default ReviewSlider;