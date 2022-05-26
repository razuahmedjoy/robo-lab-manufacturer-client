import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../api/axiosPrivate';
import auth from '../../../firebase.init';
import Loader from '../../shared/Loader';

const OrderModal = ({ item }) => {


    const { register, formState: { errors }, handleSubmit } = useForm();

    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate()

    if (loading) {
        return <Loader />
    }

    const onSubmit = data => {
        

        const order = {
            tool: item.name,
            toolId: item._id,
            quantity: item.quantity,
            totalPrice: item.quantity * item.price,
            user: user.email,
            contact_no: data.contact_no,
            status: "Pending",
            payment: "unpaid"
        }

        axiosPrivate.post('http://localhost:5000/order', order)
            .then(res => {
                
                if (res.data.insertedId) {
                    toast.success("Order Placed successfully");
                    navigate('/dashboard');

                }
            }
            )
            .catch(function (error) {
                console.log(error);
                if(error.response.status === 403 || error.response.status ===401){
                    localStorage.removeItem('accessToken')
                    signOut(auth);

                };
            });

    };

    return (
        <div>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Confirm Order for {item.name}</h3>
                    <div className="py-4">

                        <form autoComplete="off" className="flex flex-col gap-y-2" onSubmit={handleSubmit(onSubmit)}>
                            <input className="input input-bordered w-full" type="email" {...register("email")} value={user?.email} readOnly />

                            <label htmlFor="quantity" className="label pb-0">Quantity</label>
                            <input className="input input-bordered w-full" type="number" {...register("quantity")} value={item.quantity} readOnly />

                            <label htmlFor="quantity" className="label pb-0">Total Price</label>
                            <input className="input input-bordered w-full" type="number" {...register("totalPrice")} value={item.quantity * item.price} readOnly />

                            <label htmlFor="address" className="label pb-0">Address</label>
                            <input className="input input-bordered w-full" type="text" {...register("address", { required: true })} />
                            
                            {errors?.address && <p className="text-red-500">Address is required</p>}

                      


                            <label htmlFor="contact_no" className="label pb-0">Contact No.</label>
                            <input className="input input-bordered w-full" type="number" {...register("contact_no")} />




                            <input className="btn btn-primary text-white" type="submit" value="Confirm Order" />
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default OrderModal;