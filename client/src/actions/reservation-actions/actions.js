import {
    GET_USER_RESERVATIONS,
    SET_RESERVATION,
    ACCEPT_RESERVATION,
    GET_MISSIONS,
    GET_CLIENT_HISTORY,


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

   export const getMissions = () => {
    return dispatch => {
      reservationsServices.getMissions_Request()
        .then((res) => {   
          dispatch({ type: GET_MISSIONS, payload: res.data });
        })
        .catch(err => console.log(err));
    };
  };
  
  export const getClientHistory = () => {
    return dispatch => {
      reservationsServices.getClientHistory_Request()
        .then((res) => {   
          dispatch({ type: GET_CLIENT_HISTORY , payload: res.data });
        })
        .catch(err => console.log(err));
    };
  };