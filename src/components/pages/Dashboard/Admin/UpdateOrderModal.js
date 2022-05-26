import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../../api/axiosPrivate';

const UpdateOrderModal = ({ setUpdateorder, order,refetch }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();


    const onSubmit = async (data) => {

        // console.log(data);
        const updating = toast.loading("Updating");

        const res = await axiosPrivate.put(`http://localhost:5000/order/update/${order._id}`,data)
        const result = await res.data;
        if(result.matchedCount > 0){
           
            
            setUpdateorder(null);
            refetch()
            toast.update(updating, { render: "Updated", type: "success", isLoading: false,autoClose: 3000 });

        }
    }

    return (
        <>
            <input type="checkbox" id="updateOrderModal" className="modal-toggle" />
            <label htmlFor="updateOrderModal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="font-bold text-lg text-blue-500">Update Order Status for {order.tool}  ?</h3>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="status">Status Update</label>

                        <select type="text" name="email" className="input input-bordered w-full" {...register("status", { required: true })} defaultValue={order.status} >
                            <option value="Pending">Pending</option>
                            <option value="Approved">Approved</option>
                            <option value="Shipped">Shipped</option>
                        </select>

                        <input className="btn btn-primary text-white btn-sm rounded-full mx-auto text-center mt-5" type="submit" value="Update" />

                    </form>
                    <div className="modal-action">


                        <label htmlFor="updateOrderModal" className="btn btn-sm">Cancel</label>
                    </div>
                </label>
            </label>
        </>
    );
};

export default UpdateOrderModal;