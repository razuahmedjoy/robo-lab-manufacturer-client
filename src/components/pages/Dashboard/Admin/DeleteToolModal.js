import React from 'react';

const DeleteToolModal = ({tool,setDeleteIt}) => {

    const deleteTool = async ()=>{
        
    }
    return (
        <>



            <input type="checkbox" id="delete-tool" class="modal-toggle" />
            <label for="delete-tool" class="modal cursor-pointer">
                <label class="modal-box relative" for="">
                    <h3 class="text-lg text-red-500 font-bold">Are you sure you want to delete it?</h3>
                    <p class="py-4">Keep in mind that it will delete it parmanantly and you can not undo it</p>

                    <div>
                        <button onClick={deleteTool} className="btn btn-xs btn-error text-white">Delete</button>
                    </div>
                </label>
            </label>
        </>
    );
};

export default DeleteToolModal;