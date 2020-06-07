import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../../components/copyright';
import API from "../../utils/api";
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
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
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    alert: {
      marginTop: theme.spacing(1),
      width: "100%",
    }
}));

function SignUp() {
  const history = useHistory();

  const classes = useStyles();
  
  const [formData, setFormData] = useState()
  const [errorMsg, setErrorMsg] = useState(null);
  
  const handleFormChange = event => {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value})
    setErrorMsg(null)
  }

  const handleFormSubmit = (event) => {
    
    event.preventDefault();
    
    API.registerUser(formData)
    .then( res => {
        setErrorMsg(null)
        let token = res.data.user.token
        localStorage.setItem("user_token", token);
        history.push("/admin/dashboard");
    })
    .catch( err => {
        setErrorMsg(err.response.data.msg)
        localStorage.clear()
    })
  };
  
  document.title = "Express Clock | Registration";
  
  return (
    <>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>R</Avatar>
        <Typography component="h1" variant="h5">
        Registration Form
        </Typography>
        {errorMsg ? <Alert severity="error" className={classes.alert}>{errorMsg}</Alert> : null}
        <form className={classes.form} noValidate={false} onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required={true}
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={handleFormChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required={true}
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={handleFormChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required={true}
                fullWidth
                id="companyName"
                label="Company Name"
                name="companyName"
                onChange={handleFormChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required={true}
                fullWidth
                id="address"
                label="Address"
                name="address"
                onChange={handleFormChange}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                variant="outlined"
                required={true}
                fullWidth
                id="city"
                label="City"
                name="city"
                onChange={handleFormChange}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                required={true}
                fullWidth
                id="state"
                label="State"
                name="state"
                onChange={handleFormChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                variant="outlined"
                required={true}
                fullWidth
                id="postalCode"
                label="Zip Code"
                name="postalCode"
                onChange={handleFormChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required={true}
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleFormChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required={true}
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                onChange={handleFormChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required={true}
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleFormChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="agreeToTerms" color="primary" />}
                label="By registering, you confirm that you agree to the storing 
                and processing of your personal data by express time clock in 
                the Privacy Policy"
                required={true}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/admin/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box m={2}>
        <Copyright />
      </Box>
    </Container>
    </>
  );
}

export default SignUp;