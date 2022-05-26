import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('')
    console.log(user)


    useEffect(() => {

        const generateToken = async () => {
            const email = user?.user?.email || user?.email;
            const currentUser = {
                email: email,
              
                
            }
            // console.log(currentUser)

            if (email) {

                try{
                   const res =  await fetch(`https://cryptic-sierra-30199.herokuapp.com/updateuser`, {
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