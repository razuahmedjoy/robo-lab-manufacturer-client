import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return;
    }

    const logOut = () => {
        localStorage.removeItem('accessToken');
        signOut(auth);

    }
    return (
        <div className="navbar bg-base-100 fixed top-0 z-[9999] shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>

                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Robo Lab</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><a>Item 1</a></li>
                    <li tabIndex="0">
                        <a>
                            Parent
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2 bg-white">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {
                    user ?


                        <>
                           
                            <div className="dropdown dropdown-end">
                                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="user" src="https://i.ibb.co/RYrrdrD/899048ab0cc455154006fdb9676964b3.jpg" />
                                    </div>
                                </label>
                                <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 gap-y-1">
                                    <li>
                                        <Link to="#" className="justify-between">
                                            {
                                                user?.displayName ? user.displayName :
                                                    user?.email.split("@")[0]
                                            }

                                        </Link>
                                    </li>
                                    <li><Link to="/dashboard">Dashboard</Link></li>
                                    <li>
                                        <p onClick={logOut} className="btn btn-sm btn-secondary">Logout</p>
                                    </li>
                                </ul>
                            </div>

                        </>

                        :
                        <>
                            <Link to="/login" className="btn btn-sm btn-primary text-white">Login</Link>
                            <Link to="/register" className="btn btn-sm btn-secondary">SignUp</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;