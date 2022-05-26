import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';

const ReviewSlider = ({ review }) => {

    return (
        <div className="card md:max-w-sm min-h-[200px] bg-gray-100 mx-5">
            <div className="card-body p-5 items-center text-center justify-around">

                <div className="card-actions justify-center">
                    {review.comment}
                </div>

                <h2 className="text-sm">
                    <span>
            
                        <Rating initialRating={review.rating}
                            emptySymbol={<FontAwesomeIcon icon={faStar} />}
                            fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                            readonly
                        ></Rating>
                    </span>
                    <br />
                    {review.user.split('@')[0]}
                </h2>
            </div>
        </div>
    );
};

export default ReviewSlider;