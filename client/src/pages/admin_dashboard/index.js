import React, { useContext } from 'react';
import { Route, useHistory } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import Loader from '../../components/loader'
import API from '../../utils/api';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems } from '../../components/listitems';
import Copyright from '../../components/copyright'
import Avatar from '@material-ui/core/Avatar';
import AvatarImg from './Profile_avatar_placeholder_large.png';
import DashboardContent from '../../components/dashboard_content';
import LocationList from '../../components/locationslist';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  signIn: {
    marginRight: ".5rem",
  },
}));

function AdminDashboard() {

    const history = useHistory();
    
    const {authContext, setAuthContext} = useContext(AuthContext);

    const logout = () => {
        localStorage.clear();
        setAuthContext()
        history.push("/");
    }

    const localToken = localStorage.getItem("user_token")

    if (localToken) {

        const httpHeader = {
        headers: {
            "x-auth-token": localToken,
            "content-type": "application/json"
        }
        }

        API.getUserData(httpHeader)
        .then( res => {
            if (res.status === 200 && !authContext ){
                setAuthContext(res.data)
            } else if (res.status === 401 || !res.status) {
                setAuthContext()
            }
        })
        .catch( err => {
            setAuthContext()
        })
    } else {
        history.push("/admin/login");
    }

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  
  const handleDrawerClose = () => {
    setOpen(false);
  };
    
    return(
      <>
      {!authContext ? <Loader /> : (
      <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            {authContext.companyName}
          </Typography>
          <IconButton color="inherit" onClick={logout}>
            <Typography className={classes.signIn}>
              {`${authContext.firstName} ${authContext.lastName}`}
            </Typography>
              <Avatar src={AvatarImg} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>

            <Route exact path="/admin/dashboard" component={DashboardContent} />
            <Route exact path="/admin/dashboard/locations" component={LocationList} />

          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
    )}
    </>
    )
}

export default AdminDashboard;