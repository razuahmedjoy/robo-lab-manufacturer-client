import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('')
    console.log(user)


    useEffect(() => {

        const generateToken = async () => {
            const email = user?.user?.email || user?.email;
            const currentUser = {
                email: email,
                role: 'customer',
            }
            // console.log(currentUser)

            if (email) {

                try{
                   const res =  await fetch(`http://localhost:5000/updateuser`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(currentUser)
                    })
                    const data = await res.json()
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                    
    
    
                }
                catch(error){
                    console.log(error)
                }

            }
        }
        generateToken();

    }, [user])

    return [token];
}

export default useToken;