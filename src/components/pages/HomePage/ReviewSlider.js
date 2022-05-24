import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewSlider = ({review}) => {

    return (
        <div class="card md:max-w-sm bg-gray-100 mx-5">
            <div class="card-body items-center text-center">
                
                <div class="card-actions justify-end">
                    I loved there service very much. It's a great pleasure to get there service
                </div>
                <p>{review.rating} <FontAwesomeIcon className="text-yellow-500" icon={faStar}/></p>
                <h2 class="text-sm">{review.name}</h2>
            </div>
        </div>
    );
};

export default ReviewSlider;