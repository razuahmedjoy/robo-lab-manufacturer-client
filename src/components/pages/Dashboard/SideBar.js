import React from 'react';
import { Link } from 'react-router-dom';
import useProfile from '../../../hooks/useProfile';

const SideBar = () => {
    const [profile, setProfile, setProfileLoading] = useProfile();

    const AdminSidebar = () => {
        return (

           <>
            <li>
                <Link to="manageOrders">Manage Orders</Link>
            </li>
            <li>
                <Link to="addtools">Add Tools</Link>
            </li>
            <li>
                <Link to="allusers">All Users</Link>
            </li>
           </>
        )
    }

    const UserSiderBar = () => {
        return (
            <>
                <li>
                    <Link to="my-orders">My Orders</Link>
                </li>
                <li>
                    <Link to="addreview">Add Review</Link>
                </li>
            </>
        )
    }

    return (
        <div className="drawer-side shadow-xl">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">

                <li>
                    <Link to="myProfile">My Profile</Link>
                </li>

                {
                    profile.role === 'admin' ? 
                    <AdminSidebar /> :
                    <UserSiderBar/>
                }





            </ul>

        </div>
    );
};

export default SideBar;