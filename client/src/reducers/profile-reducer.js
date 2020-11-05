import {
  GET_PROFILES,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  CREATE_PROFILE,
  GET_PROFILE,
  UPDATE_PROFILE
} from '../actions/profile-actions/types';

const initialState = {
  profile: null,
  profiles: [],
  loading: true
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        profiles: action.payload,
        loading: true
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
        loading: false
      };
    case CREATE_PROFILE:
      return {
        ...state,
        profile: action.payload.profile
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null
      };
    case UPDATE_PROFILE:
      { console.log("ddddddddd",{...state.profile,...action.payload});
         return {
        ...state,
        profile: {
          ...state.profile,
          ...action.payload}
      };
      }
     
    default:
      return state;
  }
}

export default profileReducer;