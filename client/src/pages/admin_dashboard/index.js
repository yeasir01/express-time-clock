import React, {useContext, useState, useEffect} from 'react';
import { AuthContext } from "../../context/auth";
import API from '../../utils/api';

const AdminDashboard = () => {
    
    const {authContext, setAuthContext} = useContext(AuthContext);
    const [userData, setUserData] = useState()

    const logout = () => {
        localStorage.clear();
        setAuthContext({})
    }


    const header = {
        headers: {
            "x-auth-token": authContext.token,
            "content-type": "application/json"
        }
    };
    
    useEffect(()=>{
    API.getUserData(header)
    .then( res => {
        setUserData(res)
    })
    .catch( err => {
        console.log(err)
    })
    },[])
    


    return(
    <>
        <h1>This is the admin dashboard!</h1>
        <h1>Welcome: {JSON.stringify(userData)}</h1>
        <button onClick={ logout }>Logout</button>
    </>
)}

export default AdminDashboard;