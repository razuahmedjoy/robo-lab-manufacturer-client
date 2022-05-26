import React from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../../api/axiosPrivate';

const DeleteConfirmModal = ({order,setDeleteIt,refetch}) => {
    const{_id} = order;

    const cancelOrder = async () => {
        
        const res = await axiosPrivate.delete(`http://localhost:5000/order/${_id}`);
        const data = await res.data;
        if (data.deletedCount > 0) {
            toast.success("SuccessFully Deleted");
            setDeleteIt(null)
            refetch();
        }

    }

    return (
        <>
            <input type="checkbox" id="deleteOrderModal" className="modal-toggle" />
            <label htmlFor="deleteOrderModal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete order for {order.tool}  ?</h3>
                    <p className="py-4">If you delete it once You will loss all data of this object. It can't be undo</p>
                    <div className="modal-action">

                        <button onClick={cancelOrder} className="btn btn-sm btn-error">Delete</button>
                        <label  htmlFor="deleteOrderModal" className="btn btn-sm">Cancel</label>
                    </div>
                </label>
            </label>
        </>
    );
};

export default DeleteConfirmModal;