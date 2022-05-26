import React from 'react';

const UpdateOrderModal = ({ setUpdateorder, order }) => {

    const updateStatus = () => {

    }
    return (
        <>
            <input type="checkbox" id="updateOrderModal" className="modal-toggle" />
            <label htmlFor="updateOrderModal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="font-bold text-lg text-blue-500">Update Order Status for {order.tool}  ?</h3>

                    <form>
                        <select placeholder="Rating" name="rating" className="input input-bordered w-full mt-5">
                            <option value="Pending">Pending</option>
                            <option value="Approved">Approved</option>
                            <option value="Shipped">Shipped</option>
                            

                        </select>
                    </form>

                    <div className="modal-action">

                        <button onClick={updateStatus} className="btn btn-sm btn-primary text-white">Update</button>
                        <label htmlFor="updateOrderModal" className="btn btn-sm">Cancel</label>
                    </div>
                </label>
            </label>
        </>
    );
};

export default UpdateOrderModal;