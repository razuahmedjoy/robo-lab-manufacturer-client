import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../../firebase.init';
import Loader from '../../../shared/Loader';
import DeleteConfirmModal from './DeleteConfirmModal';
import MyOrdersRow from './MyOrdersRow';


const MyOrders = () => {

    const [user, stateloading] = useAuthState(auth);
    const [deleteIt, setDeleteIt] = useState(null)



    // using react query instead of normal fetch
    const { data: orders, isLoading, refetch } = useQuery(['orders', user], () => {
        if (user) {
            return fetch(`https://cryptic-sierra-30199.herokuapp.com/my-orders/${user.email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
        }
    }
    )

    if (isLoading || stateloading) {
        return <Loader />
    }

    return (
        <div>
            <h2 className="text-center text-2xl py-3">My Orders</h2>
            {
                orders &&
                <div className="overflow-x-auto px-2">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Tools</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Payment</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <MyOrdersRow key={order._id} order={order} index={index + 1} refetch={refetch} setDeleteIt={setDeleteIt} />)
                            }

                        </tbody>

                    </table>


                </div>
            }






         
     
               {
               deleteIt && 
                <DeleteConfirmModal order={deleteIt} refetch={refetch} setDeleteIt={setDeleteIt}/>
               }

      



        </div >
    );
};

export default MyOrders;