import {
    GET_USER_RESERVATIONS,
    SET_RESERVATION,
    ACCEPT_RESERVATION,
    REJECT_RESERVATION

  } from './types';
  

import reservationsServices from './services';
  
  
  export const getAppointments = () => {
    return dispatch => {
      reservationsServices.getAppointments_Request()
        .then((res) => {   
          console.log("reservations",res.data);
          dispatch({ type: GET_USER_RESERVATIONS, payload: res.data });
        })
        .catch(err => console.log(err));
  
    };
  
  };
  

  export const setReservation = (values) => {
   alert('setReservation') ;
    return dispatch => {
      reservationsServices.setReservation_Request(values)
        .then((res) => {   
          console.log("reservations",res.data);
          dispatch({ type: SET_RESERVATION, payload: values });
        })
        .catch(err => console.log(err));
  
    };  
  };


  
  export const setReservationStatus = (id,value) => {
    console.log('setReservationStatus');
     return dispatch => {
       reservationsServices.setReservationStatus_Request(id,value)
       .then((res) => {   
          //  if(value === 'accepted')
           dispatch({ type: ACCEPT_RESERVATION});
          //  else
          //  dispatch({ type: REJECT_RESERVATION});
         })
         .catch(err => console.log(err));
   
     };  
   };
  