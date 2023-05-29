// import { createContext, useEffect, useState} from 'react'
// import { ProviderProps } from 'react';


// export type UserType = {
//     email: string;
//     password: string;
// }
// export type UserContextType = {
//     currentUser?: UserType;
//     setCurrentUser: (user: UserType) => void;
//     checkLogin: () => void;
//     setAuthLoading: (isLoaing: boolean) => void;
//     authLoding: boolean;
//     handleLogout: () => void;
//     testData: string;
// }


// export const CurrentUserContext = createContext<UserContextType>;

// export const CurrentUserProvider: React.FC = ({ children }: ProviderProps) => {
//     const [currentUser, setCurrentUser] = useState<UserType>();
//     const [authLoading, setAuthLoading] = useState(false);

//     useEffect(() => {
//         checkLogin();
//     }, [])

//     const checkLogin = () => {
//         console.log("checkLogin");
        
//     }

//     const handleLogout = () => {
//         setCurrentUser;
//     }

//     const testData = "test data";

//     const stateValues = {
//         currentUser,
//         setCurrentUser,
//         checkLogin,
//         setAuthLoading,
//         authLoading,
//         handleLogout,
//         testData

//     }
//     return <CurrentUserContext.Provider value= {stateValues}>{children}</CurrentUserContext.Provider>

// }