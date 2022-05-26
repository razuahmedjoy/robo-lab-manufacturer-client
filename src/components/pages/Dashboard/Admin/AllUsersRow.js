import React from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../../api/axiosPrivate';

const AllUsersRow = ({user,index,refetch}) => {

    const makeAdmin = async ()=>{
        const res = await axiosPrivate.put(`https://cryptic-sierra-30199.herokuapp.com/makeadmin/${user.email}`)
        const result = await res.data
        if(result.modifiedCount>0){
            toast.success("Successfully granted Admin Access")
        }else{
            toast.error("You dont have access to do that")
        }
    }

    return (
        <tr>
            <th>{index+1}</th>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
               
            <button onClick={makeAdmin} disabled={user.role === 'admin'} className="btn btn-primary btn-xs text-white">Make Admin</button>
                    
               
            </td>
        </tr>
    );
};

export default AllUsersRow;