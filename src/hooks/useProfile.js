import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";


const useProfile = (user) => {
    const [stateuser] = useAuthState(auth)
    const [profile, setProfile]= useState({});
    const [profileLoading,setProfileLoading] = useState(true);

    useEffect(()=>{
        const email = stateuser?.email;
        if(email){
            fetch(`https://cryptic-sierra-30199.herokuapp.com/profile/${email}`,{
                method: 'GET',
                headers:{
                    'contentType': 'application/json',
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`, 
                }
            })
            .then(res => res.json())
            .then(data => {
                setProfile(data);
                setProfileLoading(false)

            })
        }
    },[user])

    return [profile,setProfile,profileLoading]
};

export default useProfile;