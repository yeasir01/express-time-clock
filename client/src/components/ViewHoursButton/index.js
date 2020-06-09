import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './style.css'
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
toast.configure()

function viewHours(){
  toast('Hours ready to View!', {
    position: "top-center",
    autoClose: 1400,
    hideProgressBar: true,
    closeOnclick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
    
}

function ContainedButtons() {
  
  const classes = useStyles();

  return (
    <div className={classes.root} id='btn'>
      
      <Button 
      variant="contained" 
      color="primary"
      onClick={viewHours}>
        View Time
      </Button>
      
    </div>
  );
}

export default ContainedButtons;