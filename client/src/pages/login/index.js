import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../../components/copyright';
import API from '../../utils/api';
import BackgroundImg from './workplace.jpg'
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles( theme => ({
  root: {
      height: '100vh',
  },
  image: {
      backgroundImage: `url(${BackgroundImg})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
  },
  paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  },
  avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
  },
  form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
  },
  submit: {
      margin: theme.spacing(3, 0, 2),
  },
  alert: {
    marginTop: theme.spacing(1),
    width: "100%",
  },
}));

function SignInSide() {
  const history = useHistory();

  const classes = useStyles();
  const [userLoginData, setLoginData] = useState();
  const [errorStatus, setErrorStatus] = useState(null);
  
  const handleFormChange = (event) => {
    setErrorStatus(null)
    
    const { name, value } = event.target;
    setLoginData({...userLoginData, [name]: value})
  };

  const handleFormSubmit = (event) => {
    
    event.preventDefault();
    
    API.authenticateUser(userLoginData)
    .then( res => {
        setErrorStatus(null)
        let token = res.data.user.token
        localStorage.setItem("user_token", token);
        history.push("/admin/dashboard");
    })
    .catch( err => {
        setErrorStatus(err.response.status)
        localStorage.clear()
    })
  };
  
    let errorMsg;

    if (errorStatus === 403) {
      errorMsg = "The username or password is incorrect!";
    } else if(errorStatus === 500) {
      errorMsg = "Internal server issue, please contact admin!";
    } else if (errorStatus === 400) {
      errorMsg = "Please complete all required fields!";
    } else if (errorStatus === 404) {
      errorMsg = "Unable to communicate with the server!";
    } else {
      errorMsg = "Oops, somthing went wrong!"
    };

  return (
    <>

    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>A</Avatar>
          <Typography component="h1" variant="h5">
            Administration Login
          </Typography>

          {errorStatus ? <Alert severity="error" className={classes.alert}>{errorMsg}</Alert> : null}

          <form className={classes.form} noValidate={false} onSubmit={handleFormSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required = {true}
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={handleFormChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required = {true}
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleFormChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/">Back Home</Link>
              </Grid>
              <Grid item>
                <Link to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    </>
  );
}

export default SignInSide;