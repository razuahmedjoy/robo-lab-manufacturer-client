import React from 'react';
import { useQuery } from 'react-query';
import axiosPrivate from '../../../../api/axiosPrivate';
import Loader from '../../../shared/Loader';
import AllUsersRow from './AllUsersRow';

const AllUsers = () => {

    // using react query instead of normal fetch
    const { data: allusers, isLoading,refetch } = useQuery(['allusers'], () =>
        axiosPrivate.get(`https://cryptic-sierra-30199.herokuapp.com/allusers`)
            .then(res => res.data)
    )

    if(isLoading){
        return <Loader/>
    }

    return (
        <div>
            <h2 className="text-center text-2xl my-3">All Users</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
               
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Roll</th>
                            <th>Access</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           allusers && allusers.map((user,index)=><AllUsersRow key={user._id} user={user} refetch={refetch} index={index}/>)
                       }
                       
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;