
import {
    GET_USER_RESERVATIONS,
    SET_RESERVATION,
    GET_MISSIONS,
    GET_CLIENT_HISTORY

  } from '../actions/reservation-actions/types';
  

const initialState = {
    newReservation:null,
    myReservations:[],
    acceptedMissions:[]
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
      case GET_MISSIONS:
          return {
            ...state,
            acceptedMissions: action.payload
          };

      case GET_CLIENT_HISTORY:
          return {
            ...state,
            acceptedMissions: action.payload
          };
      default:
        return state;
    }

}


export default reservationReducer;