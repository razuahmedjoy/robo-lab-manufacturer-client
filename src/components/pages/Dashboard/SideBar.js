import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="drawer-side shadow-xl">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">

                <li>
                    <Link to="my-orders">My Orders</Link>
                </li>
                <li>
                    <Link to="addreview">Add Review</Link>
                </li>
                
            </ul>

        </div>
    );
};

export default SideBar;