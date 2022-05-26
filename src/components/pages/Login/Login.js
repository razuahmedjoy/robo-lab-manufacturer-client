import React, { useEffect, useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loader from '../../shared/Loader';
import SocialLogin from '../../shared/SocialLogin/SocialLogin';

const Login = () => {

    const [inputError, setInputError] = useState('');

    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(location)
    const from = location?.state?.from?.pathname || '/'

    const [stateUser, stateLoading] = useAuthState(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user)

    useEffect(() => {
        if (token || stateUser) {
            navigate(from, { replace: true })
        }
        if (error) {
            setInputError(error.message);
        }
    }, [token, error, stateUser])


    if (loading || stateLoading) {
        return (
            <div className="my-20">
                <Loader />
            </div>
        )
    }

    const onSubmit = (e) => {
        // console.log(e)
        signInWithEmailAndPassword(e.email, e.password)
    }


    return (
        <div className="min-h-screen max-w-md mx-auto grid place-content-center">
            <div className="border-primary border-2 p-5 rounded-md bg-base-100 shadow-xl mx-2">
                <div className="text-center">
                    <div className="text-xl md:text-4xl font-bold text-center">Login</div>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="email">Email Address</label>

                        <input type="email" placeholder="Email.." name="email" className="input input-bordered w-full" {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
                        <br></br>

                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password.." className="input input-bordered w-full"  {...register("password", { required: true })} />


                        {errors.password && <span className="text-red-500 text-sm">Passsword is required</span>}

                        <br></br>
                        <input className="btn btn-secondary btn-sm rounded-full mx-auto text-center mt-5" type="submit" value="Login" />
                        <br></br>
                        {inputError && <span className="text-red-500 text-sm">{inputError}</span>}

                        <p className="text-sm pt-2">Don't Have any account? <Link className="link" to='/register'>Sign Up</Link> </p>
                        <p className="text-sm pt-2">Forget your password? <Link to="/forget-pass" className="link" >Click Here</Link> </p>
                    </form>

                    <div className="flex flex-col w-full border-opacity-50">

                        <div className="divider">OR</div>
                        <SocialLogin />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;