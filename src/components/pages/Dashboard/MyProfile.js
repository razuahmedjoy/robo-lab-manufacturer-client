import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loader from '../../shared/Loader';

const MyProfile = () => {

    const [user] = useAuthState(auth);

    // using react query instead of normal fetch
    const { data: profile, isLoading, refetch } = useQuery(['profile', user], () =>
        fetch(`http://localhost:5000/profile/${user?.email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loader />
    }

    const updateProfile = (e)=>{
        e.preventDefault();

        const profile = {
            education:e.target.education.value,
            address:e.target.address.value,
            contactno:e.target.contactno.address,
            linkedin:e.target.linkedin.address,
        }
        
    }
    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="profile p-2">
                    <div class="overflow-x-auto">
                        <table class="table table-compact table-bordered w-full">
                        
                            <tbody>
                              
                                <tr>
                                 
                                    <td>Name:</td>
                                    <td>{user?.displayName}</td>
                                    <td>Email:</td>
                                    <td>{profile.email}</td>
                                   
                                </tr>
                                <tr>
                                 
                                    <td>Role:</td>
                                    <td>{profile?.role}</td>
                                    <td>Address:</td>
                                    <td>{user?.address}</td>
                                   
                                </tr>
                                <tr>
                                 
                                  
                                   
                                </tr>
                                <tr>
                                 
                                    <td>Education:</td>
                                    <td>{user?.education}</td>
                                    <td>Contact No:</td>
                                    <td>{user?.contactno}</td>
                                   
                                </tr>
                                <tr>
                                 
                                    
                                   
                                </tr>
                                <tr>
                                 
                                    <td>LinkedIn:</td>
                                    <td>{user?.linkedin}</td>
                                   
                                </tr>
                           
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="update-form">
                    <h2 className="text-3xl text-center">Update Profile Info</h2>
                    <form onSubmit={updateProfile} className="flex flex-col items-center justify-center text-center mt-4 gap-y-2 mx-2">
                    
                    <input required type="text" name="education" placeholder="Education" class="input input-bordered w-full" />
                    <input required type="text" name="address" placeholder="Address" class="input input-bordered w-full" />
                    <input required type="number" name="contactno" placeholder="Phone no." class="input input-bordered w-full" />
                    <input type="url" name="linkedin" placeholder="Linked In Account" class="input input-bordered w-full" />
                    <input type="submit" value="Update"  class="btn btn-primary text-white w-full" />

                    


                    </form>

                </div>
            </div>

        </div>
    );
};

export default MyProfile;