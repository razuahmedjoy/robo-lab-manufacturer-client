import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Order = () => {

    const [tool, setTool] = useState({})

    const { id } = useParams();
    useEffect(() => {

        fetch('../../../tools.json')
            .then(res => res.json())
            .then(data => {
                const found = data.find(x => x._id === id);

                setTool(found);
            }
            );

    }, [id])

    return (
        <div>

        </div>
    );
};

export default Order;