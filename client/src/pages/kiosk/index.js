import React from 'react';
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import './style.css';
import DigitalClock from '../../components/digitial_clock'

function Kiosk(){
    return(
        <Grid container>
            
            <Grid item xs={false} sm={6} md={6} className="clock-grid grid">
                <Box>
                    <DigitalClock />
                </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={6} elevation={6} className="grid">
               Grid Test
            </Grid>
        </Grid>
    )
}

export default Kiosk;