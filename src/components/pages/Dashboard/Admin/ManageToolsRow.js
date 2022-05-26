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
                <label onClick={()=>setDeleteIt(tool)} htmlFor="delete-tool" className="btn btn-xs btn-error modal-button text-white">Delete</label>
           
            </td>

        </tr>
    );
};

export default ManageToolsRow;