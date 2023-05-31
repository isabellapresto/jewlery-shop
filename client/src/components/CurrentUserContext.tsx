import {  ReactNode, createContext, useState, useEffect } from 'react'


export type User = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    isAdmin?: boolean;
}


export type UserType = {
   
        email: string,
        password: string
    };

interface UserContextType  {
    loggedInUser?: User | null;
    login: (user: UserType) => Promise<void>;
    logout: () => Promise<void>;
};

type Props = {
    children: ReactNode
}



 export const UserContextType = createContext<UserContextType>({
    loggedInUser: null,
    login: async () => {},
    logout: async () => {},
});

const UserProvider = ({ children }: Props) => {
    const [loggedInUser, setloggedInUser] = useState<User | null>(null)

    useEffect(() => {
        const authorization = async () => {
            try {
                const response = await fetch('/api/users/authorize')
                const data = await response.json() 
                    if (response.status === 200) {
                        setloggedInUser(data)
                    
                }
            }
            catch(err){
                console.log(err);
                
            }
        }
        authorization()
    }, [])

    const login = async (user: UserType) => {
        if (user) {
            try {
                const response = await fetch('api/users/login',{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                                       
                })
                const data = await response.json()
                localStorage.setItem('user', JSON.stringify(data));
                if(response.status === 200) {
                    setloggedInUser(data)
                    console.log('logged in successfully as ' + loggedInUser?.firstName);
                    
                } else{
                    console.log('wrong email or password');
                }
            }
            catch(err){
                console.log(err);
                
                
                
            }
            
        }
        
    }
    const logout = () => {
            setloggedInUser(null);
            return Promise.resolve();
        }

        

    return (
            <UserContextType.Provider value= {{ loggedInUser, login: login, logout: logout }}>
                {children}
            </UserContextType.Provider>
        )
 
}

export default UserProvider;
