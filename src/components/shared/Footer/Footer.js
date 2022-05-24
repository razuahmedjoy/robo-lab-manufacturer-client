import { faEnvelopeCircleCheck, faLocationPinLock, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="footer p-10 bg-primary text-white">
            <div className="max-w-sm">
                <span class="footer-title">About RoboLab</span>
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
                <span class="footer-title">Company</span>
                <Link to="#" class="link link-hover">About us</Link>
                <Link to="#" class="link link-hover">Contact</Link>
                <Link to="#" class="link link-hover">Jobs</Link>
                <Link to="#" class="link link-hover">Press kit</Link>
            </div>
            <div>
                <span class="footer-title">Important Links</span>
                <Link to="#" class="link link-hover">Terms of use</Link>
                <Link to="#" class="link link-hover">Privacy policy</Link>
                <Link to="#" class="link link-hover">Cookie policy</Link>
            </div>
            <div>
                <span class="footer-title">Newsletter</span>
                <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text text-white">Enter your email address</span>
                    </label>
                    <div class="relative">
                        <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" />
                        <button class="btn btn-secondary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;