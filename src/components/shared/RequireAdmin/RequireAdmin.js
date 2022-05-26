import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import useProfile from '../../../hooks/useProfile';
import Loader from '../Loader';


const RequireAdmin = ({ children }) => {

    
    const [profile,setProfile,setProfileLoading]= useProfile();
    const location = useLocation()

    if(profile){
        // console.log(profile);
    }


    if (setProfileLoading) {
        // console.log("Loading")
        return <Loader />
    }

    if (profile.role !== 'admin') {

        signOut(auth);
        localStorage.removeItem('accessToken');
        return <Navigate to="/login" state={{ from: location }} replace />;



    }

    else {
        return children;

    }


};

export default RequireAdmin;