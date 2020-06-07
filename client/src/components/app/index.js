import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../../pages/homepage'
import Kiosk from '../../pages/kiosk'
import LoginPage from '../../pages/login';
import RegisterPage from '../../pages/register';
import AdminDashboard from '../../pages/admin_dashboard';
import { AuthContext } from "../../context/auth";

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