import { faEnvelopeCircleCheck, faLocationPinLock, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-primary text-white">
            <div className="max-w-sm">
                <span className="footer-title">About RoboLab</span>
                <div>We are a manufacturing company who provides qualityfull kits and tools which are used to build modern devices and robotics</div>
                <Link className="font-bold" to="#">
                    <FontAwesomeIcon className="mr-2" icon={faPhone} />
                    01787260577
                </Link>
                <Link className="font-bold" to="#">
                    <FontAwesomeIcon className="mr-2" icon={faEnvelopeCircleCheck} />
                    hello@robolab.com
                </Link>
                <Link className="font-bold" to="#">
                    <FontAwesomeIcon className="mr-2" icon={faLocationPinLock} />
                    New Road, 22/3 Bangladesh
                </Link>

            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link to="#" className="link link-hover">About us</Link>
                <Link to="#" className="link link-hover">Contact</Link>
                <Link to="#" className="link link-hover">Jobs</Link>
                <Link to="#" className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title">Important Links</span>
                <Link to="#" className="link link-hover">Terms of use</Link>
                <Link to="#" className="link link-hover">Privacy policy</Link>
                <Link to="#" className="link link-hover">Cookie policy</Link>
            </div>
            <div>
                <span className="footer-title">Newsletter</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text text-white">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-secondary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;