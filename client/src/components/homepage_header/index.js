import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import QueryBuilderSharpIcon from '@material-ui/icons/QueryBuilderSharp';
import './style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: ".7rem",
  },
}));

export default function HomePageBar() {
  const classes = useStyles();
  const isAuth = localStorage.getItem("user_token")

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <QueryBuilderSharpIcon />
          <Typography variant="h6" className={classes.title}>
          Express Time Clock
          </Typography>
          { 
          isAuth ? null : 
          <Link to="/register" className="links">
            <Button color="inherit">sign up</Button>
          </Link>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}