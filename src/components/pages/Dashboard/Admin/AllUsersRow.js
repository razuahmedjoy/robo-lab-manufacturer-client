import React from 'react';

const AllUsersRow = ({user,index,refetch}) => {

    return (
        <tr>
            <th>{index+1}</th>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
               
            <button disabled={user.role === 'admin'} className="btn btn-primary btn-xs text-white">Make Admin</button>
                    
               
            </td>
        </tr>
    );
};

export default AllUsersRow;