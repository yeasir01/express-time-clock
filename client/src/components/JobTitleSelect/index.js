import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import './style.css'

const jobTitles = [
  {
    value: '$12.00/hr',
    label: 'Service',
  },
  {
    value: '$15.00/hr',
    label: 'Supervisor',
  },
  {
    value: '$20.00/hr',
    label: 'Shift Manager',
  },
  {
    value: '$30.00/hr',
    label: 'General Manager',
  },
];


const names = [
  {
    value:'something',
    label: 'Nick',
  },
  {
    value: 'else',
    label: 'yeasir',
  },
  {
    value: 'here',
    label: 'Jake',
  },

];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));



export default function MultilineTextFields() {

  
  const classes = useStyles();
  const [jobTitle, setJobTitle] = React.useState('EUR');
  const [name, setName] = React.useState('EUR')

  const handleChange = (event) => {

    setJobTitle(event.target.value);
    setName(event.target.value)
    
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <div className="job-title">

          <TextField
            required id="standard-required"
            onChange={handleChange}
            helperText="Name"
          />
        
          <TextField
            required id="standard-required"
            select
            value={jobTitle}
            onChange={handleChange}
            helperText="Job Title"
          >
            {jobTitles.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </form>
    </div>
  );
}
