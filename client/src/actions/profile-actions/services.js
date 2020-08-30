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


// function getCurrentProfileRequest() {
//   return axiosInstance({
//     method: "get",
//     url: "profile/get",
//     data: null
//   });
// }

const ProfileServices = {
  createProfileRequest,
  getProfilesRequest
  
};

export default ProfileServices;

