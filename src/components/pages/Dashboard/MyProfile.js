import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../api/axiosPrivate';
import auth from '../../../firebase.init';
import Loader from '../../shared/Loader';

const MyProfile = () => {

    const [user] = useAuthState(auth);

    // using react query instead of normal fetch
    const { data: profile, isLoading, refetch } = useQuery(['profile', user], () =>
        fetch(`https://cryptic-sierra-30199.herokuapp.com/profile/${user?.email}`, {
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

    const updateProfile = async (e)=>{
        e.preventDefault();


        const profile = {}
        if(e.target.education.value){
            profile['education'] = e.target.education.value
        }
        if(e.target.address.value){
            profile['address'] = e.target.address.value
        }
        
        if(e.target.contactno.value){
            profile['contactno'] = e.target.contactno.value
        }
        if(e.target.linkedin.value){
            profile['linkedin'] = e.target.linkedin.value
        }

        

        const res = await axiosPrivate.put(`https://cryptic-sierra-30199.herokuapp.com/updateprofile/${user?.email}`,profile)
        const data = res.data.result;
        if(data.modifiedCount){
            toast.success("Updated Info!");
            refetch()

        }
        
    }
    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="profile p-2">
                    <div className="overflow-x-auto">
                        <table className="table table-compact table-bordered w-full">
                        
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
                                    <td>{profile?.address}</td>
                                   
                                </tr>
                                <tr>
                                 
                                  
                                   
                                </tr>
                                <tr>
                                 
                                    <td>Education:</td>
                                    <td>{profile?.education}</td>
                                    <td>Contact No:</td>
                                    <td>{profile?.contactno}</td>
                                   
                                </tr>
                                <tr>
                                 
                                    
                                   
                                </tr>
                                <tr>
                                 
                                    <td>LinkedIn:</td>
                                    <td>{profile?.linkedin}</td>
                                   
                                </tr>
                           
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="update-form">
                    <h2 className="text-3xl text-center">Update Profile Info</h2>
                    <form onSubmit={updateProfile} className="flex flex-col items-center justify-center text-center mt-4 gap-y-2 mx-2">
                    
                    <input  type="text" name="education" placeholder="Education" className="input input-bordered w-full" />
                    <input  type="text" name="address" placeholder="Address" className="input input-bordered w-full" />
                    <input  type="number" name="contactno" placeholder="Phone no." className="input input-bordered w-full" />
                    <input type="url" name="linkedin" placeholder="Linked In Account" className="input input-bordered w-full" />
                    <input type="submit" value="Update"  className="btn btn-primary text-white w-full" />

                    


                    </form>

                </div>
            </div>

        </div>
    );
};

export default MyProfile;