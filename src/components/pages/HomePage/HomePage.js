import React from 'react';
import HeroSection from './HeroSection';
import Reviews from './Reviews';
import ServiceCounter from './ServiceCounter';
import Tools from './Tools';
import './Homepage.css';

const HomePage = () => {
    return (
        <main>


            {/* hero section */}
            <section>

                <HeroSection />

            </section>

            {/* tools section */}

            <section>
                <Tools/>

            </section>

            {/* reviews Section */}
            <section>
                <Reviews/>

            </section>

            {/* stats */}
            <section>
                <ServiceCounter/>

            </section>
        </main>
    );
};

export default HomePage;