import axiosInstance from "../../config/axios-instance";


function addProfileRequest(body) {
    return axiosInstance({
      method: "post",
      url: "api/profile/add",
      data: body
    });
  }


function getProfileRequest() {
  return axiosInstance({
    method: "get",
    url: "api/profile/get",
    data: null
  });
}

