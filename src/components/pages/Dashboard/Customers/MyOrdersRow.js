import React from 'react';

const MyOrdersRow = ({ order, index, setDeleteIt }) => {
    const { tool, quantity, totalPrice, payment, status } = order

  

    return (
        <tr>
            <th>{index}</th>
            <td>{tool}</td>
            <td>{quantity}</td>
            <td>${totalPrice}</td>
            <td> <span className="btn btn-xs btn-error text-white">{payment}</span> </td>
            <td>{status}</td>
            <td className="flex gap-x-1">
                {payment !== 'paid' && <button className="btn btn-xs btn-success">Pay</button>}
                {payment !== 'paid' && <label onClick={()=>setDeleteIt(order)} htmlFor="deleteOrderModal" className="btn btn-xs modal-button btn-error">Delete</label>}
            </td>
        </tr>
    );
};

export default MyOrdersRow;