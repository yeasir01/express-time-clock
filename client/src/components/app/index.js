import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from '../../components/nav'
import LoginPage from '../../pages/login';
import RegisterPage from '../../pages/register';
import ClockInPage from '../../pages/clockin';
import AdminDashboard from '../../pages/admin_dashboard';
import { AuthContext } from "../../context/auth";
import PrivateRoute from '../../utils/auth_middleware';

const App = (props) =>{
    
    const [authContext, setAuthContext] = useState({})
    
    return(
        <AuthContext.Provider value={{authContext, setAuthContext}}>
            <Router>
                <Route exact path="/" component={Nav} />
                <Route path="/admin/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <PrivateRoute path="/admin/dashboard" component={AdminDashboard} />
                <Route path="/dashboard" component={AdminDashboard} />
                <Route path="/clockin" component={ClockInPage} />
            </Router>
        </AuthContext.Provider>
    )
}

export default App;