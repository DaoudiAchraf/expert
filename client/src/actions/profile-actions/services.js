import axiosInstance from "../../config/axios-instance";


function createProfileRequest(body) {
    return axiosInstance({
      method: "post",
      url: "profile/add",
      data: body
    });
  }


function getProfilesRequest() {
  return axiosInstance({
    method: "get",
    url: "profiles"
  });
}

function getProfileRequest(id) {
  return axiosInstance({
    method: "get",
    url: "profile/"+id
  });
}


const ProfileServices = {
  createProfileRequest,
  getProfilesRequest,
  getProfileRequest
  
};

export default ProfileServices;

