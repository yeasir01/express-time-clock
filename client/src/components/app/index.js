import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../../pages/Homepage'
import Kiosk from '../../pages/Kiosk'
import LoginPage from '../../pages/Login';
import RegisterPage from '../../pages/Register';
import AdminDashboard from '../../pages/AdminDashboard';
import { AuthContext } from '../../context/Auth';

function App() {
    
    const [authContext, setAuthContext] = useState()
   
    return(
        <AuthContext.Provider value={{authContext, setAuthContext}}>
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/kiosk" component={Kiosk} />
                <Route path="/admin/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/admin/dashboard" component={AdminDashboard} />
            </Router>
        </AuthContext.Provider>
    )
}

export default App;