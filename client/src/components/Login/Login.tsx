// import React from 'react';
import LoginForm from "../LoginForm/LoginForm"
import "./Login.css"
// import { CurrentUserContext} from '../CurrentUserContext';
// import {Drawer, Button} from "@mui/material";

function Login() {
// const { testData } = React.useContext(CurrentUserContext);

    return(
        <div  className="loginContainer">
            
            <LoginForm />
            {/* <h2>{testData}</h2> */}
        </div>
       
        
    )
    
}
export default Login

