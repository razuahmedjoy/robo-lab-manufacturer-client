import React from 'react';
import slider1 from '../../../images/slider1.jpg'
const HeroSection = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${slider1})` }}>

            <div className="hero-overlay bg-black text-white bg-opacity-50"></div>

            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold text-white">WelCome to Robo Lab</h1>
                    <p className="mb-5 text-white text-lg">We manufacture pcb, arduinos and all other technical items related to robotics. We only provide wholesale service as we are a manufacturing company. </p>
                    <button className="btn btn-primary text-white">Show Prodcuts</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;