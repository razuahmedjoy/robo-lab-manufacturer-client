import React from 'react';

const ManageToolsRow = ({ tool, index, setDeleteIt }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{tool.name}</td>
            <td>$ {tool.price}</td>
            <td>{tool.minimum_order}</td>
            <td>{tool.available_stock}</td>
            <td>
                <label onClick={()=>setDeleteIt(tool)} for="delete-tool" class="btn btn-xs btn-error modal-button text-white">Delete</label>
           
            </td>

        </tr>
    );
};

export default ManageToolsRow;