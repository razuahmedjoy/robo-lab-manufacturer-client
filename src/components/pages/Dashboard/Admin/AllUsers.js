import React from 'react';

const AllUsers = () => {
    return (
        <div>
            <h2 className="text-center text-2xl my-3">All Users</h2>

            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
               
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                       
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;