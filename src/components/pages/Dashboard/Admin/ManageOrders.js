import React from 'react';
import { useQuery } from 'react-query';
import axiosPrivate from '../../../../api/axiosPrivate';
import Loader from '../../../shared/Loader';

const ManageOrders = () => {


    // using react query instead of normal fetch
    const { data: allorders, isLoading,refetch } = useQuery(['allorders'], () =>
        axiosPrivate.get(`http://localhost:5000/all-orders`)
            .then(res => res.data)
    )
    if(isLoading){
        return <Loader/>
    }

    return (
        <div>
            manage Orders
        </div>
    );
};

export default ManageOrders;