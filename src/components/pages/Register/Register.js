import React, { useEffect, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loader from '../../shared/Loader';
import SocialLogin from '../../shared/SocialLogin/SocialLogin';

const Register = () => {
    const [inputError, setInputError] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()

    const [stateUser,stateLoading] = useAuthState(auth);

  

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);

    const [token] = useToken(user||stateUser)

    const onSubmit = async (e) => {
        setInputError('')
        const email = e.email;
        const password = e.password;
        const password2 = e.password2;
        if (password === password2) {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: e.username });


        } else {
            setInputError('Both password field should be same')

        }
    }

    useEffect(() => {
        if (token||stateUser) {
            navigate('/')
        }
        if (error) {
            setInputError(error.message);
        }
    }, [token,stateUser,error])



   

    if (loading || stateLoading || updating) {
        return (
            <div className="my-20">
                <Loader />
            </div>
        )
    }

    return (
        <div className="min-h-screen max-w-md mx-auto grid place-content-center">
            <div className="border-primary border-2 p-5 rounded-md bg-base-100 shadow-xl mx-2">
                <div className="text-center">
                    <div className="text-xl md:text-4xl font-bold text-center">Register</div>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <label htmlFor="username">Username</label>

                        <input type="text" placeholder="Username.." className="input input-bordered w-full" {...register("username", { required: true })} required />

                        {errors.username && <p className="text-red-500 text-sm">Username is required</p>}
              

                        <label htmlFor="email">Email Address</label>

                        <input type="email" placeholder="Email.." className="input input-bordered w-full" {...register("email", { required: true })} required />
                        {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
                        <br></br>

                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password.." className="input input-bordered w-full"  {...register("password", { required: true, minLength: 6 })} required />


                        {errors.password?.type === 'required' && <span className="text-red-500 text-sm">Passsword is required</span>}
                        {errors.password?.type === 'minLength' && <span className="text-red-500 text-sm">Minimum 6 Characters</span>}
                        <br></br>

                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" placeholder="Confirm Password" className="input input-bordered w-full"  {...register("password2", { required: true, minLength: 6 })} required />

                        {errors.password2?.type === 'required' && <span className="text-red-500 text-sm">Passsword is required</span>}
                        {errors.password2?.type === 'minLength' && <span className="text-red-500 text-sm">Minimum 6 Characters</span>}<br></br>
                        {inputError && <span className="text-red-500 text-sm">{inputError}</span>}

                        <br></br>
                        <input className="btn btn-secondary btn-sm rounded-full mx-auto text-center mt-5" type="submit" value="Create Account" />

                        <p className="text-sm pt-2">Already have an account? <Link className="link" to='/login'>Login</Link> </p>
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

export default Register;