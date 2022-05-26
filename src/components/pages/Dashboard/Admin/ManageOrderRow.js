import React from 'react';

const ManageOrderRow = ({order,index,setDeleteIt,setupdateOrder}) => {
    return (
        <tr>
            <th>{index+1}</th>
            <td>{order.tool}</td>
            <td>{order.user}</td>
            <td>{order.quantity}</td>
            <td>$ {order.totalPrice}</td>
            <td>{order.payment}</td>
            <td>{order.status}</td>
            <td className="flex gap-x-1"> 
                <label htmlFor="updateOrderModal" onClick={()=>setupdateOrder(order)} className="btn btn-xs btn-info">Update</label>
                <label onClick={()=>setDeleteIt(order)} htmlFor="deleteOrderModal" className="btn btn-xs modal-button btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default ManageOrderRow;