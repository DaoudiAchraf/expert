import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Input } from 'antd';
import Location from './Location/Location';

import './DatePicker.css';

  const useStyles = makeStyles({
    
    

    underline: {
      "&&&:before": {
        borderBottom: "none"
      },
      "&&:after": {
        borderBottom: "none"
      }
    }
  });

export default function LocationDatePicker() {



  const classes = useStyles();
  
  console.log(new Date().toISOString());
  return (
    <form  noValidate className="flexContainer3">


        <Location />

  
      <div className="background">
      <TextField InputProps={{ classes }}
        id="datetime-local"
        
        type="datetime-local"
        defaultValue="2017-05-24T10:30"


      />
      </div>

      <div className="background">
      <TextField InputProps={{ classes }}
        id="datetime-local"
        
        type="datetime-local"
        defaultValue="2017-05-24T10:30"

      />
      </div>


      
      <button className="btn btn-primary bttn ">Demander assistance</button>
     
    </form>
  );
}
