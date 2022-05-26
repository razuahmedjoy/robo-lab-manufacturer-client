import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axiosPrivate from '../../../../api/axiosPrivate';
import Loader from '../../../shared/Loader';
import DeleteConfirmModal from '../Customers/DeleteConfirmModal';
import ManageOrderRow from './ManageOrderRow';
import UpdateOrderModal from './UpdateOrderModal';

const ManageOrders = () => {

    const [updateOrder, setupdateOrder] = useState(null)
    const [deleteIt, setDeleteIt] = useState(null)


    // using react query instead of normal fetch
    const { data: allorders, isLoading, refetch } = useQuery(['allorders'], () =>
        axiosPrivate.get(`https://cryptic-sierra-30199.herokuapp.com/all-orders`)
            .then(res => res.data)
    )
    if (isLoading) {
        return <Loader />
    }

    return (
        <div>
            <h2 className="text-center text-3xl my-5">Manage orders</h2>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>

                            <th></th>
                            <th>Tools</th>
                            <th>Customer</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {allorders ?
                            allorders.map((order, index) =>
                                <ManageOrderRow setupdateOrder={setupdateOrder} setDeleteIt={setDeleteIt} key={index} order={order} index={index} />

                            ) : "No orders yet"
                        }
                    </tbody>
                </table>

                {
                    deleteIt &&
                    <DeleteConfirmModal order={deleteIt} refetch={refetch} setDeleteIt={setDeleteIt} />
                }
                {
                    updateOrder &&
                    <UpdateOrderModal order={updateOrder} refetch={refetch} setUpdateorder={setupdateOrder} />
                }
            </div>
        </div>
    );
};

export default ManageOrders;