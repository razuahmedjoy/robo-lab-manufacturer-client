import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loader from '../../../shared/Loader';
import DeleteToolModal from './DeleteToolModal';
import ManageToolsRow from './ManageToolsRow';

const ManageTools = () => {

    const [deleteIt, setDeleteIt] = useState(null);

    const { data: alltools, isLoading } = useQuery(['managetools'], () =>
        fetch('http://localhost:5000/tools')
            .then(response => response.json())
            .then(data => data)
    )


    if (isLoading) {
        return <Loader />
    }
    return (
        <div>
            <h2 className="text-center text-3xl my-3">Manage Tools</h2>

            <div>
                <div class="overflow-x-auto">
                    <table class="table table-compact w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Tools</th>
                                <th>Unit Price</th>
                                <th>Minimum Order</th>
                                <th>Available Stock</th>

                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                alltools ? alltools.map((tool, index) => <ManageToolsRow setDeleteIt={setDeleteIt} key={index} index={index} tool={tool} />)
                                    :
                                    <p>No tools are available</p>
                            }
                        </tbody>
                    </table>

                    {
                        deleteIt && <DeleteToolModal setDeleteIt={setDeleteIt} tool={deleteIt}/>
                    }


          

                </div>
            </div>
        </div >
    );
};

export default ManageTools;