import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loader from './Loader';

const ForgotPass = () => {


    const { register, formState: { errors }, handleSubmit } = useForm();

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    useEffect(() => {
        if(error) {
            toast.error(error?.message);
        }
        
    },[error])

    const onSubmit = async (e) => {
        await sendPasswordResetEmail(e.email);
        if(!error){
            toast.success("Email Sent")
        }
        
       
    }
    
    if(sending){
        return <Loader/>
    }
    return (
        <div className="min-h-screen max-w-md mx-auto grid place-content-center">
            <div className="border-primary border-2 p-5 rounded-md bg-base-100 shadow-xl mx-2">
                <div className="text-center">
                    <div className="text-xl md:text-3xl font-bold text-center">Forgot my Password</div>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="email">Email Address</label>

                        <input type="email" placeholder="Email.." name="email" className="input input-bordered w-full" {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
                        <br></br>

                        <input className="btn btn-secondary btn-sm rounded-full mx-auto text-center mt-5" type="submit" value="Reset" />
                        <br></br>
                        <p className="text-sm pt-2">Back to Login Page <Link className="link" to='/login'>Login</Link> </p>
                   

                      
                     
                    </form>

          
                </div>
            </div>
        </div>
    );
};

export default ForgotPass;