import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loader from '../../shared/Loader';

const OrderModal = ({ item }) => {
    const { register, handleSubmit } = useForm();
    
    const [user,loading] = useAuthState(auth);
    const navigate = useNavigate()

    if (loading) {
        return <Loader/>
    }

    const onSubmit = data => {

        const order = {
            tool:item.name,
            toolId:item._id,
            quantity:data.quantity,
            totalPrice:data.totalPrice,
            user:user.email,
            contact_no:data.contact_no,
            status:"Placed",
            payment:"unpaid"
        }

        fetch('http://localhost:5000/order',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body:JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
           
                toast.success("Your Order Placed!");
                navigate('/dashboard');


            }
        })
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
                            <input className="input input-bordered w-full" type="email" {...register("email")} value={user?.email} readOnly/>
                        
                            <label htmlFor="quantity" className="label pb-0">Quantity</label>
                            <input className="input input-bordered w-full" type="number" {...register("quantity")} value={item.quantity} readOnly/>
                            
                            <label htmlFor="quantity" className="label pb-0">Total Price</label>
                            <input className="input input-bordered w-full" type="number" {...register("totalPrice")} value={item.quantity * item.price} readOnly/>
                            
                            <label htmlFor="contact_no" className="label pb-0">Contact No.</label>
                            <input className="input input-bordered w-full" type="number" {...register("contact_no")}/>

                        
                     
                            <input className="btn btn-primary text-white" type="submit" value="Confirm Order" />
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default OrderModal;