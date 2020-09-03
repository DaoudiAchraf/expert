
import {
    GET_USER_RESERVATIONS,
    SET_RESERVATION,
    
  } from '../actions/reservation-actions/types';
  

const initialState = {
    newReservation:null,
    myReservations:[]
  
  };
  
  const reservationReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_USER_RESERVATIONS:
        return {
          ...state,
          myReservations : action.payload
        };
      case SET_RESERVATION:
        return {
            ...state,
            newReservation: action.payload
        };
    }

}


export default reservationReducer;