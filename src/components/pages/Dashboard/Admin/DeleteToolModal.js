import React from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../../api/axiosPrivate';

const DeleteToolModal = ({tool,setDeleteIt, refetch}) => {

    const deleteTool = async ()=>{
        const res = await axiosPrivate.delete(`http://localhost:5000/tool/${tool._id}`);
        
        const result = res.data;
        console.log(result);
        if(result.deletedCount > 0){
            refetch();
            setDeleteIt(null);
            toast.success("Deleted");

        }
    }
    return (
        <>



            <input type="checkbox" id="delete-tool" className="modal-toggle" />
            <label htmlFor="delete-tool" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg text-red-500 font-bold">Are you sure you want to delete it?</h3>
                    <p className="py-4">Keep in mind that it will delete it parmanantly and you can not undo it</p>

                    <div>
                        <button onClick={deleteTool} className="btn btn-xs btn-error text-white">Delete</button>
                    </div>
                </label>
            </label>
        </>
    );
};

export default DeleteToolModal;