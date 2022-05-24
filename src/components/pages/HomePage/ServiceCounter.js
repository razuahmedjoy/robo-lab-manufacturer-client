import { faSellcast } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faPeopleGroup, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import SectionTitle from '../../shared/SectionTitle';

const ServiceCounter = () => {
    return (
        <div className="pt-10 pb-5">
            <SectionTitle>All Over The World</SectionTitle>

            <div className="shadow text-center justify-items-center mx-auto w-full mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 rounded-lg">

                <div className="stat border-r-2">

                    <div className="stat-title text-accent mb-2">
                        <FontAwesomeIcon size="2xl" icon={faGlobe} />
                    </div>
                    <div className="stat-title">Country</div>
                    <div className="stat-value">56+</div>

                </div>

                <div className="stat">
                    <div className="stat-title text-accent mb-2">
                        <FontAwesomeIcon size="2xl" icon={faSellcast} />
                    </div>
                    <div className="stat-title">Manufactured</div>
                    <div className="stat-value">78,000+</div>

                </div>

                <div className="stat">

                    <div className="stat-title text-accent mb-2">
                        <FontAwesomeIcon size="2xl" icon={faPeopleGroup} />
                    </div>
                    <div className="stat-title">Clients</div>
                    <div className="stat-value">10,000+</div>
                </div>
                <div className="stat">
                    <div className="stat-title text-accent mb-2">
                        <FontAwesomeIcon size="2xl" icon={faThumbsUp} />
                    </div>
                    <div className="stat-title">Reviews</div>
                    <div className="stat-value">576+</div>
                </div>

            </div>
        </div>
    );
};

export default ServiceCounter;