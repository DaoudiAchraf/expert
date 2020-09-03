import {
    GET_USER_RESERVATIONS,
    SET_RESERVATION

  } from './types';
  

import reservationsServices from './services';
  
  
  export const getReservations = () => {
   
    return dispatch => {
      reservationsServices.getReservations_Request()
        .then((res) => {   
          console.log("reservations",res.data);
          dispatch({ type: GET_USER_RESERVATIONS, payload: res.data });
        })
        .catch(err => console.log(err));
  
  
    };
  
  };
  

  export const setReservation = () => {
   
    return dispatch => {
      reservationsServices.setReservation_Request()
        .then((res) => {   
          console.log("reservations",res.data);
          dispatch({ type: SET_RESERVATION, payload: res.data });
        })
        .catch(err => console.log(err));
  
  
    };
  
  };
  