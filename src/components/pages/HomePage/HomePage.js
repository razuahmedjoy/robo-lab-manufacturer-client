import React from 'react';
import HeroSection from './HeroSection';
import Reviews from './Reviews';
import ServiceCounter from './ServiceCounter';
import Tools from './Tools';
import './Homepage.css';
import CustomizedTools from './CustomizedTools';
import FaqSection from './FaqSection';

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

            {/* get customized tools */}

            <section>
                <CustomizedTools/>
            </section>

            {/* stats */}
            <section>
                <ServiceCounter/>

            </section>


            {/* FAQ Section */}
            <section>
                <FaqSection/>

            </section>
        </main>
    );
};

export default HomePage;