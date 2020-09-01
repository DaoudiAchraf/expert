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
    url: "profile/get"
  });
}


const ProfileServices = {
  createProfileRequest,
  getProfilesRequest
  
};

export default ProfileServices;

