import React from 'react';
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import './style.css';
import DigitalClock from '../../components/DigitialClock'

function Kiosk(){
    return(
        <Grid container>
            
            <Grid item xs={false} sm={6} md={6} className="clock-grid grid">
                <Box>
                    <DigitalClock />
                </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={6} elevation={6} className="grid">
               <Link to="/timeclock"><h1>-->John Doe (TESTING)</h1></Link>
            </Grid>
        </Grid>
    )
}

export default Kiosk;