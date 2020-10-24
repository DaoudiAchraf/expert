import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DatePicker } from 'antd';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import Location from './Location/Location';
import moment from 'moment';
import { getProfiles } from '../../../../actions/profile-actions/actions';

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

const LocationDatePicker = props => {
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');


  const filterprofiles = e => {
    e.preventDefault();
    props.getProfiles(location, startDate);
    console.log("location = ", location);
    props.history.push("/search");
  }


  const classes = useStyles();
  const handlstartdatechange = (value, dateString) => {
    console.log(value);
    console.log(moment(value).format("dddd"));
    console.log(moment(value).format("HH:mm"));
    setStartDate(moment(value).format("dddd") + ',' + moment(value).format("HH:mm"));
  }
  console.log(new Date().toISOString());
  return (
    <form noValidate className="flexContainer3">

      {/* <div className='input-location'></div> */}
        <Location setLocation={setLocation} />
      
      <div className="dateTime-selector">
        <DatePicker
          size={'large'}
          showTime

          placeholder="Sat 04/07 : 11:00"
          onChange={handlstartdatechange} />
      </div>



      <button onClick={filterprofiles} className="btn btn-primary bttn ">Demander assistance</button>

    </form>
  );
}

export default withRouter(connect(null, { getProfiles })(LocationDatePicker));
