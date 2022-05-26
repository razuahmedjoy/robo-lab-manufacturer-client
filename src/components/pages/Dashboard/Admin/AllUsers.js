import React from 'react';
import { useQuery } from 'react-query';
import axiosPrivate from '../../../../api/axiosPrivate';
import Loader from '../../../shared/Loader';
import AllUsersRow from './AllUsersRow';

const AllUsers = () => {

    // using react query instead of normal fetch
    const { data: allusers, isLoading,refetch } = useQuery(['allusers'], () =>
        axiosPrivate.get(`http://localhost:5000/allusers`)
            .then(res => res.data)
    )

    if(isLoading){
        return <Loader/>
    }

    return (
        <div>
            <h2 className="text-center text-2xl my-3">All Users</h2>

            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
               
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Roll</th>
                            <th>actions</th>
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