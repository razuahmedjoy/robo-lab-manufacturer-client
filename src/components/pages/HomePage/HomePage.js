import React from 'react';
import HeroSection from './HeroSection';
import Tools from './Tools';

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
        </main>
    );
};

export default HomePage;