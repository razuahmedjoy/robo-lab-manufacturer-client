import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../shared/SectionTitle';

const FaqSection = () => {
    return (
        <div className="my-5 py-5">
            <SectionTitle>FAQ</SectionTitle>

            <div className="max-w-lg mx-auto mt-5">

                <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-1">
                    <div class="collapse-title text-xl font-medium">
                        Why Choose RoboLab?
                    </div>
                    <div class="collapse-content">
                        <p>We are only one in Bangladesh who manufacture the products officially.</p>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-1">
                    <div class="collapse-title text-xl font-medium">
                        Do you Sell Retail Tools?
                    </div>
                    <div class="collapse-content">
                        <p>Sorry! As we are a manufacturing company, We don't supply retails products </p>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-1">
                    <div class="collapse-title text-xl font-medium">
                        Can I order any customized tools?
                    </div>
                    <div class="collapse-content">
                        <p>Sure! We are always open to customize your idea and give them to reality.</p>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-1">
                    <div class="collapse-title text-xl font-medium">
                        How much days it takes to deliver?
                    </div>
                    <div class="collapse-content">
                        <p>Delivery depends on so many parameters like, quantity, tools size, customizations etc.</p>
                    </div>
                </div>

            </div>


          
        </div>
    );
};

export default FaqSection;