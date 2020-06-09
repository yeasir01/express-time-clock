import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Copyright = () =>{
    return(
    <Typography variant="body2" color="textSecondary" align="center" style={{padding: "1rem 0"}}>
        {'Copyright © '}
        <Link color="inherit" href="/">Express Time Clock</Link>
        {' '}{new Date().getFullYear()}
    </Typography>
    )
}

export default Copyright;