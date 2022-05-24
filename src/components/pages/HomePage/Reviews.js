import React, { useEffect, useState } from 'react';
import SectionTitle from '../../shared/SectionTitle';
import ReviewSlider from './ReviewSlider';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };



    return (
        <div className="tools pt-10 pb-5">

            <SectionTitle>Reviews</SectionTitle>

            <div className="px-10 py-10">

                <Slider {...settings}>

                    {
                        reviews.map(review => <ReviewSlider key={review._id} review={review} />)
                    }
                 
                </Slider>
            </div>

        </div>
    );
};

export default Reviews;