import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loader from '../Loader';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const googleSignIn =()=>{
        signInWithGoogle();
    }

    useEffect(() => {
        if(user){
            navigate('/')
        }
    },[user])


    if(loading) {
        return <Loader/>
    }

    
    return (
        <div>
            <button onClick={googleSignIn} className="btn btn-primary text-white w-full">
                <FontAwesomeIcon className="mr-3" icon={faGoogle}/>
                Continue with Google</button>
            {
                error && <p className="text-sm text-red-500"> {error.message} </p>
            }
        </div>
    );
};

export default SocialLogin;