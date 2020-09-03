import axios from 'axios';

import {
  GET_PROFILES,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  CREATE_PROFILE,
  PROFILE_CREATION_FAILED
} from './types';

import ProfileServices from "./services";


export const getProfiles = () => {
 console.log('getprofiles');
  return dispatch => {
    ProfileServices.getProfilesRequest().
      then((res) => {
        console.log("profiles",res.data);
        dispatch({ type: GET_PROFILES, payload: res.data });
      })
      .catch(err => console.log(err));


  };

};



export function createProfile(values) {
  return async dispatch => {
    try {
      const response = await ProfileServices.createProfileRequest(values);
      dispatch({ type: CREATE_PROFILE, payload: response.data });
    } catch (e) {
      dispatch({ type: PROFILE_CREATION_FAILED });
    }
  };
}

// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
