import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  CREATE_PROFILE
} from '../actions/profile-actions/types';

const initialState = {
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case CREATE_PROFILE:
      return {
        ...state,
        profile: action.payload.profile
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null
      };
    default:
      return state;
  }
}

export default profileReducer;