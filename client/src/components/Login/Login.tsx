// import React from 'react';
import LoginForm from "../LoginForm/LoginForm";
import "./Login.css"
// import {Drawer, Button} from "@mui/material";

export default function Login() 
{
    return(
        <div  className="loginContainer">
         <LoginForm />
        </div>
       
        
    )
    
}
// export default function LoginDrawer({open, setOpen}) {
//     const toggleDrawer = () => (event) => {
//         if (
//             event.type === "keydown" &&
//             (event.key === "Tab" || event.key === "Shift")
//         ) {
//             return;
//         }
//         setOpen(false);
//     };

//     return (
//         <Drawer anchor={top} open={open} onClose={toggleDrawer()}>
//             <div  className="loginContainer">
// //          <LoginForm />
// //         </div>
//         </Drawer>
//     )
// }


