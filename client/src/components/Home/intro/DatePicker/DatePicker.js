import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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

export default function DateAndTimePickers() {

  const classes = useStyles();
  
  console.log(new Date().toISOString());
  return (
    <form  noValidate className="flexContainer3">
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

      <div className="background">
      <TextField InputProps={{ classes }}
        id="datetime-local"
        
        type="datetime-local"
        defaultValue="2017-05-24T10:30"

      />
      </div>
      <div className="cadreBoutton">
      <button className="btn btn-primary boutton ">Demander assistance</button>
      </div>
    </form>
  );
}
