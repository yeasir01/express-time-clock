import React from 'react';
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './style.css';
import MangImg from "./managment-resized.png"
import EmpImg from "./clerks.png"
import HomePageBar from "../../components/HomepageHeader";

function HomePage(){
    
    const isAuth = localStorage.getItem("user_token")

    const loggedOut = (
        <Link to="/admin/login" className="links">
            <Button variant="outlined" color="primary">
                Login
            </Button>
        </Link>
    )
    
    const loggedIn = (
        <Link to="/admin/dashboard" className="links">
            <Button variant="outlined" color="primary">
                Dashboard
            </Button>
        </Link>
    )
    
    return (
        <>
        <HomePageBar/>
        <Grid container>
            <Grid item sm={6} xs={12} className="left cont-height">
                <Typography variant="h4" className="head-font">
                   Kiosk
                </Typography>
                <img src={EmpImg} alt="clerk" className="imgs"/>
                <Link to="/kiosk" className="links">
                    <Button variant="outlined" color="primary">
                        Clock-In
                    </Button>
                </Link>
            </Grid>
            <Grid item sm={6} xs={12} className="right cont-height">
                <Typography variant="h4" className="head-font">
                    Admin
                </Typography>
                <img src={MangImg} alt="admin" className="imgs"/>
                { isAuth ? loggedIn : loggedOut}    
            </Grid>
        </Grid>
        </>
    )
}

export default HomePage;